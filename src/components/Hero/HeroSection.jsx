import ImagePart from "./Parts/ImagePart";
import InformationPart from "./Parts/InformationPart";
import LogoPart from "./Parts/LogoPart";

export default function HeroSection() {
  return (
    <section className="bg-lorbek flex min-h-screen items-center pt-12">
      <div className="hero-container grid grid-cols-2 grid-rows-2">
        <LogoPart />
        <InformationPart />
        <div className="row-start-2 w-full">
          <ImagePart />
        </div>
      </div>
    </section>
  );
}
