import { RegistrationFormV3 } from "../RegistrationForm/RegistrationFormV3";

import HeroSectionMobile from "../Hero/HeroSectionMobile";

export default function MobileView() {
  return (
    <div className="md:hidden">
      <HeroSectionMobile />
      <RegistrationFormV3 />
    </div>
  );
}
