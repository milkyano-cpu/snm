import Button from "@/components/Button";
import Calendar from "@/icons/CalendarIcon";
import LocationIcon from "@/icons/LocationIcon";
import LockIcon from "@/icons/LockIcon";
import Image from "next/image";

export default function FooterCardPart() {
    return (
        <div className="py-48">
            <div className="fading-border flex flex-col gap-9 items-center py-32">
                <div className="flex justify-center h-19.5 gap-6">
                    <div>
                        <Image
                            src="https://s3.milkyano.com/snm-marketing-email/logo/snm-logo-black-bg-1.png"
                            alt="SNM Logo"
                            width={1045}
                            height={339}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                    <div>
                        <Image
                            src="https://s3.milkyano.com/snm-marketing-email/logo/amuse.png"
                            alt="Amuse Logo"
                            width={330}
                            height={319}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <Image
                            src="https://s3.milkyano.com/snm-marketing-email/logo/hooligoon.png"
                            alt="Hooligoon Logo"
                            width={575}
                            height={249}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h3 className="text-center font-bold text-6xl">
                    SEE YOU AT
                    <br />
                    SATURDAY NIGHT
                </h3>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-8 w-8 shrink-0 box-content pl-1.25" />
                        <p className="font-bold text-lg tracking-tight">28th Febuary, 6PM &ndash; Late</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <LocationIcon className="h-8 w-8 shrink-0" />
                        <p className="text-lg tracking-tight">
                            <span className="font-bold">Lorbek Luxury Cars,</span> 1/30 Prohasky St,
                            <br />
                            Port Melbourne VIC 3207
                        </p>
                    </div>
                </div>
                <Button icon={<LockIcon className="h-10 w-10 text-white" />} text="LOCK MY SPOT" href="#registration-form"/>
            </div>
        </div>
    );
}
