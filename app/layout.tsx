import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GridironEdge | Fantasy Football & NFL Analysis",
  description:
    "Your ultimate destination for fantasy football advice, NFL analysis, weekly player rankings, keeper recommendations, and pro football news.",
  keywords: [
    "fantasy football",
    "NFL",
    "player rankings",
    "football analysis",
    "weekly picks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0f1e] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
