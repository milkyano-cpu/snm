import LimitedDisplaySection from "@/components/LimitedDisplay/LimitedDisplaySection";
import { VIPApplySection } from "@/components/VIPApplySection";
import { YourCarSection } from "@/components/YourCarSection";
import FeatureSection from "@/components/Feature/FeatureSection";
import HeroSection from "@/components/Hero/HeroSection";
import RulesSection from "@/components/Rules/RulesSection";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { RegistrationFormV2 } from "@/components/RegistrationForm/RegistrationFormV2";
import { RegistrationFormV3 } from "@/components/RegistrationForm/RegistrationFormV3";

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
