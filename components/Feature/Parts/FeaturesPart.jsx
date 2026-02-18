import CameraIcon from "../../../icons/CameraIcon";
import FoodTruckIcon from "../../../icons/FoodTruckIcon";
import MotorCycleIcon from "../../../icons/MotorcycleIcon";
import PremiumCarIcon from "../../../icons/PremiumCarIcon";
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

export default function FeaturesPart() {
  return features.map((feature, i) => (
    <PerFeature key={i} icon={feature.icon} text={feature.text} />
  ));
}
