
export default function PerFeature({ text, icon }) {
  return (
    <div className="flex flex-col items-center shrink-0 w-[218px] h-[150px]">
      <div className="h-[70px] flex items-center justify-center">
        {icon}
      </div>
      <p className="font-outfit font-medium text-[28px] tracking-[-0.56px] uppercase text-white leading-normal text-center mt-[18px]">
        {text}
      </p>
    </div>
  );
}
