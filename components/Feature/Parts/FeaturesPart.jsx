import { Fragment } from "react";
import CameraIcon from "../../../icons/CameraIcon";
import FoodTruckIcon from "../../../icons/FoodTruckIcon";
import MotorCycleIcon from "../../../icons/MotorcycleIcon";
import PremiumCarIcon from "../../../icons/PremiumCarIcon";
import { ASSETS } from "../../assets";
import PerFeature from "./PerFeature";

const features = [
  {
    icon: <PremiumCarIcon className="h-15 w-15" />,
    text: "PREMIUM CARS + CUSTOM BUILDS",
  },
  {
    icon: <MotorCycleIcon className="h-15 w-15" />,
    text: "BIKES & CRUISER CULTURE",
  },
  {
    icon: <CameraIcon className="h-16 w-10" />,
    text: "PROFESSIONAL VIDEO & PHOTOGRAPHY",
  },
  {
    icon: <FoodTruckIcon className="h-16 w-10" />,
    text: "FOOD TRUCKS & POP UP STORE",
  },
];

function Divider() {
  return (
    <div className="relative flex h-[149px] w-0 shrink-0 items-center justify-center">
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[149px]">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <img
              alt=""
              className="block size-full max-w-none"
              src={ASSETS.dividerLine}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPart() {
  return features.map((feature, i) => (
    <Fragment key={i}>
      <PerFeature icon={feature.icon} text={feature.text} />
      {i < features.length - 1 && <Divider />}
    </Fragment>
  ));
}
