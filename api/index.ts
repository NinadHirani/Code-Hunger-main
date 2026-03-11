import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes.ts";

const app = express();

// Allow same-origin and Vercel preview URLs
app.use((req, res, next) => {
  const origin = req.headers.origin || "";
  if (!origin || origin.includes("vercel.app") || origin.includes("localhost")) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use a promise so concurrent requests during init all wait for the same init
let initPromise: Promise<void> | null = null;
let initError: Error | null = null;

function init(): Promise<void> {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
    });
  })().catch((error: unknown) => {
    initError = error instanceof Error ? error : new Error(String(error));
  });

  return initPromise;
}

// Vercel serverless handler
export default async function handler(req: any, res: any) {
  await init();
  if (initError) {
    return res.status(500).json({
      message: "API initialization failed",
      error: initError.message,
    });
  }
  app(req, res);
}