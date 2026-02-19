import Image from "next/image";

export default function Bglorbrek({ topClass, rightClass, bottomClass, leftClass, opacityClass, zIndexClass }) {
    return (
        <div
            className={`absolute h-full w-full bg-transparent ${zIndexClass ? zIndexClass : ""} ${opacityClass ? opacityClass : ""} ${topClass ? topClass : ""} ${rightClass ? rightClass : ""} ${bottomClass ? bottomClass : ""} ${leftClass ? leftClass : ""}`}
        >
            <Image
                src="/lorbek-building.png"
                alt="backgroundlorbrek"
                width={2981}
                height={1408}
                className="w-full h-full object-contain"
                loading="eager"
            />
        </div>
    );
}
