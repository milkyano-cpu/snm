import HeroSection from "../components/Hero/HeroSection";
import FeatureSection from "../components/Feature/FeatureSection";
import { AtmosphereSection } from "../components/AtmosphereSection";
import { CommunityRulesSection } from "../components/CommunityRulesSection";
import { VIPCriteriaSection } from "../components/VIPCriteriaSection";
import { VIPApplySection } from "../components/VIPApplySection";
import { YourCarSection } from "../components/YourCarSection";
import { PhotoProcessSection } from "../components/PhotoProcessSection";
import { RegistrationForm } from "../components/RegistrationForm";
import { GallerySection } from "../components/GallerySection";
import { FooterSection } from "../components/FooterSection";
import { ScaleWrapper } from "../components/ScaleWrapper";
import RulesSection from "../components/Rules/RulesSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <RulesSection />
            
            <ScaleWrapper>
                <VIPCriteriaSection />
                <VIPApplySection />
                <YourCarSection />
                <PhotoProcessSection />
                <RegistrationForm />
                <GallerySection />
                <FooterSection />
            </ScaleWrapper>
        </>
    );
}
