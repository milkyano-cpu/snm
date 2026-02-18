import ImagePart from "./Parts/ImagePart";
import TextPart from "./Parts/TextPart";

export default function HeroSection() {
  return (
    <section className="bg-lorbek flex min-h-screen items-center pt-12">
      <div className="container flex">
        <TextPart />
        <ImagePart />
      </div>
    </section>
  );
}
