import DetailedDisplayItem from "./DetailedDisplayItem";

const contents = [
  {
    image: {
      src: "https://s3.milkyano.com/snm-marketing-email/icons/supercar-emoji.png",
      alt: "Supercar Icon",
      width: 140,
      height: 83,
    },
    text: {
      highlight: "Supercars & exotic performance vehicles",
      description: "(Lamborghini, Ferrari, McLaren, Porche GT models, etc.)",
    },
  },
  {
    image: {
      src: "https://s3.milkyano.com/snm-marketing-email/icons/japan-flag-emoji.png",
      alt: "Japan Flag",
      width: 98,
      height: 81,
    },
    text: {
      highlight: "Iconic or well-presented JDM builds",
      description:
        "(Classic or tastefully modified, high-quality presentation)",
    },
  },
  {
    image: {
      src: "https://s3.milkyano.com/snm-marketing-email/icons/tinker-emoji.png",
      alt: "Tinker Emoji",
      width: 114,
      height: 114,
    },
    text: {
      highlight: "Unique builds",
      description: "or rare vehicles with strong visual presence.",
    },
  },
  {
    image: {
      src: "https://s3.milkyano.com/snm-marketing-email/icons/stars-emoji.png",
      alt: "Stars Emoji",
      width: 110,
      height: 110,
    },
    text: {
      highlight: "Clean, respectful, presentation",
      description: "aligned with the event atmosphere.",
    },
  },
];

export default function DetailedDisplayPart() {
  return (
    <section className="container">
      <div className="rounded-4xl border py-12">
        <ul className="mx-auto w-124 flex flex-col gap-5">
          {contents.map(({ image, text }, i) => (
            <DetailedDisplayItem key={i} image={image} text={text} />
          ))}
        </ul>
      </div>
    </section>
  );
}
