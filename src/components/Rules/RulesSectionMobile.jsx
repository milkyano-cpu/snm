import Image from "next/image";

export default function RulesSectionMobile() {
  return (
    <section className="py-20">
      <h2 className="mx-auto max-w-70 pb-20 text-center text-2xl font-medium">
        Come For The Cars Stay For The Atmosphere!
      </h2>

      <div className="fading-border relative mx-auto max-w-84 pt-18 pb-10">
        <div className="absolute top-0 left-1/2 z-10 flex min-w-73 -translate-1/2 items-center gap-3 rounded-4xl bg-[#1a1a1a] px-8.5 py-4">
          <div className="h-5 w-5">
            <Image
              src="https://s3.milkyano.com/snm-marketing-email/icons/danger-icon.png"
              alt="Danger Icon"
              width={106}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="text-xl font-medium">Community Rules</h2>
        </div>
        <h3 className="mb-8.5 text-center text-2xl font-bold">
          RESPECT THE SPACE
        </h3>
        <ul className="text-center">
          <li>• No burnouts</li>
          <li>• No excessive revving</li>
          <li>• No hooning or unwanted attention</li>
        </ul>
      </div>
    </section>
  );
}
