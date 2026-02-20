import Image from "next/image";

export default function FeatureSection() {
    return (
        <div className="py-100 container">
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
