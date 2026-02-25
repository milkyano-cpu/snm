import Calendar from "@/src/icons/CalendarIcon";
import LocationIcon from "@/src/icons/LocationIcon";

export default function InformationPartMobile() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Calendar className="box-content h-8 w-8 shrink-0 pl-1.25" />
        <p className="text-lg font-bold tracking-tight">
          28th Febuary, 6PM &ndash; Late
        </p>
      </div>
      <div className="flex items-center gap-3">
        <LocationIcon className="h-8 w-8 shrink-0" />
        <p className="text-lg tracking-tight">
          <span className="font-bold">Lorbek Luxury Cars,</span> 1/30 Prohasky
          St,
          <br />
          Port Melbourne VIC 3207
        </p>
      </div>
    </div>
  );
}
