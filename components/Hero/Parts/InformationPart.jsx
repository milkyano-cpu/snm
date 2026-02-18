import CalendarIcon from "../../../app/icons/CalendarIcon";
import LocationIcon from "../../../app/icons/LocationIcon";
import PaperclipIcon from "../../../app/icons/PaperclipIcon";

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
      <button className="relative rounded-full bg-white py-3 text-black">
        <div className="absolute top-[50%] left-2 -translate-y-[50%] rounded-full bg-red-500">
          <PaperclipIcon className="h-10 w-10 text-white" />
        </div>
        <p className="pr-5 pl-15">REGISTER / JOIN MEET</p>
      </button>
    </div>
  );
}
