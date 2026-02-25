import Image from "next/image";

export default function IconPartMobile() {
  return (
    <div className="flex h-8 justify-center gap-4">
      <div>
        <Image
          src="https://s3.milkyano.com/snm-marketing-email/logo/snm-logo-black-bg-1.png"
          alt="SNM Logo"
          width={1045}
          height={339}
          className="h-full w-full object-contain"
          loading="eager"
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
      <div>
        <Image
          src="https://s3.milkyano.com/snm-marketing-email/logo/hooligoon.png"
          alt="Hooligoon Logo"
          width={575}
          height={249}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
