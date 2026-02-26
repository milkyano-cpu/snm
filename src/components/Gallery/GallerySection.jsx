import FooterCardPart from "./Parts/FooterCardPart";
import GalleryPart from "./Parts/GalleryPart";
import SocialIconPart from "./Parts/SocialIconPart";
import TextPart from "./Parts/TextPart";

export function GallerySection() {
  return (
    <section className="container">
      <GalleryPart />
      <TextPart />
      <FooterCardPart />
      <SocialIconPart />
    </section>
  );
}
