import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c853] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffd700] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breaking News ticker */}
        <div className="flex items-center gap-3 bg-[#00c853]/10 border border-[#00c853]/30 rounded-lg px-4 py-2 mb-6 overflow-hidden">
          <span className="bg-[#00c853] text-black text-xs font-bold px-2 py-0.5 rounded uppercase shrink-0">
            Breaking
          </span>
          <div className="overflow-hidden flex-1">
            <p className="text-sm text-gray-300 truncate">
              Week 14 Fantasy Playoffs — Mahomes, Jefferson, Hill headline must-start players this weekend
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feature story */}
          <div className="lg:col-span-2">
            <Link href="#" className="block group">
              <div className="relative bg-[#111827] rounded-2xl overflow-hidden border border-[#1f2937] card-hover">
                {/* Placeholder image */}
                <div className="h-72 bg-gradient-to-br from-[#1a2a4a] to-[#0d2040] flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl">🏟️</span>
                    <p className="text-xs text-gray-600 mt-2 uppercase tracking-widest">Featured Story</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#00c853]/20 text-[#00c853] text-xs font-semibold px-2 py-0.5 rounded-full">
                      Fantasy
                    </span>
                    <span className="text-gray-500 text-xs">December 11, 2025</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3 group-hover:text-[#00c853] transition-colors">
                    The Fantasy Playoffs Are Here: Who Wins the Championship and Who Gets Eliminated
                  </h1>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    With fantasy playoffs underway, every start/sit decision carries season-ending weight. Our analysts break down the top 20 players you must start, the sleepers who could swing your week, and the busts to avoid as you make your run to the championship.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-[#00c853]/20 flex items-center justify-center text-sm">
                      ✍️
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Marcus Johnson</p>
                      <p className="text-xs text-gray-500">Senior Fantasy Analyst</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side stories */}
          <div className="flex flex-col gap-4">
            {[
              {
                emoji: "⚡",
                tag: "Analysis",
                tagColor: "#ffd700",
                title: "Patrick Mahomes Dominance Index: Why He's the #1 QB in Fantasy",
                time: "2 hours ago",
              },
              {
                emoji: "🎯",
                tag: "NFL News",
                tagColor: "#ef4444",
                title: "Injury Report Roundup: Week 14 Status Updates on 15 Key Players",
                time: "4 hours ago",
              },
              {
                emoji: "📊",
                tag: "Tutorials",
                tagColor: "#818cf8",
                title: "Waiver Wire Strategy 101: How to Build Championship Depth",
                time: "6 hours ago",
              },
            ].map((story, i) => (
              <Link key={i} href="#" className="block group">
                <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-4 card-hover flex gap-4">
                  <div className="w-14 h-14 bg-[#0a0f1e] rounded-lg flex items-center justify-center text-2xl shrink-0">
                    {story.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-semibold uppercase"
                      style={{ color: story.tagColor }}
                    >
                      {story.tag}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug mt-1 group-hover:text-[#00c853] transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">{story.time}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
