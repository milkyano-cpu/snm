import { ASSETS } from "./assets";

export function CommunityRulesSection() {
  return (
    <>
      {/* Blurred unsplash background */}
      <div className="-translate-x-1/2 absolute blur-[19.5px] h-[1135px] left-[calc(50%-270.5px)] opacity-[0.34] top-[2770px] w-[3263px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[431.19%] left-[-0.01%] max-w-none top-[-318.45%] w-[100.03%]" src={ASSETS.unsplash} />
        </div>
      </div>

      {/* Community Rules badge pill */}
      <div className="absolute h-[138px] left-[560px] top-[2033px] w-[801px]">
        <div className="-translate-x-1/2 absolute bg-[#1a1a1a] h-[138px] left-1/2 rounded-[69px] top-0 w-[801px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[24px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(50%+0.5px)]">
          <div className="h-[48px] relative shrink-0 w-[53px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[101.07%] left-0 max-w-none top-[-0.05%] w-[1224.68%]" src={ASSETS.communityBadge} />
            </div>
          </div>
          <p className="font-outfit font-medium leading-normal not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] uppercase">
            Community Rules
          </p>
        </div>
      </div>

      {/* Dark rules card */}
      <div className="absolute bg-[#0d0d0d] h-[413px] left-[245px] rounded-[50px] shadow-[0px_0px_139px_0px_rgba(255,255,255,0.25)] top-[2102px] w-[1429px]" />

      {/* RESPECT THE SPACE */}
      <p className="-translate-x-1/2 absolute font-outfit font-bold leading-[0.84] left-[calc(50%-0.5px)] not-italic text-[46px] text-center text-white top-[2229px] tracking-[-2.3px]">
        RESPECT THE SPACE
      </p>

      {/* Bullet rules */}
      <ul className="-translate-x-1/2 absolute block font-dm-sans leading-[0] left-[calc(50%-0.5px)] list-disc text-[0px] text-center text-white top-[2318.91px] tracking-[-1.7992px] w-[533px] whitespace-pre-wrap">
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-outfit leading-normal not-italic text-[35.983px] text-white">No burnouts</span>
        </li>
        <li className="font-outfit mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] not-italic text-[35.983px]">
          <span className="leading-normal text-white">No excessive revving</span>
        </li>
        <li className="font-outfit ms-[calc(var(--list-marker-font-size,0)*1.5*1)] not-italic text-[35.983px]">
          <span className="leading-normal text-white">No hooning or unwanted attention</span>
        </li>
      </ul>
    </>
  );
}
