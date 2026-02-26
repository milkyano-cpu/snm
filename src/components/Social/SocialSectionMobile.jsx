import Image from "next/image";

const socials = [
  {
    src: "/icons/instagram-icon.png",
    alt: "Instagram Icon",
    width: 42,
    height: 42,
  },
  {
    src: "/icons/facebook-icon.png",
    alt: "Facebook Icon",
    width: 25,
    height: 40,
  },
  {
    src: "/icons/tiktok-icon.png",
    alt: "Tiktok Icon",
    width: 44,
    height: 39,
  },
];

export default function SocialSectionMobile() {
  return (
    <section data-animate className="flex justify-center gap-4 py-22">
      {socials.map((social, index) => (
        <div
          key={index}
          className="flex h-6 w-6 items-center justify-center border"
        >
          <div className="h-4">
            <Image
              src={social.src}
              alt={social.alt}
              width={social.width}
              height={social.height}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
