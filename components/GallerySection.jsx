import Image from "next/image";

export function GallerySection() {
    return (
        <section className="container py-102">
            <div className="rounded-[44px] overflow-hidden">
                <Image
                    src="/gallery/gallery-image.png"
                    alt="Gallery Image"
                    width={1411}
                    height={1129}
                    className="w-full h-full"
                />
            </div>
        </section>
    );
}
