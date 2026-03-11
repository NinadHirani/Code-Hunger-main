import { Link } from "wouter";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import type { Problem } from "@shared/schema";
import { problemsData } from "@/data/problems";

interface DisplayProblem {
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

const ProblemsTable: React.FC = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const [user] = useAuthState(auth);

  // Get problems from API - with local fallback
  const { data: apiProblems = [] } = useQuery<Problem[]>({
    queryKey: ["/api/problems"],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Transform API problems to match the display format
  // Use API problems if available, otherwise fallback to local problemsData
  const problems: DisplayProblem[] =
    apiProblems.length > 0
      ? apiProblems.map((p): DisplayProblem => ({
        id: p.id,
        title: p.title,
        slug: p.slug || p.id,
        difficulty: (p.difficulty as "Easy" | "Medium" | "Hard") || "Easy",
        category: (p.topics && p.topics[0]) || "Algorithm",
        order: p.order ?? 0,
        videoId: p.videoId || undefined,
        topics: p.topics || [],
        acceptance: p.acceptance ?? undefined,
        submissions: p.submissions ?? undefined,
        accepted: p.accepted ?? undefined,
      }))
      : problemsData.map((p): DisplayProblem => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        difficulty: p.difficulty,
        category: p.category,
        order: p.order,
        videoId: p.videoId,
        topics: p.topics,
        acceptance: p.acceptance,
        submissions: p.submissions,
        accepted: p.accepted,
      }));

  const sortedProblems = [...problems].sort((a, b) => a.order - b.order);

  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-dark-green-s";
      case "Medium":
        return "text-dark-yellow";
      case "Hard":
        return "text-dark-pink";
      default:
        return "text-dark-yellow";
    }
  };

  return (
    <>
      <div className="bg-dark-layer-1/80 backdrop-blur-sm rounded-2xl border border-dark-divider-border-2 overflow-hidden shadow-xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-dark-label-2 uppercase bg-dark-fill-3/50 border-b border-dark-divider-border-2">
              <tr>
                <th scope="col" className="px-4 py-4 w-0 font-semibold tracking-wide">Status</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wide">Title</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wide">Difficulty</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wide">Category</th>
                <th scope="col" className="px-6 py-4 font-semibold tracking-wide">Solution</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {sortedProblems.map((problem: DisplayProblem, idx: number) => (
                <tr
                  className={`${idx % 2 === 1 ? "bg-dark-layer-1/50" : "bg-transparent"} border-b border-dark-divider-border-2/50 hover:bg-dark-fill-2/80 transition-all duration-200 group`}
                  key={problem.slug}
                >
                  <th className="px-4 py-5 font-medium whitespace-nowrap text-dark-green-s">
                    <BsCheckCircle fontSize={"18"} width="18" />
                  </th>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-dark-gray-6 font-mono text-xs w-4">{problem.order}.</span>
                      <Link
                        href={`/problems/${problem.slug}`}
                        className="hover:text-brand-orange cursor-pointer font-medium transition-colors"
                      >
                        {problem.title}
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${problem.difficulty === "Easy"
                        ? "bg-dark-green-s/20 text-dark-green-s"
                        : problem.difficulty === "Medium"
                          ? "bg-dark-yellow/20 text-dark-yellow"
                          : "bg-dark-pink/20 text-dark-pink"
                      }`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-dark-gray-7">
                    <span className="px-2 py-1 bg-dark-fill-3/50 rounded-md text-xs">
                      {problem.topics?.[0] || problem.category || "Algorithm"}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    {problem.videoId ? (
                      <AiFillYoutube
                        fontSize={"28"}
                        className="cursor-pointer hover:text-red-600 transition-colors text-dark-gray-6"
                        onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })}
                      />
                    ) : (
                      <p className="text-dark-gray-6 text-xs italic">Coming soon</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {youtubePlayer.isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50">
          <div
            className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl flex items-center justify-center">
            <div className="w-full relative aspect-video shadow-2xl shadow-black">
              <IoClose
                fontSize={"35"}
                className="cursor-pointer absolute -top-12 right-0 text-white hover:text-brand-orange transition-colors"
                onClick={closeModal}
              />
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubePlayer.videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl border border-white/10"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProblemsTable;
