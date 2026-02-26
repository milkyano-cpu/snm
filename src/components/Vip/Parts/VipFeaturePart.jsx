import Image from "next/image";

const features = [
  {
    image: {
      containerClass: "h-8 w-12",
      src: "https://s3.milkyano.com/snm-marketing-email/icons/supercar-emoji.png",
      alt: "Supercar Emoji",
      width: 140,
      height: 83,
    },
    description: {
      highlighted: "Supercars & exotic performance vehicles",
      content: "(Lamborghini, Ferrari, McLaren, Porche GT models, etc.)",
    },
  },
  {
    image: {
      containerClass: "h-8 w-8",
      src: "https://s3.milkyano.com/snm-marketing-email/icons/japan-flag-emoji.png",
      alt: "Japan Flag Emoji",
      width: 98,
      height: 81,
    },
    description: {
      highlighted: "Iconic or well-presented JDM builds",
      content: "(Classic or tastefully modified, high-quality presentation)",
    },
  },
  {
    image: {
      containerClass: "h-8 w-8",
      src: "https://s3.milkyano.com/snm-marketing-email/icons/tinker-emoji.png",
      alt: "Tinker Emoji",
      width: 114,
      height: 114,
    },
    description: {
      highlighted: "Unique builds",
      content: "or rare vehicles with strong visual presence",
    },
  },
  {
    image: {
      containerClass: "h-8 w-8",
      src: "https://s3.milkyano.com/snm-marketing-email/icons/stars-emoji.png",
      alt: "Stars Emoji",
      width: 110,
      height: 110,
    },
    description: {
      highlighted: "Clean, respectful, presentation",
      content: "aligned with the event atmosphereI",
    },
  },
];

export default function VipFeaturePart() {
  return (
    <div data-animate className="py-20">
      <div className="fading-border mx-auto flex max-w-84 flex-col items-center gap-16 p-7.5">
        {features.map((feature, index) => (
          <div className="flex flex-col items-center gap-4" key={index}>
            <div className={feature.image.containerClass}>
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                width={feature.image.width}
                height={feature.image.height}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-center text-lg">
              <span className="font-bold">
                {feature.description.highlighted}
              </span>{" "}
              {feature.description.content}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
