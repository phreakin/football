"use client";
import { useState } from "react";
import Link from "next/link";
import PlayerCard, { type Player } from "./PlayerCard";

const playersToWatch: Player[] = [
  {
    name: "CeeDee Lamb",
    team: "DAL",
    position: "WR",
    posColor: "#818cf8",
    emoji: "⚡",
    grade: 92,
    stats: "11 targets, 138 yds, 1 TD last week",
    trend: "up",
    note: "Elite target share continues. Faces a CB23 corner in a dome. Lock him in.",
  },
  {
    name: "Breece Hall",
    team: "NYJ",
    position: "RB",
    posColor: "#00c853",
    emoji: "🏃",
    grade: 87,
    stats: "24 carries, 118 yds, 8 targets",
    trend: "up",
    note: "Workhorse role is cemented. Opponent ranks 28th vs RBs. High-floor must-start.",
  },
  {
    name: "Sam LaPorta",
    team: "DET",
    position: "TE",
    posColor: "#ffd700",
    emoji: "🎯",
    grade: 84,
    stats: "9 targets, 82 yds, 1 TD",
    trend: "up",
    note: "Lions' offense is rolling. LaPorta is the safety valve in tight red zone situations.",
  },
  {
    name: "Jaylen Waddle",
    team: "MIA",
    position: "WR",
    posColor: "#818cf8",
    emoji: "💨",
    grade: 79,
    stats: "8 targets, 72 yds last week",
    trend: "neutral",
    note: "Monitor Tyreek's status. If Hill is out, Waddle becomes a top-10 WR play.",
  },
];

const keeperPicks: Player[] = [
  {
    name: "Malik Nabers",
    team: "NYG",
    position: "WR",
    posColor: "#818cf8",
    emoji: "🌟",
    grade: 88,
    stats: "10 targets, 101 yds, 1 TD",
    trend: "up",
    note: "Rookie sensation. Keep at all costs in keeper leagues — his dynasty value is elite.",
  },
  {
    name: "Marvin Harrison Jr.",
    team: "ARI",
    position: "WR",
    posColor: "#818cf8",
    emoji: "🚀",
    grade: 85,
    stats: "9 targets, 89 yds, 1 TD",
    trend: "up",
    note: "Blue-chip keeper with 5+ years of prime ahead. Target share trending up each week.",
  },
  {
    name: "Bijan Robinson",
    team: "ATL",
    position: "RB",
    posColor: "#00c853",
    emoji: "💎",
    grade: 90,
    stats: "21 carries, 97 yds, 6 targets",
    trend: "up",
    note: "One of the most coveted keeper RBs in the league. Lock him up long-term.",
  },
  {
    name: "Bo Nix",
    team: "DEN",
    position: "QB",
    posColor: "#ef4444",
    emoji: "🎓",
    grade: 76,
    stats: "285 yds, 2 TD, 0 INT",
    trend: "up",
    note: "Improving each week with rushing upside. A keeper QB league bargain before his breakout.",
  },
];

const weeklyTop: Player[] = [
  {
    name: "Patrick Mahomes",
    team: "KC",
    position: "QB",
    posColor: "#ef4444",
    emoji: "👑",
    grade: 95,
    stats: "348 yds, 3 TD, 0 INT last week",
    trend: "up",
    note: "Top overall play this week. Faces a defense ranked 31st in QB fantasy points allowed.",
  },
  {
    name: "Derrick Henry",
    team: "BAL",
    position: "RB",
    posColor: "#00c853",
    emoji: "🦏",
    grade: 91,
    stats: "28 carries, 149 yds, 2 TDs",
    trend: "up",
    note: "Dominant run-blocking offense. Henry gets a juicy matchup vs. a team allowing 5.4 YPC.",
  },
  {
    name: "Amon-Ra St. Brown",
    team: "DET",
    position: "WR",
    posColor: "#818cf8",
    emoji: "☀️",
    grade: 89,
    stats: "12 targets, 118 yds, 1 TD",
    trend: "up",
    note: "Slot target machine in the best offense in football. Perfect flex/WR2 this week.",
  },
  {
    name: "Travis Kelce",
    team: "KC",
    position: "TE",
    posColor: "#ffd700",
    emoji: "🐐",
    grade: 93,
    stats: "8 targets, 76 yds, 1 TD",
    trend: "up",
    note: "GOAT TE. Slight target dip but TD upside remains elite when Mahomes is clicking.",
  },
];

const TABS = [
  { id: "watch", label: "Players to Watch", data: playersToWatch },
  { id: "keepers", label: "Keeper Picks", data: keeperPicks },
  { id: "top", label: "Top Players This Week", data: weeklyTop },
];

export default function PremiumSection() {
  const [activeTab, setActiveTab] = useState("watch");
  const isLoggedIn = false; // In a real app this would come from auth context

  const activeData = TABS.find((t) => t.id === activeTab)?.data ?? [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-extrabold">Weekly Premium Picks</h2>
            <span className="premium-badge text-xs font-bold px-2 py-0.5 rounded-full">PRO</span>
          </div>
          <p className="text-sm text-gray-500">
            Updated every Tuesday — expert fantasy picks, keeper targets &amp; weekly studs
          </p>
        </div>
        {!isLoggedIn && (
          <Link
            href="/premium"
            className="bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Unlock Premium — $4.99/week
          </Link>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto scrollbar-hide pb-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-[#00c853] text-black"
                : "bg-[#111827] text-gray-400 hover:text-white border border-[#1f2937]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {activeData.map((player, i) => (
          <PlayerCard
            key={player.name}
            player={player}
            locked={!isLoggedIn && i >= 1} // Show 1 free, rest locked
          />
        ))}
      </div>

      {/* Upsell banner */}
      {!isLoggedIn && (
        <div className="mt-6 bg-gradient-to-r from-[#1a1f3e] to-[#0d2040] border border-[#ffd700]/30 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🏆</span>
              <h3 className="text-lg font-bold">
                Win Your Fantasy League This Season
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Full access to all weekly picks, players to watch, keeper recommendations, waiver wire targets, and playoff simulator.
            </p>
            <ul className="mt-3 space-y-1">
              {[
                "Weekly Players to Watch — every position",
                "Keeper & Dynasty tier lists",
                "Top players rankings each week",
                "Waiver wire priority picks",
                "Playoff simulator & matchup analyzer",
              ].map((feature) => (
                <li key={feature} className="text-xs text-gray-300 flex items-center gap-2">
                  <span className="text-[#00c853]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center shrink-0">
            <div className="text-3xl font-extrabold text-[#ffd700]">$4.99</div>
            <div className="text-xs text-gray-400">per week</div>
            <Link
              href="/premium"
              className="mt-3 block bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Start Free Trial
            </Link>
            <p className="text-xs text-gray-600 mt-1.5">Cancel anytime</p>
          </div>
        </div>
      )}
    </section>
  );
}
