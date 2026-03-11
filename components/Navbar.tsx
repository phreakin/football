"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/nfl-news", label: "NFL News" },
  { href: "/fantasy", label: "Fantasy" },
  { href: "/analysis", label: "Analysis" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/rankings", label: "Rankings" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0d1321] border-b border-[#1f2937] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[#00c853] text-2xl">🏈</span>
              <span className="text-xl font-extrabold tracking-tight">
                Gridiron<span className="text-[#00c853]">Edge</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1f2937] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setAuthModal("login")}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setAuthModal("register")}
                className="bg-[#00c853] hover:bg-[#00b048] text-black text-sm font-bold px-4 py-2 rounded-lg transition-colors"
              >
                Join Free
              </button>
              <Link
                href="/premium"
                className="bg-gradient-to-r from-[#ffd700] to-[#ff8c00] text-black text-sm font-bold px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
              >
                Go Premium
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0d1321] border-t border-[#1f2937] px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded text-sm text-gray-300 hover:text-white hover:bg-[#1f2937]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => { setAuthModal("login"); setMobileOpen(false); }}
                className="flex-1 text-sm font-medium text-gray-300 hover:text-white py-2 border border-[#1f2937] rounded"
              >
                Sign In
              </button>
              <button
                onClick={() => { setAuthModal("register"); setMobileOpen(false); }}
                className="flex-1 bg-[#00c853] text-black text-sm font-bold py-2 rounded"
              >
                Join Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {authModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setAuthModal(null); }}
        >
          <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {authModal === "login" ? "Welcome Back" : "Create Free Account"}
              </h2>
              <button onClick={() => setAuthModal(null)} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {authModal === "register" && (
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Username</label>
                  <input
                    type="text"
                    placeholder="YourUsername"
                    className="w-full bg-[#0a0f1e] border border-[#1f2937] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c853]"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0a0f1e] border border-[#1f2937] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c853]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#0a0f1e] border border-[#1f2937] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c853]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#00c853] hover:bg-[#00b048] text-black font-bold py-3 rounded-lg transition-colors"
              >
                {authModal === "login" ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              {authModal === "login" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button onClick={() => setAuthModal("register")} className="text-[#00c853] hover:underline">
                    Sign up free
                  </button>
                </>
              ) : (
                <>
                  Already a member?{" "}
                  <button onClick={() => setAuthModal("login")} className="text-[#00c853] hover:underline">
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
