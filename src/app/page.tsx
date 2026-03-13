import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PlatformSection from "@/components/sections/PlatformSection";
import FeatureCards from "@/components/sections/FeatureCards";
import DashboardPreview from "@/components/sections/DashboardPreview";
import ImpactSection from "@/components/sections/ImpactSection";
import CategorySection from "@/components/sections/CategorySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <FeatureCards />
        <DashboardPreview />
        <ImpactSection />
        <CategorySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
