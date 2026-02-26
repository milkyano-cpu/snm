import Image from "next/image";

export default function DetailedDisplayPart() {
  return (
    <div data-animate className="container py-24">
      <Image
        src="/limited-display/detailed-display.png"
        alt="Limited Display"
        width={2858}
        height={1226}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
