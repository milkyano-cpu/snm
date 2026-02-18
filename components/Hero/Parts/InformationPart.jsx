import Button from "@/components/Button";
import CalendarIcon from "../../../app/icons/CalendarIcon";
import LocationIcon from "../../../app/icons/LocationIcon";
import PaperclipIcon from "../../../app/icons/PaperclipIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import LocationIcon from "../../../icons/LocationIcon";
import PaperclipIcon from "../../../icons/PaperclipIcon";

export default function InformationPart() {
  return (
    <div className="flex flex-col items-start gap-8">
      <div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-10 w-10" />
          <p>28th Febuary, 6PM - Late</p>
        </div>
        <div className="flex items-center gap-2">
          <LocationIcon className="h-10 w-10" />
          <div>
            <p>Lorbek Luxury Cars, 1/30 Prohasky St,</p>
            <p>Port Melbourne VIC 3207</p>
          </div>
        </div>
      </div>
      <Button 
        icon={<PaperclipIcon className="h-10 w-10 text-white" />}
        text={"REGISTER / JOIN MEET"}
      />
    </div>
  );
}
