import LimitedDisplaySection from "@/components/LimitedDisplay/LimitedDisplaySection";
import { VIPApplySection } from "@/components/VIPApplySection";
import { YourCarSection } from "@/components/YourCarSection";
import FeatureSection from "../components/Feature/FeatureSection";
import HeroSection from "../components/Hero/HeroSection";
import RulesSection from "../components/Rules/RulesSection";

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
            </section>
            {/*
            <RegistrationForm />
            <GallerySection />
            <ScaleWrapper>
                <FooterSection />
            </ScaleWrapper> */}
        </>
    );
}
