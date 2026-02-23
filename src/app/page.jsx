import FeatureSection from "@/src/components/Feature/FeatureSection";
import { GallerySection } from "@/src/components/Gallery/GallerySection";
import HeroSection from "@/src/components/Hero/HeroSection";
import LimitedDisplaySection from "@/src/components/LimitedDisplay/LimitedDisplaySection";
import { RegistrationFormV3 } from "@/src/components/RegistrationForm/RegistrationFormV3";
import RulesSection from "@/src/components/Rules/RulesSection";
import { VIPApplySection } from "@/src/components/VIPApplySection";
import { YourCarSection } from "@/src/components/YourCarSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-entire">
        <FeatureSection />
        <RulesSection />
        <LimitedDisplaySection />
        <VIPApplySection />
        <YourCarSection />
        <RegistrationFormV3 />
        <GallerySection />
      </section>
    </>
  );
}
