import Image from "next/image";

export default function SocialIconPart() {
  return (
    <div data-animate className="flex justify-center gap-3 pb-88">
      <div className="flex min-h-12 min-w-12 items-center justify-center rounded-md border">
        <div className="h-8">
          <Image
            src="/icons/instagram-icon.png"
            alt="Instagram Icon"
            width={42}
            height={42}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="flex min-h-12 min-w-12 items-center justify-center rounded-md border">
        <div className="h-8">
          <Image
            src="/icons/facebook-icon.png"
            alt="Facebook Icon"
            width={25}
            height={40}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="flex min-h-12 min-w-12 items-center justify-center rounded-md border">
        <div className="h-8">
          <Image
            src="/icons/tiktok-icon.png"
            alt="Tiktok Icon"
            width={44}
            height={39}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
