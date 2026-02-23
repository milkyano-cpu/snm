import Image from "next/image";

export default function LogoPart() {
    return (
        <div className="relative flex flex-col items-center">
            <div className="animate-fade-in-up">
                <div className="w-full">
                    <Image
                        src="https://s3.milkyano.com/snm-marketing-email/logo/snm-logo-black-bg-1.png"
                        alt="SNM Logo"
                        width={1045}
                        height={339}
                        className="w-full h-full object-contain"
                        loading="eager"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center animate-fade-in-up animation-delay-200">
                <div className="w-full">
                    <Image
                        src="https://s3.milkyano.com/snm-marketing-email/logo/hooligoon.png"
                        alt="Hooligoon Logo"
                        width={575}
                        height={249}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="w-full">
                    <Image
                        src="https://s3.milkyano.com/snm-marketing-email/logo/amuse.png"
                        alt="Amuse Logo"
                        width={330}
                        height={319}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
