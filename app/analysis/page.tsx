import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NFL Analysis | GridironEdge",
  description: "Advanced NFL analytics, film study, and statistical analysis.",
};

const analyses = [
  {
    emoji: "📊",
    title: "Air Yards Leaders: Who's Being Schemed Open vs. Fighting for It",
    excerpt: "Separating scheme-generated separation from pure route running by analyzing air yard distribution and where targets are coming from.",
    author: "David Chen",
    date: "Dec 10, 2025",
    readTime: "12 min",
  },
  {
    emoji: "⚡",
    title: "Pressure Rate vs. Fantasy Points: The QB Stability Metric You Need",
    excerpt: "QBs who remain fantasy-stable under pressure vs. those who collapse. This one metric predicts weekly variance better than any other.",
    author: "Alex Rivera",
    date: "Dec 9, 2025",
    readTime: "9 min",
  },
  {
    emoji: "🏃",
    title: "RB Usage Patterns: Every Team's Touch Distribution in 2025",
    excerpt: "Which backfields are true committees, which have a clear workhorse, and how game script affects each team's RB touch allocation.",
    author: "Sarah Mitchell",
    date: "Dec 8, 2025",
    readTime: "15 min",
  },
  {
    emoji: "🎯",
    title: "Route Running Grades: Top 15 WRs by Separation Created",
    excerpt: "Using tracking data to identify which receivers are consistently winning their routes and which teams are scheming them open.",
    author: "Marcus Johnson",
    date: "Dec 7, 2025",
    readTime: "10 min",
  },
  {
    emoji: "🛡️",
    title: "Defensive Coverage Shells: Understanding How Each Team Defends",
    excerpt: "A breakdown of every NFL team's base coverage — man vs. zone tendencies, slot coverage rates, and how opposing offenses attack.",
    author: "Jennifer Torres",
    date: "Dec 6, 2025",
    readTime: "14 min",
  },
  {
    emoji: "📈",
    title: "Expected Points Added: Which Players Are Generating Real Value?",
    excerpt: "EPA per play reveals which players are truly helping their teams win, separated from box score noise and garbage time stats.",
    author: "Kyle Robertson",
    date: "Dec 5, 2025",
    readTime: "11 min",
  },
];

export default function AnalysisPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2">NFL Analysis</h1>
        <p className="text-gray-400">Advanced metrics, film study, and data-driven insights</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {analyses.map((item, i) => (
          <Link key={i} href="#" className="group block">
            <div className="bg-[#111827] rounded-xl border border-[#1f2937] p-5 card-hover h-full flex flex-col">
              <span className="text-4xl mb-3">{item.emoji}</span>
              <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-[#00c853] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 flex-1">{item.excerpt}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#1f2937] text-xs text-gray-600">
                <span>{item.author}</span>
                <span>{item.readTime} read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
