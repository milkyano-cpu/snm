import CameraIcon from "@/src/icons/CameraIcon";
import FoodTruckIcon from "@/src/icons/FoodTruckIcon";
import MotorCycleIcon from "@/src/icons/MotorcycleIcon";
import PremiumCarIcon from "@/src/icons/PremiumCarIcon";

export default function FeatureSectionMobile() {
  return (
    <section className="bg-feature-section-mobile py-20">
      <div className="fading-border mx-auto flex max-w-84 justify-center">
        <div className="features-mobile flex max-w-44 flex-col items-center gap-6 py-8">
          <div className="flex flex-col items-center gap-3.5">
            <div>
              <PremiumCarIcon className="h-9 w-12.5" />
            </div>
            <p className="text-center font-medium">
              PREMIUM CARS + CUSTOM BUILDS
            </p>
          </div>

          <div className="flex flex-col items-center gap-3.5">
            <div>
              <MotorCycleIcon className="h-8.5 w-12" />
            </div>
            <p className="text-center font-medium">BIKES & CRUISER CULTURE</p>
          </div>

          <div className="flex flex-col items-center gap-3.5">
            <div>
              <CameraIcon className="h-5 w-5" />
            </div>
            <p className="text-center font-medium">
              PROFESSIONAL VIDEO & PHOTOGRAPHY
            </p>
          </div>

          <div className="flex flex-col items-center gap-3.5">
            <div>
              <FoodTruckIcon className="h-5 w-5" />
            </div>
            <p className="text-center font-medium">
              FOOD TRUCKS & POP UP STORE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
