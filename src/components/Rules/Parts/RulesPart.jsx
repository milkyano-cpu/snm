import Image from "next/image";

export default function RulesPart() {
  return (
    <div data-animate className="container">
      <Image
        src="/rules/community-rules.png"
        alt="Community Rules"
        width={3414}
        height={1382}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
