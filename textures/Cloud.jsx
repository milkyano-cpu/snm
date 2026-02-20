import Image from "next/image";

export default function Cloud({ topClass, rightClass, bottomClass, leftClass, zIndexClass, mixBlendClass }) {
    return (
        <div
            className={`absolute h-full w-full ${mixBlendClass ? mixBlendClass : ""} ${topClass ? topClass : ""} ${rightClass ? rightClass : ""} ${bottomClass ? bottomClass : ""} ${leftClass ? leftClass : ""} ${zIndexClass ? zIndexClass : ""}`}
        >
            <Image
                src="https://s3.milkyano.com/snm-marketing-email/textures/cloud.svg"
                alt="Cloud"
                width={905}
                height={659}
                className="w-full h-full object-cover"
                loading="eager"
            />
        </div>
    );
}
