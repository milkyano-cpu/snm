import Image from "next/image";

export default function GalleryMobileSection() {
  return (
    <section className="bg-gallery-mobile py-20">
      <div className="mx-auto max-w-84">
        <Image
          src="/gallery/gallery-section-mobile.png"
          alt="Gallery Photos"
          width={334}
          height={435}
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
