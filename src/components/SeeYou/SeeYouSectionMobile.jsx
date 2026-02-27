import Button from "../Button";

import IconPartMobile from "./Parts/IconPartMobile";
import InformationPartMobile from "./Parts/InformationPartMobile";

import LockIcon from "@/src/icons/LockIcon";

export default function SeeYouSectionMobile() {
  return (
    <section data-animate className="py-20">
      <div className="fading-border mx-auto max-w-84 py-15">
        <div className="mx-auto flex max-w-68 flex-col items-center gap-6">
          <IconPartMobile />
          <h2 className="text-center text-2xl font-medium">
            SEE YOU AT SATURDAY NIGHT
          </h2>
          <InformationPartMobile />
          <Button
            icon={<LockIcon className="h-10 w-10 p-2 text-white" />}
            text="LOCK MY SPOT"
            href="#registration-form-mobile"
          />
        </div>
      </div>
    </section>
  );
}
