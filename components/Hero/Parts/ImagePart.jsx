import Image from "next/image";

export default function ImagePart() {
  return (
    <div className="w-[75%] absolute -top-20 -right-20 z-10">
      <Image
        src="/supercar-and-motorcycle.png"
        alt="Supercar and Motorcycle"
        width={2004}
        height={2004}
        className="h-full w-full"
        loading="eager"
      />
    </div>
  );
}
