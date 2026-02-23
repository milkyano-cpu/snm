import ImagePart from "./Parts/ImagePart";
import InformationPart from "./Parts/InformationPart";
import LogoPart from "./Parts/LogoPart";
import TextPart from "./Parts/TextPart";

export default function HeroSection() {
    return (
        <section className="flex min-h-screen items-center pt-12 bg-lorbek">
            {/* <Bglorbrek topClass="top-0" zIndexClass="z-10" opacityClass={'opacity-90'}/> */}
            {/* <Cloud topClass="-top-30" leftClass=" left-20" /> */}
            <div className="hero-container grid grid-cols-2 grid-rows-2">
                {/* <TextPart /> */}
                <LogoPart />
                <InformationPart />
                <div className="w-full row-start-2">
                    <ImagePart />
                </div>
            </div>
        </section>
    );
}
