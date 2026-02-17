import { ASSETS } from "./assets";

export function FeaturesBar() {
  return (
    <>
      {/* Background unsplash blur behind features — Mask group with calc() positioning */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-21.5px)] top-[calc(50%-3441.5px)]">
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute blur-[19.5px] h-[2383px] left-[calc(50%-21.5px)] opacity-50 top-[calc(50%-3441.5px)] w-[1963px]"
          style={{ maskImage: `url('${ASSETS.unsplashMask}')`, maskSize: "1963px 2383px", maskRepeat: "no-repeat", maskPosition: "0px 0px" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[123.58%] left-[-0.01%] max-w-none top-0 w-[100.03%]" src={ASSETS.unsplash} />
          </div>
        </div>
      </div>

      {/* Glass card */}
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.06)] border-[3px] border-[rgba(255,255,255,0.49)] border-solid h-[373px] left-[calc(50%-0.5px)] rounded-[40px] top-[1192px] w-[1429px]" />

      {/* Features content — calc() positioning with translate */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[57px] items-start left-[calc(50%-1px)] top-[calc(50%-4045px)]">
        {/* Cars */}
        <div className="h-[150px] relative shrink-0 w-[218px]">
          <p className="-translate-x-1/2 absolute font-outfit font-medium leading-normal left-1/2 not-italic text-[28px] text-center text-white top-[88px] tracking-[-0.56px] uppercase w-[224px] whitespace-pre-wrap">
            Premium Cars + Custom Builds
          </p>
          <div className="absolute h-[62.929px] left-[68px] top-0 w-[87.906px]">
            <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.carsIcon} />
          </div>
        </div>

        {/* Divider */}
        <div className="flex h-[149px] items-center justify-center relative shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[149px]">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.dividerLine} />
              </div>
            </div>
          </div>
        </div>

        {/* Bikes */}
        <div className="h-[150px] relative shrink-0 w-[218px]">
          <p className="-translate-x-1/2 absolute font-outfit font-medium leading-normal left-1/2 not-italic text-[28px] text-center text-white top-[88px] tracking-[-0.56px] uppercase w-[212px] whitespace-pre-wrap">
            {`BIKES & CRUISER CULTURE`}
          </p>
          <div className="-translate-x-1/2 absolute h-[59px] left-[calc(50%+0.11px)] top-0 w-[94.215px]">
            <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.bikesIcon} />
          </div>
        </div>

        {/* Divider */}
        <div className="flex h-[149px] items-center justify-center relative shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[149px]">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.dividerLine} />
              </div>
            </div>
          </div>
        </div>

        {/* Photography */}
        <div className="h-[150px] relative shrink-0 w-[218px]">
          <div className="-translate-x-1/2 absolute font-outfit font-medium leading-normal left-[calc(50%+2px)] not-italic text-[28px] text-center text-white top-[88px] tracking-[-0.56px] uppercase whitespace-nowrap">
            <p className="mb-0">PROFESSIONAL</p>
            <p>{`VIDEO & PHOTOGRAPHY`}</p>
          </div>
          <div className="-translate-x-1/2 absolute left-1/2 size-[40px] top-[18px]">
            <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.cameraSparkles} />
          </div>
        </div>

        {/* Divider */}
        <div className="flex h-[149px] items-center justify-center relative shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[149px]">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.dividerLine} />
              </div>
            </div>
          </div>
        </div>

        {/* Food trucks */}
        <div className="h-[150px] relative shrink-0 w-[218px]">
          <p className="-translate-x-1/2 absolute font-outfit font-medium leading-normal left-[calc(50%+2px)] not-italic text-[28px] text-center text-white top-[88px] tracking-[-0.56px] uppercase">
            FOOD TRUCKS
            <br aria-hidden="true" />
            {`& POP UP STORE`}
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[40px] top-[17px]">
            <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.foodTruckIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
