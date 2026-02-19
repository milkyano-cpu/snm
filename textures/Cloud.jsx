import Image from "next/image";

export default function Cloud({
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
        src="https://s3.milkyano.com/snm-marketing-email/textures/cloud.svg"
        alt="Cloud"
        width={905}
        height={659}
        className="w-full"
        loading="eager"
      />
    </div>
  );
}
