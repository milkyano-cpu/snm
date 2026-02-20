import Image from "next/image";

export default function RulesPart() {
  return (
    <div className="container">
      <Image
        src="/rules/community-rules.png"
        alt="Community Rules"
        width={3414}
        height={1382}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
