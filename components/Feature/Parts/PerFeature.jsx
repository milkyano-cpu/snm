export default function PerFeature({ text, icon }) {
  return (
    <div className="flex h-[150px] w-[218px] shrink-0 flex-col items-center">
      <div className="flex h-[70px] items-center justify-center">{icon}</div>
      <p className="font-outfit mt-[18px] text-center text-[28px] leading-normal font-medium tracking-[-0.56px] text-white uppercase">
        {text}
      </p>
    </div>
  );
}
