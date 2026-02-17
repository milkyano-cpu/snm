import { ASSETS } from "./assets";

export function VIPCriteriaSection() {
  return (
    <>
      {/* Blurred car background */}
      <div className="-translate-x-1/2 absolute blur-[32.35px] h-[3658px] left-1/2 opacity-30 top-[3634px] w-[2444px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.blurredCar} />
      </div>

      {/* VIP display text */}
      <p className="-translate-x-1/2 absolute font-outfit font-medium leading-[0] left-1/2 not-italic text-[0px] text-[48px] text-center text-white top-[2711px] tracking-[-0.96px] w-[922px] whitespace-pre-wrap">
        <span className="font-bold leading-normal underline decoration-solid">A limited VIP display area will be reserved for selected vehicles</span>
        <span className="leading-normal"> to help create a premium showcase experience for everyone attending.</span>
      </p>

      {/* VIP glass card */}
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.06)] border-[3px] border-[rgba(255,255,255,0.49)] border-solid h-[613px] left-[calc(50%-0.5px)] rounded-[40px] top-[3021px] w-[1429px]" />

      {/* VIP criteria list */}
      <div className="-translate-x-1/2 absolute h-[457px] left-[calc(50%-0.5px)] top-[3099px] w-[907px]">
        {/* Supercars */}
        <div className="absolute h-[68px] left-0 top-0 w-[907px]">
          <div className="absolute h-[41.383px] left-0 top-[15.19px] w-[70px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[265.76%] left-[-65.13%] max-w-none top-[-73.9%] w-[240.48%]" src={ASSETS.supercarsIcon} />
            </div>
          </div>
          <p className="absolute font-dm-sans font-bold leading-[0] left-[calc(50%-354.5px)] not-italic text-[0px] text-[32px] text-white top-0 tracking-[-0.64px] w-[808px] whitespace-pre-wrap">
            <span className="font-outfit font-bold leading-normal">Supercars &amp; exotic performance vehicles</span>
            <span className="font-outfit leading-normal"> (Lamborghini, Ferrari, McLaren, Porche GT models, etc.)</span>
          </p>
        </div>

        {/* JDM */}
        <div className="absolute h-[68px] left-[21px] top-[127px] w-[886px]">
          <div className="absolute h-[40.387px] left-0 top-[14px] w-[49px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[121.33%] left-0 max-w-none top-[-10.43%] w-full" src={ASSETS.jdmIcon} />
            </div>
          </div>
          <p className="absolute font-dm-sans font-bold leading-[0] left-[calc(50%-365px)] not-italic text-[0px] text-[32px] text-white top-0 tracking-[-0.64px] w-[808px] whitespace-pre-wrap">
            <span className="font-outfit font-bold leading-normal">Iconic or well-presented JDM builds </span>
            <span className="font-outfit leading-normal">(Classic or tastefully modified, high-quality presentation)</span>
          </p>
        </div>

        {/* Unique builds */}
        <div className="absolute h-[68px] left-[30px] top-[254px] w-[720px]">
          <p className="absolute font-dm-sans font-bold leading-[0] left-[calc(50%-291px)] not-italic text-[0px] text-[32px] text-white top-0 tracking-[-0.64px] w-[651px] whitespace-pre-wrap">
            <span className="font-outfit font-bold leading-normal">Unique builds </span>
            <span className="font-outfit leading-normal">or rare vehicles with strong visual presence.</span>
          </p>
          <div className="absolute left-[-10px] size-[57px] top-[5.5px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.uniqueIcon} />
          </div>
        </div>

        {/* Clean presentation */}
        <div className="absolute h-[68px] left-[30px] top-[381px] w-[720px]">
          <p className="absolute font-outfit font-bold leading-[0] left-[calc(50%-291px)] not-italic text-[0px] text-[32px] text-white top-0 tracking-[-0.64px] w-[651px] whitespace-pre-wrap">
            <span className="leading-normal">Clean, respectful, presentation </span>
            <span className="font-normal leading-normal">aligned with the event atmosphere.</span>
          </p>
          <div className="-translate-y-1/2 absolute left-[-8px] size-[55px] top-1/2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.cleanIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
