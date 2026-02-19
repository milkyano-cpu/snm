import Image from "next/image";
import { GlassCard } from "../GlassCard";
import FeaturesPart from "./Parts/FeaturesPart";

export default function FeatureSection() {
    return (
        <div className="container">
            <Image
                src="/feature-section.png"
                alt="feature section"
                width={5716}
                height={1492}
                className="h-full w-full"
            />
        </div>
    );
    // return (
    //   <section className="container">
    //     <GlassCard className="flex justify-center items-center gap-8 py-8 px-8">
    //       <FeaturesPart />
    //     </GlassCard>
    //   </section>
    // );
}
