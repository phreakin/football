import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tutorials & Guides | GridironEdge",
  description: "Learn fantasy football strategy from beginner to advanced with expert tutorials and guides.",
};

const levels = [
  {
    level: "Beginner",
    color: "#00c853",
    description: "Start here if you're new to fantasy football",
    tutorials: [
      { emoji: "🎓", title: "Fantasy Football 101: Complete Beginner's Guide", modules: 8, duration: "45 min" },
      { emoji: "📋", title: "Understanding Scoring Systems: PPR, Standard, Half-PPR", modules: 4, duration: "20 min" },
      { emoji: "🔄", title: "Trades & Waivers: Your First Moves as a New Manager", modules: 5, duration: "25 min" },
      { emoji: "📅", title: "Managing Your Roster Week to Week", modules: 3, duration: "15 min" },
    ],
  },
  {
    level: "Intermediate",
    color: "#ffd700",
    description: "Level up your game with smarter strategy",
    tutorials: [
      { emoji: "🧠", title: "Draft Blueprint: Rounds 1–10 Positional Strategy", modules: 6, duration: "35 min" },
      { emoji: "📊", title: "Reading the NFL Injury Report: What Each Status Means", modules: 4, duration: "20 min" },
      { emoji: "🎯", title: "Identifying Buy-Low Trade Targets Every Week", modules: 5, duration: "30 min" },
      { emoji: "⚡", title: "Stacking WRs with QBs: Correlation-Based Lineup Building", modules: 6, duration: "35 min" },
    ],
  },
  {
    level: "Advanced",
    color: "#818cf8",
    description: "Master analytics and optimize every decision",
    tutorials: [
      { emoji: "📈", title: "Using EPA, DVOA, and PFF Grades for Fantasy Decisions", modules: 8, duration: "50 min" },
      { emoji: "🏆", title: "Dynasty League Mastery: From Startup to Championship", modules: 12, duration: "90 min" },
      { emoji: "💰", title: "DFS GPP Strategy: Stacks, Fades, and Tournament Lineups", modules: 10, duration: "60 min" },
      { emoji: "🔬", title: "Target Share Analysis: Finding Hidden Value", modules: 7, duration: "45 min" },
    ],
  },
];

export default function TutorialsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold mb-2">Tutorials &amp; Guides</h1>
        <p className="text-gray-400">Step-by-step guides to sharpen your fantasy football skills</p>
      </div>

      <div className="space-y-12">
        {levels.map((section) => (
          <div key={section.level}>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-sm font-bold uppercase px-3 py-1 rounded-full"
                style={{ background: `${section.color}20`, color: section.color }}
              >
                {section.level}
              </span>
              <p className="text-sm text-gray-500">{section.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {section.tutorials.map((tut, i) => (
                <Link key={i} href="#" className="group block">
                  <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5 card-hover h-full">
                    <span className="text-3xl">{tut.emoji}</span>
                    <h3 className="mt-3 font-bold text-sm leading-snug group-hover:text-[#00c853] transition-colors">
                      {tut.title}
                    </h3>
                    <div className="flex gap-3 mt-3 text-xs text-gray-600">
                      <span>📖 {tut.modules} modules</span>
                      <span>⏱️ {tut.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
