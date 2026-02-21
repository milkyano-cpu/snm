import Image from "next/image";

export function GallerySection() {
    return (
        <section className="container pt-102">
            <div className="rounded-[44px] overflow-hidden">
                <Image
                    src="/gallery/gallery-image.png"
                    alt="Gallery Image"
                    width={1411}
                    height={1129}
                    className="w-full h-full"
                />
            </div>

            <div className="text-4xl flex gap-12 justify-center py-48">
                <h3>
                    Good <span className="font-bold">People</span>
                </h3>
                <h3>
                    Good <span className="font-bold">Machine</span>
                </h3>
                <h3>
                    Good <span className="font-bold">Energy</span>
                </h3>
            </div>

            <div className="py-48">
                <div>
                    <Image
                        src="/footer-card.png"
                        alt="Footer Card"
                        width={1435}
                        height={869}
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="flex justify-center gap-3">
                    <div className="border min-w-14.25 min-h-14.25 flex justify-center items-center">
                        <div className="h-10.5">
                            <Image
                                src="/icons/instagram-icon.png"
                                alt="Instagram Icon"
                                width={42}
                                height={42}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="border min-w-14.25 min-h-14.25 flex justify-center items-center">
                        <div className="h-10.5">
                            <Image
                                src="/icons/facebook-icon.png"
                                alt="Facebook Icon"
                                width={25}
                                height={40}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="border min-w-14.25 min-h-14.25 flex justify-center items-center">
                        <div className="h-10.5">
                            <Image
                                src="/icons/tiktok-icon.png"
                                alt="Tiktok Icon"
                                width={44}
                                height={39}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
        </section>
    );
}
