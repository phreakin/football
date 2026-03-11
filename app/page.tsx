import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import NewsSection from "@/components/NewsSection";
import TutorialsSection from "@/components/TutorialsSection";
import PremiumSection from "@/components/PremiumSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedArticles />
      <NewsSection />
      <TutorialsSection />
      <PremiumSection />
    </>
  );
}
