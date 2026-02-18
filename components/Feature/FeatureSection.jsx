import { GlassCard } from "../GlassCard";
import FeaturesPart from "./Parts/FeaturesPart";

export default function FeatureSection() {
  return (
    <section className="container">
      <GlassCard className="flex justify-center items-center gap-8 py-8 px-8">
        <FeaturesPart />
      </GlassCard>
    </section>
  );
}
