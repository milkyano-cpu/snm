import { ASSETS } from "./assets";

export function CommunityRulesSection() {
  return (
    <>
      {/* Blurred unsplash background */}
      <div className="absolute top-[2770px] left-[calc(50%-270.5px)] h-[1135px] w-[3263px] -translate-x-1/2 opacity-[0.34] blur-[19.5px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute top-[-318.45%] left-[-0.01%] h-[431.19%] w-[100.03%] max-w-none"
            src={ASSETS.unsplash}
          />
        </div>
      </div>

      {/* Community Rules badge pill */}
      <div className="absolute top-[2033px] left-[560px] h-[138px] w-[801px]">
        <div className="absolute top-0 left-1/2 h-[138px] w-[801px] -translate-x-1/2 rounded-[69px] bg-[#1a1a1a]" />
        <div className="absolute top-[calc(50%+0.5px)] left-[calc(50%-0.5px)] flex -translate-x-1/2 -translate-y-1/2 content-stretch items-center justify-center gap-[24px]">
          <div className="relative h-[48px] w-[53px] shrink-0">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute top-[-0.05%] left-0 h-[101.07%] w-[1224.68%] max-w-none"
                src={ASSETS.communityBadge}
              />
            </div>
          </div>
          <p className="font-outfit relative shrink-0 text-center text-[40px] leading-normal font-medium tracking-[-0.8px] text-white uppercase not-italic">
            Community Rules
          </p>
        </div>
      </div>

      {/* Dark rules card */}
      <div className="absolute top-[2102px] left-[245px] h-[413px] w-[1429px] rounded-[50px] bg-[#0d0d0d] shadow-[0px_0px_139px_0px_rgba(255,255,255,0.25)]" />

      {/* RESPECT THE SPACE */}
      <p className="font-outfit absolute top-[2229px] left-[calc(50%-0.5px)] -translate-x-1/2 text-center text-[46px] leading-[0.84] font-bold tracking-[-2.3px] text-white not-italic">
        RESPECT THE SPACE
      </p>

      {/* Bullet rules */}
      <ul className="font-dm-sans absolute top-[2318.91px] left-[calc(50%-0.5px)] block w-[533px] -translate-x-1/2 list-disc text-center text-[0px] leading-[0] tracking-[-1.7992px] whitespace-pre-wrap text-white">
        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] mb-0">
          <span className="font-outfit text-[35.983px] leading-normal text-white not-italic">
            No burnouts
          </span>
        </li>
        <li className="font-outfit ms-[calc(var(--list-marker-font-size,0)*1.5*1)] mb-0 text-[35.983px] not-italic">
          <span className="leading-normal text-white">
            No excessive revving
          </span>
        </li>
        <li className="font-outfit ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[35.983px] not-italic">
          <span className="leading-normal text-white">
            No hooning or unwanted attention
          </span>
        </li>
      </ul>
    </>
  );
}
