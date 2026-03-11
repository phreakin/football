import Link from "next/link";

const newsItems = [
  {
    tag: "Injury",
    tagColor: "#ef4444",
    headline: "Justin Jefferson questionable with hamstring — monitor for Week 14",
    source: "GridironEdge Staff",
    time: "1 hour ago",
  },
  {
    tag: "Transaction",
    tagColor: "#ffd700",
    headline: "Giants activate running back off IR, forcing depth chart shakeup",
    source: "GridironEdge Staff",
    time: "2 hours ago",
  },
  {
    tag: "Game Recap",
    tagColor: "#818cf8",
    headline: "Bills demolish Patriots 38-14 as Josh Allen posts 4 TDs, 340 yards",
    source: "GridironEdge Staff",
    time: "3 hours ago",
  },
  {
    tag: "Fantasy",
    tagColor: "#00c853",
    headline: "Sleeper of the Week: This underowned receiver faces a soft matchup in Week 14",
    source: "Marcus Johnson",
    time: "5 hours ago",
  },
  {
    tag: "Roster Move",
    tagColor: "#ffd700",
    headline: "Chiefs promote backup TE to active roster ahead of divisional matchup",
    source: "GridironEdge Staff",
    time: "6 hours ago",
  },
  {
    tag: "Analysis",
    tagColor: "#818cf8",
    headline: "Target share trends: Which WRs are seeing the most usage since Week 10?",
    source: "Sarah Mitchell",
    time: "8 hours ago",
  },
  {
    tag: "Injury",
    tagColor: "#ef4444",
    headline: "Tyreek Hill cleared to play Sunday after missing practice Wednesday",
    source: "GridironEdge Staff",
    time: "10 hours ago",
  },
  {
    tag: "Fantasy",
    tagColor: "#00c853",
    headline: "Top streaming DSTs for Week 14 — stack the defense, lock in upside",
    source: "David Chen",
    time: "12 hours ago",
  },
];

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Feed */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-extrabold">NFL &amp; Fantasy News</h2>
            <Link href="/nfl-news" className="text-sm text-[#00c853] hover:underline font-medium">
              All News →
            </Link>
          </div>
          <div className="space-y-0 bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden divide-y divide-[#1f2937]">
            {newsItems.map((item, i) => (
              <Link key={i} href="#" className="block p-4 hover:bg-[#1a2436] transition-colors group">
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold uppercase px-2 py-0.5 rounded shrink-0 mt-0.5"
                    style={{ background: `${item.tagColor}20`, color: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug group-hover:text-[#00c853] transition-colors">
                      {item.headline}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">{item.source}</span>
                      <span className="text-gray-700 text-xs">·</span>
                      <span className="text-xs text-gray-600">{item.time}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar: Categories & Tools */}
        <div className="space-y-6">
          {/* Browse Categories */}
          <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5">
            <h3 className="font-bold mb-4">Browse Categories</h3>
            <div className="space-y-2">
              {[
                { name: "Fantasy Football", count: 142, color: "#00c853", emoji: "🏆" },
                { name: "NFL Analysis", count: 89, color: "#ffd700", emoji: "📊" },
                { name: "Tutorials & Guides", count: 47, color: "#818cf8", emoji: "📚" },
                { name: "Injury Reports", count: 63, color: "#ef4444", emoji: "🩺" },
                { name: "Rankings", count: 28, color: "#06b6d4", emoji: "📈" },
                { name: "Trade Analysis", count: 35, color: "#f97316", emoji: "🔄" },
              ].map((cat) => (
                <Link
                  key={cat.name}
                  href="#"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#1a2436] transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{cat.emoji}</span>
                    <span
                      className="text-sm font-medium group-hover:text-white transition-colors"
                      style={{ color: cat.color }}
                    >
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 bg-[#0a0f1e] px-2 py-0.5 rounded-full">{cat.count}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Tools */}
          <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5">
            <h3 className="font-bold mb-4">Fantasy Tools</h3>
            <div className="space-y-2">
              {[
                { name: "Start/Sit Analyzer", emoji: "🤔", premium: false },
                { name: "Trade Value Chart", emoji: "🔄", premium: false },
                { name: "Waiver Wire Planner", emoji: "📋", premium: false },
                { name: "Weekly Rankings", emoji: "📈", premium: true },
                { name: "Playoff Simulator", emoji: "🏆", premium: true },
              ].map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.premium ? "/premium" : "#"}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#1a2436] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{tool.emoji}</span>
                    <span className="text-sm">{tool.name}</span>
                  </div>
                  {tool.premium && (
                    <span className="text-xs bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black font-bold px-2 py-0.5 rounded-full">
                      PRO
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
