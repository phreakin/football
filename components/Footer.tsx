import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1321] border-t border-[#1f2937] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00c853] text-2xl">🏈</span>
              <span className="text-xl font-extrabold">
                Gridiron<span className="text-[#00c853]">Edge</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Your premier destination for fantasy football strategy, NFL analysis, and pro football insights.
            </p>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Content</h4>
            <ul className="space-y-2">
              {["NFL News", "Fantasy Advice", "Analysis", "Tutorials", "Player Rankings"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-[#00c853] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Premium</h4>
            <ul className="space-y-2">
              {["Weekly Picks", "Players to Watch", "Keeper Recommendations", "Waiver Wire", "Start/Sit"].map((item) => (
                <li key={item}>
                  <Link href="/premium" className="text-sm text-gray-500 hover:text-[#ffd700] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Privacy Policy", "Terms of Service", "Advertise"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} GridironEdge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "Facebook", "Instagram", "YouTube"].map((social) => (
              <Link key={social} href="#" className="text-sm text-gray-600 hover:text-white transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
