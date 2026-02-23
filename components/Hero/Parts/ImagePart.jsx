import Image from "next/image";

export default function ImagePart() {
  return (
    <div className="animate-fade-in-right">
      <Image
        src="/supercar-bike-hero.png"
        alt="Supercar and Motorcycle"
        width={2004}
        height={2004}
        className="animate-float h-80 w-full object-cover object-bottom"
        loading="eager"
      />
    </div>
  );
}
