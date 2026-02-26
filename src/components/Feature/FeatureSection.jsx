import Image from "next/image";

export default function FeatureSection() {
  return (
    <div data-animate className="container py-100">
      <Image
        src="/feature-section.png"
        alt="feature section"
        width={5716}
        height={1492}
        className="h-full w-full"
      />
    </div>
  );
}
