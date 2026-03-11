import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Player Rankings | GridironEdge",
  description: "Weekly fantasy football player rankings by position — QB, RB, WR, TE, K, DST.",
};

type Tier = "Elite" | "Starter" | "Flex" | "Streamer" | "Bench";

interface RankedPlayer {
  rank: number;
  name: string;
  team: string;
  opponent: string;
  position: string;
  posColor: string;
  tier: Tier;
  projPoints: number;
  trend: "up" | "down" | "neutral";
}

const qbRankings: RankedPlayer[] = [
  { rank: 1, name: "Patrick Mahomes", team: "KC", opponent: "vs BAL", position: "QB", posColor: "#ef4444", tier: "Elite", projPoints: 28.4, trend: "up" },
  { rank: 2, name: "Jalen Hurts", team: "PHI", opponent: "vs DAL", position: "QB", posColor: "#ef4444", tier: "Elite", projPoints: 26.8, trend: "neutral" },
  { rank: 3, name: "Lamar Jackson", team: "BAL", opponent: "@ KC", position: "QB", posColor: "#ef4444", tier: "Elite", projPoints: 25.2, trend: "up" },
  { rank: 4, name: "Josh Allen", team: "BUF", opponent: "vs MIA", position: "QB", posColor: "#ef4444", tier: "Elite", projPoints: 24.7, trend: "up" },
  { rank: 5, name: "Dak Prescott", team: "DAL", opponent: "@ PHI", position: "QB", posColor: "#ef4444", tier: "Starter", projPoints: 22.1, trend: "down" },
  { rank: 6, name: "Tua Tagovailoa", team: "MIA", opponent: "@ BUF", position: "QB", posColor: "#ef4444", tier: "Starter", projPoints: 21.5, trend: "neutral" },
  { rank: 7, name: "C.J. Stroud", team: "HOU", opponent: "vs IND", position: "QB", posColor: "#ef4444", tier: "Starter", projPoints: 20.8, trend: "up" },
  { rank: 8, name: "Jordan Love", team: "GB", opponent: "vs SEA", position: "QB", posColor: "#ef4444", tier: "Starter", projPoints: 19.4, trend: "neutral" },
];

const TIER_COLORS: Record<Tier, string> = {
  Elite: "#ffd700",
  Starter: "#00c853",
  Flex: "#818cf8",
  Streamer: "#f97316",
  Bench: "#6b7280",
};

const POSITIONS = ["QB", "RB", "WR", "TE", "K", "DST"];

export default function RankingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-extrabold">Weekly Rankings</h1>
          <span className="bg-[#111827] border border-[#1f2937] text-gray-400 text-sm px-3 py-1 rounded-full">
            Week 14
          </span>
        </div>
        <p className="text-gray-400">Updated Tuesday — expert consensus rankings with matchup grades</p>
      </div>

      {/* Position selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {POSITIONS.map((pos) => (
          <button
            key={pos}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
              pos === "QB"
                ? "bg-[#ef4444] text-white"
                : "bg-[#111827] text-gray-400 hover:text-white border border-[#1f2937]"
            }`}
          >
            {pos}
          </button>
        ))}
      </div>

      {/* Premium note */}
      <div className="flex items-center justify-between mb-4 bg-[#111827] border border-[#ffd700]/30 rounded-lg px-4 py-3">
        <p className="text-sm text-gray-400">
          Showing <span className="text-white font-semibold">Top 8 QB rankings</span> — full rankings (50+) available for{" "}
          <span className="text-[#ffd700]">Pro members</span>
        </p>
        <Link
          href="/premium"
          className="text-xs bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black font-bold px-3 py-1.5 rounded-lg whitespace-nowrap"
        >
          Unlock All
        </Link>
      </div>

      {/* Rankings table */}
      <div className="bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[#0d1321] text-xs text-gray-500 uppercase tracking-wider font-semibold">
          <div className="col-span-1">Rank</div>
          <div className="col-span-4">Player</div>
          <div className="col-span-2">Matchup</div>
          <div className="col-span-2">Tier</div>
          <div className="col-span-2 text-right">Proj. Pts</div>
          <div className="col-span-1 text-right">Trend</div>
        </div>
        <div className="divide-y divide-[#1f2937]">
          {qbRankings.map((player) => (
            <Link
              key={player.rank}
              href="#"
              className="grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-[#1a2436] transition-colors group"
            >
              <div className="col-span-1 text-lg font-bold text-gray-500">
                {player.rank}
              </div>
              <div className="col-span-4 flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: `${player.posColor}20`, color: player.posColor }}
                >
                  {player.position}
                </div>
                <div>
                  <p className="text-sm font-semibold group-hover:text-[#00c853] transition-colors">
                    {player.name}
                  </p>
                  <p className="text-xs text-gray-600">{player.team}</p>
                </div>
              </div>
              <div className="col-span-2 text-sm text-gray-400">{player.opponent}</div>
              <div className="col-span-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ background: `${TIER_COLORS[player.tier]}20`, color: TIER_COLORS[player.tier] }}
                >
                  {player.tier}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-sm font-bold text-white">{player.projPoints}</span>
              </div>
              <div className="col-span-1 text-right text-lg">
                {player.trend === "up" ? (
                  <span className="text-[#00c853]">↑</span>
                ) : player.trend === "down" ? (
                  <span className="text-[#ef4444]">↓</span>
                ) : (
                  <span className="text-gray-600">→</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
