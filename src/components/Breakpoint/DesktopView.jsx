import FeatureSection from "../Feature/FeatureSection";
import { GallerySection } from "../Gallery/GallerySection";
import HeroSection from "../Hero/HeroSection";
import LimitedDisplaySection from "../LimitedDisplay/LimitedDisplaySection";
import { RegistrationFormV3 } from "../RegistrationForm/RegistrationFormV3";
import RulesSection from "../Rules/RulesSection";
import { VIPApplySection } from "../VIPApplySection";
import { YourCarSection } from "../YourCarSection";

export default function DesktopView() {
  return (
    <div className="hidden sm:block">
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
    </div>
  );
}
