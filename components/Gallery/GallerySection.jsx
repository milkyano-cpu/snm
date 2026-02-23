import TextPart from "./Parts/TextPart";
import FooterCardPart from "./Parts/FooterCardPart";
import SocialIconPart from "./Parts/SocialIconPart";
import GalleryPart from "./Parts/GalleryPart";

export function GallerySection() {
    return (
        <section className="container pt-102">
            <GalleryPart />
            <TextPart />
            <FooterCardPart />
            <SocialIconPart />
        </section>
    );
}
