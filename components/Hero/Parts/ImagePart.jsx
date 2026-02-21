import Image from "next/image";

export default function ImagePart() {
  return (
    <div className="w-[55vw] absolute bottom-25 right-0 z-10 animate-fade-in-right">
      <Image
        src="/supercar-and-motorcycle.png"
        alt="Supercar and Motorcycle"
        width={2004}
        height={2004}
        className="h-full w-full animate-float"
        loading="eager"
      />
    </div>
  );
}
