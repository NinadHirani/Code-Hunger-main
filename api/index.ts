import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";

const app = express();

// Enable CORS for all origins in development and production
app.use((req, res, next) => {
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
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
      console.error("[API Error]", err);
      res.status(status).json({ message });
    });
  })().catch((error: unknown) => {
    initError = error instanceof Error ? error : new Error(String(error));
    console.error("[API Init Error]", initError);
  });

  return initPromise;
}

// Vercel serverless handler
export default async function handler(req: any, res: any) {
  // Normalize URL when Vercel rewrites the request
  if (req.headers && req.headers["x-matched-path"]) {
    const matchedPath = req.headers["x-matched-path"] as string;
    if (matchedPath && matchedPath !== "/api/index.ts") {
      req.url = matchedPath;
    }
  }

  // Handle case where req.url was stripped to /index.ts or /api/index.ts
  if (req.url && (req.url.startsWith("/api/index.ts") || req.url.startsWith("/api/index"))) {
    const originalUrl = req.url.replace(/^\/api\/index(\.ts)?/, "");
    req.url = originalUrl ? (originalUrl.startsWith("/") ? originalUrl : `/${originalUrl}`) : "/";
  }

  await init();
  if (initError) {
    return res.status(500).json({
      message: "API initialization failed",
      error: initError.message,
    });
  }

  app(req, res);
}