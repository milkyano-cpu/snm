import { ASSETS } from "./assets";

export function FooterSection() {
  return (
    <>
      {/* Ellipse30 footer background glow */}
      <div className="-translate-x-1/2 absolute h-[884px] left-[calc(50%+2px)] top-[9494px] w-[3148px]">
        <div className="absolute inset-[-20.72%_-5.82%]">
          <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse30} />
        </div>
      </div>

      {/* Ellipse32 mix-blend glow */}
      <div className="-translate-x-1/2 absolute h-[947px] left-1/2 mix-blend-plus-lighter top-[9611px] w-[2818px]">
        <div className="absolute inset-[-20.93%_-7.03%]">
          <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse32} />
        </div>
      </div>

      {/* "Good People Good Machines Good Energy" tagline */}
      <div className="-translate-x-1/2 absolute content-stretch flex font-outfit gap-[139px] items-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[48px] text-center text-white top-[9301px] tracking-[-0.96px]">
        <p className="relative shrink-0">
          <span className="leading-normal">Good</span>
          <span className="font-bold leading-normal"> People</span>
        </p>
        <p className="relative shrink-0">
          <span className="leading-normal">Good</span>
          <span className="font-bold leading-normal"> Machines</span>
        </p>
        <p className="relative shrink-0">
          <span className="leading-normal">Good </span>
          <span className="font-bold leading-normal">Energy</span>
        </p>
      </div>

      {/* Footer card */}
      <div className="absolute bg-[rgba(0,0,0,0.2)] border-[3px] border-[rgba(255,255,255,0.49)] border-solid content-stretch flex flex-col h-[863px] items-center justify-center left-[245px] px-[328px] py-[92px] rounded-[100px] top-[9613px] w-[1429px]">
        <div className="content-stretch flex flex-col gap-[61px] items-center relative shrink-0 w-[771.571px]">
          {/* Logos row */}
          <div className="content-stretch flex gap-[31px] h-[78px] items-center relative shrink-0">
            <div className="h-[71.429px] relative shrink-0 w-[220.41px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="SNM" className="absolute h-[377.14%] left-[-20.66%] max-w-none top-[-140%] w-[137.61%]" src={ASSETS.snmLogo} />
              </div>
            </div>
            <div className="h-[77.973px] relative shrink-0 w-[80.59px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Amuse" className="absolute h-[128.67%] left-[-12.59%] max-w-none top-[-12.94%] w-[125.17%]" src={ASSETS.amuse} />
              </div>
            </div>
            <div className="h-[66.703px] relative shrink-0 w-[154.349px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Sponsor" className="absolute h-[260.47%] left-[-6.53%] max-w-none top-[-77.91%] w-[113.07%]" src={ASSETS.image57} />
              </div>
            </div>
          </div>

          {/* SEE YOU AT SATURDAY NIGHT */}
          <p className="font-outfit font-bold leading-normal min-w-full not-italic relative shrink-0 text-[73.039px] text-center text-white tracking-[-1.4608px] w-[min-content] whitespace-pre-wrap">
            SEE YOU AT{"\n"}SATURDAY NIGHT
          </p>

          {/* Date + location */}
          <div className="inline-grid leading-[0] place-items-start relative shrink-0" style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}>
            <div className="relative" style={{ gridColumn: 1, gridRow: 1 }}>
              <div className="inline-grid leading-[0] place-items-start relative" style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}>
                <p className="font-outfit font-bold leading-normal not-italic relative text-[26.684px] text-white tracking-[-0.5337px]" style={{ gridColumn: 1, gridRow: 1, marginLeft: "70.9px", marginTop: "4.94px" }}>
                  28th Febuary, 6PM - Late
                </p>
                <div className="inline-grid leading-[0] place-items-start relative" style={{ gridColumn: 1, gridRow: 1, marginLeft: 0, marginTop: 0 }}>
                  <div className="overflow-clip relative size-[13.377px]" style={{ gridColumn: 1, gridRow: 1, marginLeft: 0, marginTop: "6.69px" }}>
                    <div className="absolute inset-[8.33%_12.5%]">
                      <div className="absolute inset-[-5.17%_-5.75%]">
                        <img alt="" className="block max-w-none size-full" src={ASSETS.calendarIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-clip relative size-[32.106px]" style={{ gridColumn: 1, gridRow: 1, marginLeft: "31.44px", marginTop: 0 }}>
                    <div className="absolute inset-[8.33%]">
                      <div className="absolute inset-[-6.32%]">
                        <img alt="" className="block max-w-none size-full" src={ASSETS.clockIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[69.181px] relative w-[507px]" style={{ gridColumn: 1, gridRow: 1, marginLeft: 0, marginTop: "59.3px" }}>
              <p className="absolute font-outfit leading-[0] left-[calc(50%-177.92px)] not-italic text-[26.755px] text-white top-0 tracking-[-0.5351px] w-[431.418px] whitespace-pre-wrap">
                <span className="font-bold leading-normal">Lorbek Luxury Cars,</span>
                <span className="leading-normal"> </span>
                <span className="font-light leading-normal">1/30 Prohasky St, Port Melbourne VIC 3207</span>
              </p>
              <div className="absolute left-0 overflow-clip size-[16.053px] top-[9.88px]">
                <div className="absolute inset-[8.33%_16.67%]">
                  <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.locationIcon} />
                </div>
              </div>
            </div>
          </div>

          {/* LOCK MY SPOT button */}
          <div className="h-[64px] relative shrink-0 w-[281px]">
            <div className="-translate-x-1/2 absolute bg-white h-[64px] left-1/2 rounded-[46.263px] top-0 w-[281px]" />
            <p className="absolute font-outfit font-medium leading-normal left-[88px] not-italic text-[24.648px] text-black top-[23.29px] tracking-[-1.2324px]">
              LOCK MY SPOT
            </p>
            <div className="absolute left-[6.48px] size-[53.665px] top-[5.55px]">
              <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.ellipse16} />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[7.895px] top-[calc(50%-0.38px)]">
                <div className="absolute inset-[8.33%_12.5%]">
                  <div className="absolute inset-[-5.53%_-6.14%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.lockIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[14.557px] items-center left-1/2 top-[10604.52px]">
        {/* Instagram */}
        <div className="relative shrink-0 size-[56.962px]">
          <div className="absolute h-[41.139px] left-[7.59px] top-[7.59px] w-[41.772px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Instagram" className="absolute h-[120%] left-[-6.06%] max-w-none top-[-6.15%] w-[118.18%]" src={ASSETS.instagram} />
            </div>
          </div>
          <div className="absolute border-[1.899px] border-solid border-white left-0 rounded-[6.962px] size-[56.962px] top-0" />
        </div>
        {/* Facebook */}
        <div className="relative shrink-0 size-[56.962px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[39.873px] left-1/2 top-[calc(50%-0.32px)] w-[24.051px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Facebook" className="absolute h-[140.14%] left-[-69.17%] max-w-none top-[-27.44%] w-[230.39%]" src={ASSETS.facebook} />
            </div>
          </div>
          <div className="absolute border-[1.899px] border-solid border-white left-0 rounded-[6.962px] size-[56.962px] top-0" />
        </div>
        {/* TikTok */}
        <div className="relative shrink-0 size-[56.962px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[38.608px] left-1/2 top-[calc(50%-0.32px)] w-[43.671px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="TikTok" className="absolute h-[113.11%] left-0 max-w-none top-[-5.74%] w-full" src={ASSETS.tiktok} />
            </div>
          </div>
          <div className="absolute border-[1.899px] border-solid border-white left-0 rounded-[6.962px] size-[56.962px] top-0" />
        </div>
      </div>
    </>
  );
}
