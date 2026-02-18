import HeroSection from "../components/Hero/HeroSection";
import { FeaturesBar } from "../components/FeaturesBar";
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

export default function Home() {
    return (
        <>
            <ScaleWrapper>
            <HeroSection />
                <FeaturesBar />
                <AtmosphereSection />
                <CommunityRulesSection />
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
