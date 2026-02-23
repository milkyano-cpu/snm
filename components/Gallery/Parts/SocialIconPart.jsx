import Image from "next/image";

export default function SocialIconPart() {
    return (
        <div className="flex justify-center gap-3 pb-88">
            <div className="border min-w-12 min-h-12 flex justify-center items-center">
                <div className="h-8">
                    <Image
                        src="/icons/instagram-icon.png"
                        alt="Instagram Icon"
                        width={42}
                        height={42}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="border min-w-12 min-h-12 flex justify-center items-center">
                <div className="h-8">
                    <Image
                        src="/icons/facebook-icon.png"
                        alt="Facebook Icon"
                        width={25}
                        height={40}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="border min-w-12 min-h-12 flex justify-center items-center">
                <div className="h-8">
                    <Image
                        src="/icons/tiktok-icon.png"
                        alt="Tiktok Icon"
                        width={44}
                        height={39}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
