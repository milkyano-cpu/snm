import { ASSETS } from "./assets";

export function VIPApplySection() {
  return (
    <>
      <p className="-translate-x-1/2 absolute font-outfit font-bold leading-normal left-[calc(50%-0.5px)] not-italic text-[48px] text-center text-white top-[3905px] tracking-[-0.96px] w-[605px] whitespace-pre-wrap">
        Want to be considered for VIP Display?
      </p>

      <p className="-translate-x-1/2 absolute font-outfit leading-normal left-[calc(50%-0.5px)] not-italic text-[48px] text-center text-white top-[4105px] tracking-[-0.96px] w-[605px] whitespace-pre-wrap">
        Submit your details when registering!
      </p>

      {/* APPLY FOR VIP DISPLAY button */}
      <div className="-translate-x-1/2 absolute h-[64.305px] left-[calc(50%-0.5px)] top-[4362px] w-[359px]">
        <div className="-translate-x-1/2 absolute bg-white h-[64.305px] left-1/2 rounded-[46.263px] top-0 w-[359px]" />
        <p className="absolute font-outfit font-medium leading-normal left-[88px] not-italic text-[24.648px] text-black top-[23.29px] tracking-[-1.2324px]">
          APPLY FOR VIP DISPLAY
        </p>
        <div className="absolute left-[6.48px] size-[53.665px] top-[5.55px]">
          <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.frame63} />
        </div>
      </div>
    </>
  );
}
