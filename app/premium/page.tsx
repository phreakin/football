import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Go Premium | GridironEdge",
  description: "Unlock weekly player picks, keeper recommendations, top players, waiver wire targets, and more.",
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with free articles and basic tools",
    features: [
      "NFL news & injury reports",
      "Fantasy Football 101 tutorials",
      "Basic start/sit tool",
      "Community forum access",
      "1 premium pick preview/week",
    ],
    locked: [
      "Full weekly player rankings",
      "Players to Watch list",
      "Keeper recommendations",
      "Waiver wire picks",
      "Playoff simulator",
    ],
    cta: "Current Plan",
    ctaStyle: "border border-[#1f2937] text-gray-400 cursor-default",
    highlight: false,
  },
  {
    name: "Pro Weekly",
    price: "$4.99",
    period: "per week",
    description: "Full access to all weekly premium picks & tools",
    features: [
      "Everything in Free",
      "Weekly Players to Watch (all positions)",
      "Keeper & Dynasty tier lists",
      "Top 30 players every week",
      "Waiver wire priority list",
      "Matchup analyzer",
      "Start/Sit optimizer (advanced)",
      "Email delivery every Tuesday",
    ],
    locked: [],
    cta: "Start Free Trial",
    ctaStyle: "bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black font-bold hover:opacity-90",
    highlight: true,
  },
  {
    name: "Pro Season",
    price: "$29.99",
    period: "per season",
    description: "Best value — full season access at a discount",
    features: [
      "Everything in Pro Weekly",
      "Draft preparation guide & mock tools",
      "Full dynasty rankings",
      "Playoff simulator",
      "Historical player data",
      "Priority customer support",
    ],
    locked: [],
    cta: "Get Season Pass",
    ctaStyle: "bg-[#00c853] hover:bg-[#00b048] text-black font-bold",
    highlight: false,
  },
];

export default function PremiumPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Premium Access
        </span>
        <h1 className="text-4xl font-extrabold mb-4">
          Win Your Fantasy League <span className="text-[#00c853]">Every Week</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Get expert-curated weekly picks, keeper recommendations, top players, and the analysis tools that give you a real edge over your competition.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-[#111827] rounded-2xl border p-8 flex flex-col ${
              plan.highlight
                ? "border-[#ffd700]/50 shadow-lg shadow-[#ffd700]/10"
                : "border-[#1f2937]"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 text-sm mb-1">/{plan.period}</span>
              </div>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>

            <ul className="space-y-2 flex-1 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-[#00c853] mt-0.5 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
              {plan.locked.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 shrink-0">✗</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg text-sm transition-opacity ${plan.ctaStyle}`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* What's included section */}
      <div className="bg-[#111827] rounded-2xl border border-[#1f2937] p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">What You Get Every Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "👀",
              title: "Players to Watch",
              desc: "Every Tuesday, get our curated list of players to target across all positions — breakout candidates, matchup plays, and volume monsters.",
            },
            {
              emoji: "💎",
              title: "Keeper Recommendations",
              desc: "Know exactly who to keep in redraft and keeper leagues. We rank every player by keeper value with multi-year projections.",
            },
            {
              emoji: "🏆",
              title: "Top Players This Week",
              desc: "Full weekly rankings by position with matchup grades, injury notes, and start confidence scores for every tier.",
            },
            {
              emoji: "📋",
              title: "Waiver Wire Picks",
              desc: "Priority-ranked waiver adds with FAAB recommendations, pickup reasoning, and projected usage for each player.",
            },
            {
              emoji: "🔄",
              title: "Start/Sit Optimizer",
              desc: "Enter your lineup and get data-driven start/sit advice based on matchup, usage trends, and our proprietary edge score.",
            },
            {
              emoji: "📊",
              title: "Matchup Analyzer",
              desc: "See how each defense matches up against every offensive position with historical data and week-specific scheme notes.",
            },
          ].map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <span className="text-3xl shrink-0">{feature.emoji}</span>
              <div>
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">
          Already a member?{" "}
          <Link href="/" className="text-[#00c853] hover:underline">
            Sign in to your account
          </Link>
        </p>
      </div>
    </div>
  );
}
