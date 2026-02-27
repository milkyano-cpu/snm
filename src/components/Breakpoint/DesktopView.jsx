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
    <div className="hidden overflow-clip sm:block">
      <HeroSection />
      <FeatureSection />
      <section className="bg-entire">
        <RulesSection />
        <LimitedDisplaySection />
        <VIPApplySection />
        <YourCarSection />
        <div id="registration-form">
          <RegistrationFormV3 />
        </div>
        <GallerySection />
      </section>
    </div>
  );
}
