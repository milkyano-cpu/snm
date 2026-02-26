import Image from "next/image";

export default function GalleryPart() {
  return (
    <section data-animate className="container py-102">
      <div className="overflow-hidden rounded-[44px]">
        <Image
          src="/gallery/gallery-image.png"
          alt="Gallery Image"
          width={1411}
          height={1129}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
