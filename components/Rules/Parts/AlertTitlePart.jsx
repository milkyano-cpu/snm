import Image from "next/image";

export default function AlertTitlePart() {
  return (
    <div className="absolute top-0 left-[50%] flex -translate-[50%] items-center gap-3 rounded-full bg-gray-500 px-18 py-6">
      <div className="h-8 w-8">
        <Image
          src="https://s3.milkyano.com/snm-marketing-email/icons/danger-icon.png"
          alt="Danger Icon"
          width={106}
          height={96}
          className="h-full w-full"
        />
      </div>
      <h2 className="text-3xl font-semibold">COMMUNITY RULES</h2>
    </div>
  );
}
