import Button from "../Button";

import HeroImagePartMobile from "./Parts/HeroImagePartMobile";
import InformationPartMobile from "./Parts/InformationPartMobile";
import LogoPartMobile from "./Parts/LogoPartMobile";

import Paperclip from "@/src/icons/PaperclipIcon";

export default function HeroSectionMobile() {
  return (
    <section className="bg-lorbek-mobile">
      <LogoPartMobile />
      <InformationPartMobile />
      <HeroImagePartMobile />
      <div className="flex justify-center">
        <Button
          icon={<Paperclip className="h-10 w-10 text-white" />}
          text="REGISTER / JOIN MEET"
        />
      </div>
    </section>
  );
}
