import Link from "next/link";

interface Article {
  emoji: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  premium?: boolean;
}

const articles: Article[] = [
  {
    emoji: "🏆",
    category: "Fantasy",
    categoryColor: "#00c853",
    title: "Top 10 Running Backs to Target on Waivers This Week",
    excerpt: "The waiver wire is where championships are won. Here are the RBs that should be on your radar right now.",
    author: "Sarah Mitchell",
    date: "Dec 10, 2025",
    readTime: "5 min read",
  },
  {
    emoji: "🎯",
    category: "Analysis",
    categoryColor: "#ffd700",
    title: "Advanced Metrics: Which QBs Are Undervalued in Standard Scoring",
    excerpt: "Yards per attempt, pressure rate, and other advanced stats reveal which signal callers offer hidden fantasy value.",
    author: "David Chen",
    date: "Dec 9, 2025",
    readTime: "8 min read",
  },
  {
    emoji: "📈",
    category: "Tutorials",
    categoryColor: "#818cf8",
    title: "Fantasy Football Draft Strategy: Best Ball vs. Redraft Leagues",
    excerpt: "Understanding the key differences and how to adapt your strategy to maximize wins in each format.",
    author: "Kyle Robertson",
    date: "Dec 8, 2025",
    readTime: "6 min read",
  },
  {
    emoji: "⚡",
    category: "NFL News",
    categoryColor: "#ef4444",
    title: "Trade Deadline Winners and Losers: How Moves Affect Fantasy",
    excerpt: "Every trade shakes up fantasy rosters. We break down what each deal means for your lineup decisions.",
    author: "Jennifer Torres",
    date: "Dec 7, 2025",
    readTime: "4 min read",
  },
  {
    emoji: "🔒",
    category: "Fantasy",
    categoryColor: "#00c853",
    title: "Dynasty League Primer: Building a Team That Wins for Years",
    excerpt: "Dynasty leagues require a completely different mindset. Master the age curve, prospect value, and long-term roster construction.",
    author: "Marcus Johnson",
    date: "Dec 6, 2025",
    readTime: "10 min read",
  },
  {
    emoji: "📊",
    category: "Tutorials",
    categoryColor: "#818cf8",
    title: "Understanding PFF Grades: How to Use Advanced Stats for Fantasy",
    excerpt: "Pro Football Focus grades demystified — learn how to apply coverage grades, pass rush win rate, and more to fantasy decisions.",
    author: "Alex Rivera",
    date: "Dec 5, 2025",
    readTime: "7 min read",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold">Latest Articles</h2>
          <p className="text-sm text-gray-500 mt-1">Free analysis and insights from our team of experts</p>
        </div>
        <Link href="/articles" className="text-sm text-[#00c853] hover:underline font-medium">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article, i) => (
          <Link key={i} href="#" className="group block">
            <div className="bg-[#111827] rounded-xl border border-[#1f2937] overflow-hidden card-hover h-full">
              {/* Card header */}
              <div className="h-40 bg-gradient-to-br from-[#0d1321] to-[#1a2a4a] flex items-center justify-center">
                <span className="text-5xl">{article.emoji}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-600">{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-[#00c853] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1f2937]">
                  <span className="text-xs text-gray-600">{article.author}</span>
                  <span className="text-xs text-gray-600">{article.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
