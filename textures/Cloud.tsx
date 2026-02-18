import Image from "next/image";

interface CloudProps {
  topClass?: string;
  rightClass?: string;
  bottomClass?: string;
  leftClass?: string;
}

export default function Cloud({
  topClass,
  rightClass,
  bottomClass,
  leftClass,
}: CloudProps) {
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
