import Image from "next/image";

export function YourCarSection() {
    return (
        <section className="container py-48 flex flex-col gap-24">
            <h3 className="text-center text-6xl font-bold">
                Your Car Might
                <br />
                Be Featured
            </h3>
            <div>
                <Image
                    src="/your-car/your-car-step.png"
                    alt="Your Car Step"
                    width={2858}
                    height={912}
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
}
