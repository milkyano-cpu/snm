import { GlassCard } from "../GlassCard";
import FeaturesPart from "./Parts/FeaturesPart";

export default function FeatureSection() {
  return (
    <section className="container">
      <GlassCard className="flex justify-center items-start gap-[57px] py-20 px-12">
        <FeaturesPart />
      </GlassCard>
    </section>
  );
}
