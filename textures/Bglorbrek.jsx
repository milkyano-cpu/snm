import Image from "next/image";

export default function Bglorbrek({
  topClass,
  rightClass,
  bottomClass,
  leftClass,
}) {
  return (
    <div
      className={`absolute h-full w-full ${topClass ? topClass : ""} ${rightClass ? rightClass : ""} ${bottomClass ? bottomClass : ""} ${leftClass ? leftClass : ""}`}
    >
      <Image
        src="/lorbek-dealer.png"
        alt="backgroundlorbrek"
        width={1920}
        height={1400}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}
