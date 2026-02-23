import { ASSETS } from "./assets";
import { GlassCard } from "./GlassCard";

export function VIPCriteriaSection() {
  return (
    <>
      {/* Blurred car background */}
      <div className="absolute top-[3634px] left-1/2 h-[3658px] w-[2444px] -translate-x-1/2 opacity-30 blur-[32.35px]">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={ASSETS.blurredCar}
        />
      </div>

      {/* VIP display text */}
      <p className="font-outfit absolute top-[2711px] left-1/2 w-[922px] -translate-x-1/2 text-center text-[0px] text-[48px] leading-[0] font-medium tracking-[-0.96px] whitespace-pre-wrap text-white not-italic">
        <span className="leading-normal font-bold underline decoration-solid">
          A limited VIP display area will be reserved for selected vehicles
        </span>
        <span className="leading-normal">
          {" "}
          to help create a premium showcase experience for everyone attending.
        </span>
      </p>

      {/* VIP glass card */}
      <GlassCard className="absolute top-[3021px] left-[calc(50%-0.5px)] h-[613px] w-[1429px] -translate-x-1/2" />

      {/* VIP criteria list */}
      <div className="absolute top-[3099px] left-[calc(50%-0.5px)] h-[457px] w-[907px] -translate-x-1/2">
        {/* Supercars */}
        <div className="absolute top-0 left-0 h-[68px] w-[907px]">
          <div className="absolute top-[15.19px] left-0 h-[41.383px] w-[70px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute top-[-73.9%] left-[-65.13%] h-[265.76%] w-[240.48%] max-w-none"
                src={ASSETS.supercarsIcon}
              />
            </div>
          </div>
          <p className="font-dm-sans absolute top-0 left-[calc(50%-354.5px)] w-[808px] text-[0px] text-[32px] leading-[0] font-bold tracking-[-0.64px] whitespace-pre-wrap text-white not-italic">
            <span className="font-outfit leading-normal font-bold">
              Supercars &amp; exotic performance vehicles
            </span>
            <span className="font-outfit leading-normal">
              {" "}
              (Lamborghini, Ferrari, McLaren, Porche GT models, etc.)
            </span>
          </p>
        </div>

        {/* JDM */}
        <div className="absolute top-[127px] left-[21px] h-[68px] w-[886px]">
          <div className="absolute top-[14px] left-0 h-[40.387px] w-[49px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute top-[-10.43%] left-0 h-[121.33%] w-full max-w-none"
                src={ASSETS.jdmIcon}
              />
            </div>
          </div>
          <p className="font-dm-sans absolute top-0 left-[calc(50%-365px)] w-[808px] text-[0px] text-[32px] leading-[0] font-bold tracking-[-0.64px] whitespace-pre-wrap text-white not-italic">
            <span className="font-outfit leading-normal font-bold">
              Iconic or well-presented JDM builds{" "}
            </span>
            <span className="font-outfit leading-normal">
              (Classic or tastefully modified, high-quality presentation)
            </span>
          </p>
        </div>

        {/* Unique builds */}
        <div className="absolute top-[254px] left-[30px] h-[68px] w-[720px]">
          <p className="font-dm-sans absolute top-0 left-[calc(50%-291px)] w-[651px] text-[0px] text-[32px] leading-[0] font-bold tracking-[-0.64px] whitespace-pre-wrap text-white not-italic">
            <span className="font-outfit leading-normal font-bold">
              Unique builds{" "}
            </span>
            <span className="font-outfit leading-normal">
              or rare vehicles with strong visual presence.
            </span>
          </p>
          <div className="absolute top-[5.5px] left-[-10px] size-[57px]">
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              src={ASSETS.uniqueIcon}
            />
          </div>
        </div>

        {/* Clean presentation */}
        <div className="absolute top-[381px] left-[30px] h-[68px] w-[720px]">
          <p className="font-outfit absolute top-0 left-[calc(50%-291px)] w-[651px] text-[0px] text-[32px] leading-[0] font-bold tracking-[-0.64px] whitespace-pre-wrap text-white not-italic">
            <span className="leading-normal">
              Clean, respectful, presentation{" "}
            </span>
            <span className="leading-normal font-normal">
              aligned with the event atmosphere.
            </span>
          </p>
          <div className="absolute top-1/2 left-[-8px] size-[55px] -translate-y-1/2">
            <img
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              src={ASSETS.cleanIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
}
