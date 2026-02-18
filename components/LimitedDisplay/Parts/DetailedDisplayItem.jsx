import Image from "next/image";

export default function DetailedDisplayItem({ image, text }) {
    return (
        <li className="flex items-center gap-5">
            <div className="h-10 w-10 shrink-0">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-contain"
                />
            </div>
            <p>
                <span className="font-bold">{text.highlight}</span> {text.description}
            </p>
        </li>
    );
}
