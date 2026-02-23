import { ASSETS } from "./assets";
import { GlassCard } from "./GlassCard";

export function FeaturesBar() {
  return (
    <>
      {/* Background unsplash blur behind features — Mask group with calc() positioning */}
      <div className="absolute top-[calc(50%-3441.5px)] left-[calc(50%-21.5px)] contents -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute top-[calc(50%-3441.5px)] left-[calc(50%-21.5px)] h-[2383px] w-[1963px] -translate-x-1/2 -translate-y-1/2 opacity-50 blur-[19.5px]"
          style={{
            maskImage: `url('${ASSETS.unsplashMask}')`,
            maskSize: "1963px 2383px",
            maskRepeat: "no-repeat",
            maskPosition: "0px 0px",
          }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute top-0 left-[-0.01%] h-[123.58%] w-[100.03%] max-w-none"
              src={ASSETS.unsplash}
            />
          </div>
        </div>
      </div>

      {/* Glass card */}
      <GlassCard className="absolute top-[1192px] left-[calc(50%-0.5px)] h-[373px] w-[1429px] -translate-x-1/2" />

      {/* Features content — calc() positioning with translate */}
      <div className="absolute top-[calc(50%-4045px)] left-[calc(50%-1px)] flex -translate-x-1/2 -translate-y-1/2 content-stretch items-start gap-[57px]">
        {/* Cars */}
        <div className="relative h-[150px] w-[218px] shrink-0">
          <p className="font-outfit absolute top-[88px] left-1/2 w-[224px] -translate-x-1/2 text-center text-[28px] leading-normal font-medium tracking-[-0.56px] whitespace-pre-wrap text-white uppercase not-italic">
            Premium Cars + Custom Builds
          </p>
          <div className="absolute top-0 left-[68px] h-[62.929px] w-[87.906px]">
            <img
              alt=""
              className="absolute inset-0 block max-w-none"
              src={ASSETS.carsIcon}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex h-[149px] w-0 shrink-0 items-center justify-center">
          <div className="flex-none rotate-90">
            <div className="relative h-0 w-[149px]">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <img
                  alt=""
                  className="block size-full max-w-none"
                  src={ASSETS.dividerLine}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bikes */}
        <div className="relative h-[150px] w-[218px] shrink-0">
          <p className="font-outfit absolute top-[88px] left-1/2 w-[212px] -translate-x-1/2 text-center text-[28px] leading-normal font-medium tracking-[-0.56px] whitespace-pre-wrap text-white uppercase not-italic">
            {`BIKES & CRUISER CULTURE`}
          </p>
          <div className="absolute top-0 left-[calc(50%+0.11px)] h-[59px] w-[94.215px] -translate-x-1/2">
            <img
              alt=""
              className="absolute inset-0 block max-w-none"
              src={ASSETS.bikesIcon}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex h-[149px] w-0 shrink-0 items-center justify-center">
          <div className="flex-none rotate-90">
            <div className="relative h-0 w-[149px]">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <img
                  alt=""
                  className="block size-full max-w-none"
                  src={ASSETS.dividerLine}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Photography */}
        <div className="relative h-[150px] w-[218px] shrink-0">
          <div className="font-outfit absolute top-[88px] left-[calc(50%+2px)] -translate-x-1/2 text-center text-[28px] leading-normal font-medium tracking-[-0.56px] whitespace-nowrap text-white uppercase not-italic">
            <p className="mb-0">PROFESSIONAL</p>
            <p>{`VIDEO & PHOTOGRAPHY`}</p>
          </div>
          <div className="absolute top-[18px] left-1/2 size-[40px] -translate-x-1/2">
            <img
              alt=""
              className="absolute inset-0 block max-w-none"
              src={ASSETS.cameraSparkles}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex h-[149px] w-0 shrink-0 items-center justify-center">
          <div className="flex-none rotate-90">
            <div className="relative h-0 w-[149px]">
              <div className="absolute inset-[-1.5px_0_0_0]">
                <img
                  alt=""
                  className="block size-full max-w-none"
                  src={ASSETS.dividerLine}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Food trucks */}
        <div className="relative h-[150px] w-[218px] shrink-0">
          <p className="font-outfit absolute top-[88px] left-[calc(50%+2px)] -translate-x-1/2 text-center text-[28px] leading-normal font-medium tracking-[-0.56px] text-white uppercase not-italic">
            FOOD TRUCKS
            <br aria-hidden="true" />
            {`& POP UP STORE`}
          </p>
          <div className="absolute top-[17px] left-1/2 size-[40px] -translate-x-1/2">
            <img
              alt=""
              className="absolute inset-0 block max-w-none"
              src={ASSETS.foodTruckIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
}
