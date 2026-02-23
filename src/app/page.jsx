import LimitedDisplaySection from "@/src/components/LimitedDisplay/LimitedDisplaySection";
import { VIPApplySection } from "@/src/components/VIPApplySection";
import { YourCarSection } from "@/src/components/YourCarSection";
import FeatureSection from "@/src/components/Feature/FeatureSection";
import HeroSection from "@/src/components/Hero/HeroSection";
import RulesSection from "@/src/components/Rules/RulesSection";
import { GallerySection } from "@/src/components/Gallery/GallerySection";
import { RegistrationFormV3 } from "@/src/components/RegistrationForm/RegistrationFormV3";

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
