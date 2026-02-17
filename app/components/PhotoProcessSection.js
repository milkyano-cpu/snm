import { ASSETS } from "./assets";

export function PhotoProcessSection() {
  return (
    <>
      {/* Ellipse25 mid-page glow */}
      <div className="-translate-x-1/2 absolute h-[1364px] left-1/2 mix-blend-plus-lighter top-[5560px] w-[1908px]">
        <div className="absolute inset-[-19.24%_-13.76%]">
          <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse25} />
        </div>
      </div>

      {/* Glass card */}
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.06)] border-[3px] border-[rgba(255,255,255,0.49)] border-solid h-[456px] left-[calc(50%-0.5px)] rounded-[40px] top-[5003px] w-[1429px]" />

      {/* Step 1 number */}
      <div className="absolute left-[479.92px] size-[37.165px] top-[5125px]">
        <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.ellipse1669} />
        <p className="absolute font-dm-sans font-light leading-normal left-[13.08px] text-[34.412px] text-black top-[6.19px] tracking-[-0.6882px]">1</p>
      </div>

      {/* Step 1 description */}
      <p className="-translate-x-1/2 absolute font-dm-sans font-bold leading-normal left-[498.5px] text-[32px] text-center text-white top-[5208px] tracking-[-0.64px] w-[397px] whitespace-pre-wrap">
        Professional photographers will capture the night
      </p>

      {/* Divider 1 */}
      <div className="absolute flex h-[149px] items-center justify-center left-[729px] top-[5155.08px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[149px]">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={ASSETS.dividerLine2} />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 number */}
      <div className="absolute left-[940.92px] size-[37.165px] top-[5125px]">
        <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.ellipse1669} />
        <p className="absolute font-dm-sans font-light leading-normal left-[calc(50%-9.5px)] text-[34.412px] text-black top-[calc(50%-11.58px)] tracking-[-0.6882px]">2</p>
      </div>

      {/* Step 2 description */}
      <p className="-translate-x-1/2 absolute font-dm-sans font-bold leading-normal left-[959.5px] text-[32px] text-center text-white top-[5208px] tracking-[-0.64px] w-[397px] whitespace-pre-wrap">
        Enter your email + car / bike details.
      </p>

      {/* Divider 2 */}
      <div className="absolute flex h-[149px] items-center justify-center left-[1190px] top-[5155.08px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[149px]">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={ASSETS.dividerLine2} />
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 number */}
      <div className="absolute left-[1401.92px] size-[37.165px] top-[5125px]">
        <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.ellipse1669} />
        <p className="absolute font-dm-sans font-light leading-normal left-[calc(50%-9.5px)] text-[34.412px] text-black top-[calc(50%-11.58px)] tracking-[-0.6882px]">3</p>
      </div>

      {/* Step 3 description */}
      <p className="-translate-x-1/2 absolute font-dm-sans font-bold leading-normal left-[1420.5px] text-[32px] text-center text-white top-[5208.16px] tracking-[-0.64px] w-[397px] whitespace-pre-wrap">
        You&apos;ll receive access to event photos after the meet
      </p>
    </>
  );
}
