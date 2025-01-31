import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import FavoritesSection from "@/components/FavoritesSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import RecommendationSection from "@/components/RecommendationSection";
import Navigation from "@/components/NavigationSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <Navigation />
      <AboutSection />
      <RecommendationSection />
      <FavoritesSection />
      <MenuSection />
      <CateringSection />
    </>
  );
}
