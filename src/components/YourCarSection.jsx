import Image from "next/image";

export function YourCarSection() {
  return (
    <section data-animate className="container flex flex-col gap-24 py-48">
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
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
