import Link from "next/link";

const tutorials = [
  {
    level: "Beginner",
    levelColor: "#00c853",
    emoji: "🎓",
    title: "Fantasy Football 101: A Complete Beginner's Guide",
    description: "New to fantasy football? Learn the basics: scoring systems, roster spots, waivers, trades, and how to win your first championship.",
    modules: 8,
    duration: "45 min",
  },
  {
    level: "Intermediate",
    levelColor: "#ffd700",
    emoji: "🧠",
    title: "Draft Strategy Deep Dive: Rounds 1–5 Blueprint",
    description: "Master the critical early rounds of your fantasy draft with a positional scarcity framework that gives you a structural advantage.",
    modules: 6,
    duration: "35 min",
  },
  {
    level: "Intermediate",
    levelColor: "#ffd700",
    emoji: "📊",
    title: "Reading the Injury Report: What NFL Designations Really Mean",
    description: "Limited, Full, DNP — understand what practice participation really signals and how to factor it into your lineup decisions.",
    modules: 4,
    duration: "20 min",
  },
  {
    level: "Advanced",
    levelColor: "#818cf8",
    emoji: "⚡",
    title: "DFS Strategy: GPP vs. Cash Game Lineup Building",
    description: "Daily fantasy tournaments require a different approach than cash games. Learn how to construct stacks, fades, and value plays.",
    modules: 10,
    duration: "60 min",
  },
  {
    level: "Beginner",
    levelColor: "#00c853",
    emoji: "🔄",
    title: "How to Win the Trade Market Every Time",
    description: "Trade value, buy low/sell high timing, and negotiation tactics that give you an edge when dealing with other managers.",
    modules: 5,
    duration: "30 min",
  },
  {
    level: "Advanced",
    levelColor: "#818cf8",
    emoji: "🏆",
    title: "Dynasty League Mastery: From Startup to Title",
    description: "Comprehensive dynasty strategy covering startup draft picks, rookie valuation, aging curves, and multi-year roster building.",
    modules: 12,
    duration: "90 min",
  },
];

export default function TutorialsSection() {
  return (
    <section className="bg-[#0d1321] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold">Tutorials &amp; Guides</h2>
            <p className="text-sm text-gray-500 mt-1">Learn from beginner basics to advanced strategy</p>
          </div>
          <Link href="/tutorials" className="text-sm text-[#00c853] hover:underline font-medium">
            All Tutorials →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tutorials.map((tut, i) => (
            <Link key={i} href="#" className="group block">
              <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5 card-hover h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold uppercase px-2 py-0.5 rounded-full"
                    style={{ background: `${tut.levelColor}20`, color: tut.levelColor }}
                  >
                    {tut.level}
                  </span>
                  <span className="text-2xl">{tut.emoji}</span>
                </div>
                <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-[#00c853] transition-colors">
                  {tut.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{tut.description}</p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#1f2937]">
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    📖 {tut.modules} modules
                  </span>
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    ⏱️ {tut.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
