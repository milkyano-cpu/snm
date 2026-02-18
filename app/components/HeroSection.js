import { ASSETS } from "./assets";
import PaperclipIcon from "../icons/PaperclipIcon"
import Button from "./Button";

export function HeroSection() {
  return (
    <>
      {/* Decorative DSC09335 band behind features */}
      <div className="absolute h-[434px] left-[-382px] overflow-clip top-[1131px] w-[2684px]">
        <div className="absolute h-[1033px] left-[1135.41px] opacity-42 top-0 w-[1548.667px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.dsc09335} />
        </div>
        <div className="absolute flex h-[1033px] items-center justify-center left-[-0.06px] top-0 w-[1548.667px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[1033px] opacity-42 relative w-[1548.667px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.dsc09335} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="absolute h-[1068px] left-0 top-0 w-[1920px]">
        {/* Vector bg top */}
        <div className="-translate-x-1/2 absolute flex h-[705.5px] items-center justify-center left-[calc(50%+1px)] mix-blend-hard-light top-[-353px] w-[1918px]">
          <div className="flex-none rotate-180">
            <div className="h-[705.5px] relative w-[1918px]">
              <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.vector5} />
            </div>
          </div>
        </div>

        {/* Clouds */}
        <div className="absolute h-[1051px] left-[-577px] opacity-[0.58] top-[-323px] w-[2710.697px]">
          <div className="absolute h-[1051px] left-[1233px] top-0 w-[1477.697px]">
            <div className="-translate-x-1/2 absolute blur-[13.498px] h-[1050.911px] left-[calc(50%+0.06px)] opacity-10 top-0 w-[1477.822px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[201.65%] left-0 max-w-none top-0 w-full" src={ASSETS.cloud} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[604.919px] items-center justify-center left-[calc(50%+282.04px)] top-[378.47px] w-[850.656px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="blur-[13.498px] h-[604.919px] opacity-10 relative w-[850.656px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[201.65%] left-0 max-w-none top-0 w-full" src={ASSETS.cloud} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[1051px] left-0 top-0 w-[1477.697px]">
            <div className="-translate-x-1/2 absolute blur-[13.498px] h-[1050.911px] left-[calc(50%+0.06px)] opacity-10 top-0 w-[1477.822px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[201.65%] left-0 max-w-none top-0 w-full" src={ASSETS.cloud} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[604.919px] items-center justify-center left-[calc(50%+282.04px)] top-[378.47px] w-[850.656px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="blur-[13.498px] h-[604.919px] opacity-10 relative w-[850.656px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[201.65%] left-0 max-w-none top-0 w-full" src={ASSETS.cloud} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lorbek dealer showroom (masked) */}
        <div
          className="-translate-x-1/2 absolute h-[704px] left-[calc(50%+215.15px)] opacity-[0.92] top-[163px] w-[1490.297px]"
          style={{ maskImage: `url('${ASSETS.lorbekDealerMask}')`, maskSize: "1490.297px 704px", maskRepeat: "no-repeat", maskPosition: "0px 0px" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[145.23%] left-[2.74%] max-w-none top-[-45.24%] w-[97.25%]" src={ASSETS.lorbekDealer} />
          </div>
        </div>

        {/* Aspal road (masked) */}
        <div
          className="-translate-x-1/2 absolute h-[395px] left-[calc(50%+364.5px)] top-[530px] w-[942.411px]"
          style={{ maskImage: `url('${ASSETS.aspalMask}')`, maskSize: "942.411px 395px", maskRepeat: "no-repeat", maskPosition: "0px 0px" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[159.12%] left-0 max-w-none top-[-0.01%] w-full" src={ASSETS.aspal} />
          </div>
        </div>

        {/* Ellipse / glow effects under car */}
        <div className="absolute h-[323.992px] left-[837px] top-[530.15px] w-[960.541px]">
          <div className="absolute h-[80.796px] left-[459.34px] top-[248.85px] w-[489.659px]">
            <div className="absolute inset-[-82.58%_-13.63%]">
              <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse17} />
            </div>
          </div>
          <div className="absolute h-[80.796px] left-[-17px] top-[248.85px] w-[489.659px]">
            <div className="absolute inset-[-82.58%_-13.63%]">
              <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse17} />
            </div>
          </div>
          <div className="absolute h-[577.676px] left-0 top-[-242.42px] w-[1000px]">
            <div className="absolute h-[481.423px] left-0 opacity-61 top-0 w-[1000px]">
              <div className="-translate-x-1/2 absolute h-[98.866px] left-1/2 top-[382.56px] w-[942.065px]">
                <div className="absolute inset-[-51.46%_-5.4%]">
                  <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse1} />
                </div>
              </div>
              <div className="-translate-x-1/2 absolute h-[579px] left-1/2 mix-blend-hard-light top-[-97.73px] w-[942px]">
                <div className="absolute inset-[-12.31%_-7.57%]">
                  <img alt="" className="block max-w-none size-full" src={ASSETS.vector4} />
                </div>
              </div>
              <div className="-translate-x-1/2 absolute h-[261.965px] left-1/2 mix-blend-plus-lighter top-[211.9px] w-[1000px]">
                <div className="absolute inset-[-38.13%_-9.99%_-38.12%_-9.99%]">
                  <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse10} />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#1e2526] h-[22px] left-[354.48px] top-[490.27px] w-[28.039px]" />
            <div className="absolute bg-[#1e1f23] h-[22px] left-[616px] top-[474.27px] w-[28.039px]" />
          </div>
        </div>

        {/* Date + time + location — uses "absolute contents" wrappers from Figma */}
        {/* Outer wrapper: display:contents means children position relative to hero div */}
        <div className="-translate-x-1/2 absolute contents left-[calc(50%-441.5px)] top-[538.3px]">
          <div className="-translate-x-1/2 absolute contents left-[calc(50%-513.54px)] top-[538.3px]">
            <p className="absolute font-outfit font-bold leading-normal left-[calc(50%-620.09px)] not-italic text-[26.684px] text-white top-[543.24px] tracking-[-0.5337px]">
              28th Febuary, 6PM - Late
            </p>
            <div className="absolute contents left-[269.01px] top-[538.3px]">
              <div className="absolute left-[269.01px] overflow-clip size-[13.377px] top-[544.99px]">
                <div className="absolute inset-[8.33%_12.5%]">
                  <div className="absolute inset-[-5.17%_-5.75%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.calendarIcon} />
                  </div>
                </div>
              </div>
              <div className="absolute left-[300.45px] overflow-clip size-[32.106px] top-[538.3px]">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute inset-[-6.32%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.clockIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Location */}
          <div className="absolute h-[69.181px] left-[265px] top-[597.6px] w-[507px]">
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

        {/* CTA button — REGISTER / JOIN MEET */}
        <div className="absolute h-[64.305px] left-[265px] top-[726.18px] w-[359px]">
          <Button icon={<PaperclipIcon className="h-10 w-10 text-white" />} text="REGISTER / JOIN MEET" />
        </div>

        {/* Logos: SNM + sponsors */}
        <div className="absolute content-stretch flex flex-col gap-[13.349px] items-center left-[277.36px] top-[140px] w-[522.271px]">
          <div className="aspect-[108/35] relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="SNM" className="absolute h-[377.14%] left-[-20.66%] max-w-none top-[-140%] w-[137.61%]" src={ASSETS.snmLogo} />
            </div>
          </div>
          <div className="inline-grid leading-[0] place-items-start relative shrink-0" style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}>
            <div className="relative" style={{ gridColumn: 1, gridRow: 1, height: "124.055px", width: "287.056px", marginLeft: 0, marginTop: "17.6px" }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Sponsor" className="absolute h-[260.47%] left-[-6.53%] max-w-none top-[-77.91%] w-[113.07%]" src={ASSETS.image57} />
              </div>
            </div>
            <div className="relative" style={{ gridColumn: 1, gridRow: 1, height: "159.397px", width: "164.572px", marginLeft: "332.11px", marginTop: 0 }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Amuse" className="absolute h-[128.67%] left-[-12.59%] max-w-none top-[-12.94%] w-[125.17%]" src={ASSETS.amuse} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI car image (Lamborghini) — overlaid on hero */}
      <div className="absolute left-[823px] size-[1002px] top-[190px]">
        <img alt="Featured car" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.aiCar} />
      </div>
    </>
  );
}
