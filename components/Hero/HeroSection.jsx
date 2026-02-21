import ImagePart from "./Parts/ImagePart";
import TextPart from "./Parts/TextPart";

export default function HeroSection() {
    return (
        <section className="flex min-h-screen items-center pt-12 bg-lorbek relative">
            {/* <Bglorbrek topClass="top-0" zIndexClass="z-10" opacityClass={'opacity-90'}/> */}
            {/* <Cloud topClass="-top-30" leftClass=" left-20" /> */}
            <div className="container flex items-center justify-between">
                <TextPart />
            </div>
            <ImagePart />
        </section>
    );
}
