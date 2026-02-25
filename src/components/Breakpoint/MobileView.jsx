import FeatureSectionMobile from "../Feature/FeatureSectionMobile";
import HeroSectionMobile from "../Hero/HeroSectionMobile";
import { RegistrationFormV3 } from "../RegistrationForm/RegistrationFormV3";
import RulesSectionMobile from "../Rules/RulesSectionMobile";
import VipSectionMobile from "../Vip/VipSectionMobile";

export default function MobileView() {
  return (
    <div className="md:hidden">
      <HeroSectionMobile />
      <FeatureSectionMobile />
      <RulesSectionMobile />
      <VipSectionMobile />
      <RegistrationFormV3 />
    </div>
  );
}
