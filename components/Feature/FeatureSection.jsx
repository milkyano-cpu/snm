import FeaturesPart from "./Parts/FeaturesPart";

export default function FeatureSection() {
  return (
    <section className="container">
      <div className="flex justify-center items-center border gap-8 py-8 px-8 rounded-4xl">
        <FeaturesPart />
      </div>
    </section>
  );
}
