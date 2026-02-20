import Cloud from "../../../textures/Cloud";
import Image from "next/image";

export default function LogoPart() {
  return (
    <div className="relative flex flex-col items-start">
      {/* <Cloud topClass="-top-30" leftClass="-left-50" mixBlendClass="mix-blend-screen" zIndexClass="z-30" /> */}
      <div>
        <Image
          src="https://s3.milkyano.com/snm-marketing-email/logo/snm-logo-black-bg-1.png"
          alt="SNM Logo"
          width={1045}
          height={339}
          className="w-100"
        />
      </div>
      <div className="flex items-center justify-start">
        <div className="w-[50%]">
          <Image
            src="https://s3.milkyano.com/snm-marketing-email/logo/hooligoon.png"
            alt="Hooligoon Logo"
            width={575}
            height={249}
            className="w-100"
          />
        </div>
        <div className="w-[25%]">
          <Image
            src="https://s3.milkyano.com/snm-marketing-email/logo/amuse.png"
            alt="Amuse Logo"
            width={330}
            height={319}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
