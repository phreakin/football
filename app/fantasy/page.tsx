import type { Metadata } from "next";
import Link from "next/link";
import PremiumSection from "@/components/PremiumSection";

export const metadata: Metadata = {
  title: "Fantasy Football | GridironEdge",
  description: "Fantasy football advice, weekly picks, start/sit tools, and expert rankings.",
};

const fantasyArticles = [
  { emoji: "🏆", title: "Week 14 Start/Sit: Every Tough Decision Analyzed", category: "Start/Sit", time: "Today" },
  { emoji: "📋", title: "Waiver Wire Targets: 10 Players to Add Before Sunday", category: "Waiver Wire", time: "Today" },
  { emoji: "🔄", title: "Trade Value Chart: Week 14 Buy Low, Sell High Targets", category: "Trades", time: "Yesterday" },
  { emoji: "📊", title: "FAAB Strategy: How Much to Spend on This Week's Top Adds", category: "Waiver Wire", time: "Yesterday" },
  { emoji: "💎", title: "Playoff Bye Week Schedule: Which Teams Hurt Your Roster?", category: "Strategy", time: "2 days ago" },
  { emoji: "🎯", title: "PPR vs. Standard Scoring: Rankings Differences That Matter", category: "Rankings", time: "3 days ago" },
];

export default function FantasyPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold mb-2">Fantasy Football</h1>
          <p className="text-gray-400">Expert advice, tools, and picks to dominate your league</p>
        </div>

        {/* Quick tools */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { emoji: "🤔", label: "Start/Sit Tool", free: true },
            { emoji: "🔄", label: "Trade Analyzer", free: true },
            { emoji: "📋", label: "Waiver Planner", free: true },
            { emoji: "📊", label: "Matchup Grades", free: false },
          ].map((tool) => (
            <Link
              key={tool.label}
              href={tool.free ? "#" : "/premium"}
              className="bg-[#111827] border border-[#1f2937] rounded-xl p-4 flex flex-col items-center gap-2 card-hover text-center"
            >
              <span className="text-3xl">{tool.emoji}</span>
              <span className="text-sm font-medium">{tool.label}</span>
              {!tool.free && (
                <span className="text-xs bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black font-bold px-2 py-0.5 rounded-full">
                  PRO
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Articles */}
        <h2 className="text-xl font-bold mb-4">Fantasy Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {fantasyArticles.map((article, i) => (
            <Link key={i} href="#" className="group block">
              <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5 card-hover">
                <span className="text-3xl">{article.emoji}</span>
                <span className="ml-2 text-xs font-semibold text-[#00c853]">{article.category}</span>
                <h3 className="mt-2 font-bold text-sm group-hover:text-[#00c853] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2">{article.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Premium section */}
      <PremiumSection />
    </div>
  );
}
