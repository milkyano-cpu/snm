import LimitedDisplaySection from "@/components/LimitedDisplay/LimitedDisplaySection";
import FeatureSection from "../components/Feature/FeatureSection";
import { FooterSection } from "../components/FooterSection";
import { GallerySection } from "../components/GallerySection";
import HeroSection from "../components/Hero/HeroSection";
import { PhotoProcessSection } from "../components/PhotoProcessSection";
import { RegistrationForm } from "../components/RegistrationForm";
import RulesSection from "../components/Rules/RulesSection";
import { ScaleWrapper } from "../components/ScaleWrapper";
import { VIPApplySection } from "../components/VIPApplySection";
import { YourCarSection } from "../components/YourCarSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <RulesSection />
            <LimitedDisplaySection />
            <VIPApplySection />
            <YourCarSection />
            <PhotoProcessSection />
            <RegistrationForm />
            <GallerySection />
            <ScaleWrapper>
                <FooterSection />
            </ScaleWrapper>
        </>
    );
}
