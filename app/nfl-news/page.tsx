import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NFL News | GridironEdge",
  description: "Latest NFL news, injury reports, transactions, and game recaps.",
};

const allNews = [
  { tag: "Injury", color: "#ef4444", headline: "Justin Jefferson questionable with hamstring — monitor for Week 14", time: "1h ago", author: "GridironEdge Staff" },
  { tag: "Transaction", color: "#ffd700", headline: "Giants activate RB Devin Singletary off IR, crowding backfield", time: "2h ago", author: "GridironEdge Staff" },
  { tag: "Game Recap", color: "#818cf8", headline: "Bills demolish Patriots 38-14 — Josh Allen posts 4 TDs, 340 yards in dominant showing", time: "3h ago", author: "Kyle Robertson" },
  { tag: "Fantasy", color: "#00c853", headline: "Sleeper of the Week: Josh Downs faces CB25 corner in a prime bounce-back spot", time: "5h ago", author: "Marcus Johnson" },
  { tag: "Roster Move", color: "#ffd700", headline: "Chiefs promote Jody Fortson to active roster — TE2 watch for Week 14", time: "6h ago", author: "GridironEdge Staff" },
  { tag: "Analysis", color: "#818cf8", headline: "Target share trends: Which WRs are dominating routes since Week 10?", time: "8h ago", author: "Sarah Mitchell" },
  { tag: "Injury", color: "#ef4444", headline: "Tyreek Hill cleared to play Sunday after limited practice Wednesday and Thursday", time: "10h ago", author: "GridironEdge Staff" },
  { tag: "Fantasy", color: "#00c853", headline: "Top streaming DSTs for Week 14 — three defenses with double-digit upside", time: "12h ago", author: "David Chen" },
  { tag: "Game Preview", color: "#818cf8", headline: "Chiefs-Ravens TNF Preview: Matchup grades, keys to the game, and fantasy implications", time: "14h ago", author: "Alex Rivera" },
  { tag: "Injury", color: "#ef4444", headline: "Christian McCaffrey returns to practice — full go for Week 14 if trend continues", time: "16h ago", author: "GridironEdge Staff" },
  { tag: "Transaction", color: "#ffd700", headline: "Cowboys restructure Dak Prescott deal, creating cap space for receiver push", time: "18h ago", author: "GridironEdge Staff" },
  { tag: "Analysis", color: "#818cf8", headline: "Red zone trends: Which teams and players are capitalizing inside the 20?", time: "1d ago", author: "Jennifer Torres" },
];

export default function NFLNewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2">NFL News</h1>
        <p className="text-gray-400">Breaking news, injury reports, transactions, and game coverage</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden divide-y divide-[#1f2937]">
            {allNews.map((item, i) => (
              <Link key={i} href="#" className="block p-4 hover:bg-[#1a2436] transition-colors group">
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold uppercase px-2 py-0.5 rounded shrink-0 mt-0.5"
                    style={{ background: `${item.color}20`, color: item.color }}
                  >
                    {item.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug group-hover:text-[#00c853] transition-colors">
                      {item.headline}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">{item.author}</span>
                      <span className="text-gray-700 text-xs">·</span>
                      <span className="text-xs text-gray-600">{item.time}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5 h-fit">
          <h3 className="font-bold mb-4">Filter by Category</h3>
          {["All", "Injuries", "Transactions", "Game Recaps", "Game Previews", "Fantasy Impact", "Analysis"].map((cat) => (
            <button
              key={cat}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                cat === "All"
                  ? "bg-[#00c853] text-black font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-[#1a2436]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
