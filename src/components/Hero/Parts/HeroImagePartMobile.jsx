import Image from "next/image";

export default function HeroImagePartMobile() {
  return (
    <div className="animate-fade-in-up animation-delay-400 relative left-1/2 w-[130vw] -translate-x-1/2">
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
