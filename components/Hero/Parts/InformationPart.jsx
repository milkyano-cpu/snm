import Button from "@/components/Button";
import Calendar from "@/icons/CalendarIcon";
import LocationIcon from "@/icons/LocationIcon";
import Paperclip from "@/icons/PaperclipIcon";

export default function InformationPart() {
  return (
    <div className="flex flex-col items-start justify-center gap-8 font-outfit animate-fade-in-up animation-delay-400 row-start-2">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Calendar className="h-8 w-8 shrink-0 box-content pl-1.25" />
          <p className="font-bold text-2xl tracking-tight">
            28th Febuary, 6PM &ndash; Late
          </p>
        </div>
        <div className="flex items-start gap-3">
          <LocationIcon className="h-8 w-8 shrink-0" />
          <p className="text-2xl tracking-tight">
            <span className="font-bold">Lorbek Luxury Cars,</span> 1/30 Prohasky St,
            <br />
            Port Melbourne VIC 3207
          </p>
        </div>
      </div>
      <Button
        icon={<Paperclip className="h-10 w-10 text-white" />}
        text={"REGISTER / JOIN MEET"}
        href="#registration-form"
      />
    </div>
  );
}
