import ImagePart from "./Parts/ImagePart";
import TextPart from "./Parts/TextPart";

export default function HeroSection() {
    return (
        <section className="flex min-h-screen items-center pt-12 bg-lorbek">
            <div className="container flex items-center relative">
                <TextPart />
                <ImagePart />
            </div>
        </section>
    );
}
