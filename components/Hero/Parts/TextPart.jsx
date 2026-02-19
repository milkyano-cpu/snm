import InformationPart from "./InformationPart";
import LogoPart from "./LogoPart";

export default function TextPart() {
  return (
    <div className="flex flex-col gap-8 z-10">
      <LogoPart />
      <InformationPart />
    </div>
  );
}
