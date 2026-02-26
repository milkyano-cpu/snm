import Image from "next/image";

const socials = [
  {
    src: "/icons/instagram-icon.png",
    alt: "Instagram Icon",
    width: 42,
    height: 42,
    href: "https://www.instagram.com/snm.melbourne/?hl=en",
  },
  {
    src: "/icons/facebook-icon.png",
    alt: "Facebook Icon",
    width: 25,
    height: 40,
    href: "https://www.facebook.com/p/Sunday-Night-Meet-61572629826095/",
  },
  {
    src: "/icons/tiktok-icon.png",
    alt: "Tiktok Icon",
    width: 44,
    height: 39,
    href: null,
  },
];

export default function SocialSectionMobile() {
  return (
    <section data-animate className="flex justify-center gap-4 py-22">
      {socials.map((social, index) => {
        const Wrapper = social.href ? "a" : "div";
        const wrapperProps = social.href
          ? { href: social.href, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <Wrapper
            key={index}
            {...wrapperProps}
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
          </Wrapper>
        );
      })}
    </section>
  );
}
