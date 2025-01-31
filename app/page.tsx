import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import FavoritesSection from "@/components/FavoritesSection";
import DivideSection from "@/components/DivideSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import RecommendationSection from "@/components/RecommendationSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <RecommendationSection />
      <FavoritesSection />
      <MenuSection />
      <CateringSection />
    </>
  );
}
