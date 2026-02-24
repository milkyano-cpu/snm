import Image from "next/image";

export default function LogoPartMobile() {
  return (
    <div className="mx-auto flex max-w-52 flex-col items-center mb-6.5">
      <div>
        <Image
          src="https://s3.milkyano.com/snm-marketing-email/logo/snm-logo-black-bg-1.png"
          alt="SNM Logo"
          width={1045}
          height={339}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div className="flex gap-4.5">
        <div>
          <Image
            src="https://s3.milkyano.com/snm-marketing-email/logo/hooligoon.png"
            alt="Hooligoon Logo"
            width={575}
            height={249}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
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
