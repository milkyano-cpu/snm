import Image from "next/image";

export default function Bglorbrek({
  topClass,
  rightClass,
  bottomClass,
  leftClass,
  opacityClass,
  zIndexClass,
}) {
  return (
    <div
      className={`absolute h-full w-full ${zIndexClass || ""} ${topClass || ""} ${rightClass || ""} ${bottomClass || ""} ${leftClass || ""}`}
    >
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src="/lorbek-building.png"
          alt="backgroundlorbrek"
          fill
          className="object-contain"
          priority
        />

        {/* Gradient Overlay */}
        <div
          className={`pointer-events-none absolute inset-0 ${opacityClass || ""}`}
          style={{
            backgroundImage: `
                            linear-gradient(to bottom, rgba(120, 0, 0, 0.4) 0%, transparent 10%),
                            linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.55) 40%, rgba(0, 0, 0, 0.35) 100%)
                        `,
          }}
        />
      </div>
    </div>
  );
}
