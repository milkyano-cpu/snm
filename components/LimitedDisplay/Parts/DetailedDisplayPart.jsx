import Image from "next/image";

export default function DetailedDisplayPart() {
  return (
    <div className="container py-24">
      <Image
        src="/limited-display/detailed-display.png"
        alt="Limited Display"
        width={2858}
        height={1226}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
