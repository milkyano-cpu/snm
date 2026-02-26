import Image from "next/image";

export default function LogoPart() {
  return (
    <div className="relative flex flex-col items-center gap-6 mb-6">
      <div className="animate-fade-in-up">
        <div className="max-h-42">
          <Image
            src="https://s3.milkyano.com/snm-marketing-email/logo/snm-logo-black-bg-1.png"
            alt="SNM Logo"
            width={1045}
            height={339}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
      <div className="animate-fade-in-up animation-delay-200 flex max-h-40 items-center justify-center">
        <div className="h-full w-full">
          <Image
            src="https://s3.milkyano.com/snm-marketing-email/logo/hooligoon.png"
            alt="Hooligoon Logo"
            width={575}
            height={249}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="https://s3.milkyano.com/snm-marketing-email/logo/amuse.png"
            alt="Amuse Logo"
            width={330}
            height={319}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
