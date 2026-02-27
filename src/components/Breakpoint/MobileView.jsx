import FeatureSectionMobile from "../Feature/FeatureSectionMobile";
import FeaturedCarMobile from "../FeaturedCar/FeaturedCarMobile";
import GalleryMobileSection from "../Gallery/GalleryMobileSection";
import HeroSectionMobile from "../Hero/HeroSectionMobile";
import JargonSectionMobile from "../Jargon/JargonSectionMobile";
import { RegistrationFormV3 } from "../RegistrationForm/RegistrationFormV3";
import RulesSectionMobile from "../Rules/RulesSectionMobile";
import SeeYouSectionMobile from "../SeeYou/SeeYouSectionMobile";
import SocialSectionMobile from "../Social/SocialSectionMobile";
import VipSectionMobile from "../Vip/VipSectionMobile";

export default function MobileView() {
  return (
    <div className="overflow-clip sm:hidden">
      <HeroSectionMobile />
      <section className="bg-entire-mobile">
        <FeatureSectionMobile />
        <RulesSectionMobile />
        <VipSectionMobile />
        <FeaturedCarMobile />
        <div id="registration-form-mobile">
          <RegistrationFormV3 />
        </div>
        <GalleryMobileSection />
        <JargonSectionMobile />
        <SeeYouSectionMobile />
        <SocialSectionMobile />
      </section>
    </div>
  );
}
