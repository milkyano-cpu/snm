import Calendar from "@/src/icons/CalendarIcon";
import LocationIcon from "@/src/icons/LocationIcon";

export default function InformationPartMobile() {
  return (
    <div className="mx-auto flex max-w-80 flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <Calendar className="box-content h-7.5 w-7.5 shrink-0 pl-1.25" />
        <p className="text-lg font-bold tracking-tight">
          28th Febuary, 6PM &ndash; Late
        </p>
      </div>
      <div className="flex items-center gap-3.5">
        <LocationIcon className="h-7.5 w-7.5 shrink-0" />
        <p className="text-lg tracking-tight">
          <span className="font-bold">Lorbek Luxury Cars,</span>
          <br />
          1/30 Prohasky St, Port Melbourne
          <br />
          VIC 3207
        </p>
      </div>
    </div>
  );
}
