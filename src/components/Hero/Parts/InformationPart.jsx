import Button from "@/src/components/Button";
import Calendar from "@/src/icons/CalendarIcon";
import LocationIcon from "@/src/icons/LocationIcon";
import Paperclip from "@/src/icons/PaperclipIcon";

export default function InformationPart() {
  return (
    <div className="font-outfit animate-fade-in-up animation-delay-400 row-start-2 flex flex-col items-start justify-center gap-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Calendar className="box-content h-10 w-10 shrink-0 pl-1.25" />
          <p className="text-2xl font-bold tracking-tight">
            28th Febuary, 6PM &ndash; Late
          </p>
        </div>
        <div className="flex items-start gap-3">
          <LocationIcon className="h-10 w-10 shrink-0" />
          <p className="text-2xl tracking-tight">
            <span className="font-bold">Lorbek Luxury Cars,</span> 1/30 Prohasky
            St,
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
