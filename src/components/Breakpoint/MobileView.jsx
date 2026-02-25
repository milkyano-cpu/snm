import FeatureSectionMobile from "../Feature/FeatureSectionMobile";
import HeroSectionMobile from "../Hero/HeroSectionMobile";
import { RegistrationFormV3 } from "../RegistrationForm/RegistrationFormV3";

export default function MobileView() {
  return (
    <div className="md:hidden">
      <HeroSectionMobile />
      <FeatureSectionMobile />
      <RegistrationFormV3 />
    </div>
  );
}
