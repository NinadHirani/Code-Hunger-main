/**
 * Pre-loaded coding problems for Code-Hunger
 * Provides full fallback and instant loading when API has latency or is unreachable.
 */
import { sampleProblems, DetailedProblem, getDetailedProblem, getAllDetailedProblems } from "@shared/problems";

export type { DetailedProblem };
export { getDetailedProblem, getAllDetailedProblems, sampleProblems };

export interface ProblemData {
  id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  order: number;
  videoId?: string;
  topics?: string[];
  acceptance?: number;
  submissions?: number;
  accepted?: number;
}

export const problemsData: ProblemData[] = sampleProblems.map((p) => ({
  id: p.slug,
  title: p.title,
  slug: p.slug,
  difficulty: p.difficulty,
  category: p.topics?.[0] || "Algorithm",
  order: p.order,
  videoId: p.videoId,
  topics: p.topics,
  acceptance: p.acceptance,
  submissions: p.submissions,
  accepted: p.accepted,
}));
