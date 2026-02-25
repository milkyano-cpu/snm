import Button from "../Button";

import IconPartMobile from "./Parts/IconPartMobile";
import InformationPartMobile from "./Parts/InformationPartMobile";

import GalleryIcon from "@/src/icons/GalleryIcon";

export default function SeeYouSectionMobile() {
  return (
    <section className="py-20">
      <div className="fading-border mx-auto max-w-84 py-15">
        <div className="mx-auto flex max-w-68 flex-col items-center gap-6">
          <IconPartMobile />
          <h2 className="text-center text-2xl font-medium">
            SEE YOU AT SATURDAY NIGHT
          </h2>
          <InformationPartMobile />
          <Button
            icon={<GalleryIcon className="h-10 w-10 text-white" />}
            text="GET MY EVENT PHOTOS"
          />
        </div>
      </div>
    </section>
  );
}
