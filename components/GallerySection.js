import { ASSETS } from "./assets";

export function GallerySection() {
  return (
    <>
      {/* Blurred DSC05674 background for gallery/footer */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[30.4px] h-[1799px] left-[calc(50%+3px)] opacity-[0.14] top-[calc(50%+4523.5px)] w-[1914px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.28%] left-0 max-w-none top-[-14.27%] w-full" src={ASSETS.dsc05674Blur} />
        </div>
      </div>

      {/* Gallery mosaic */}
      <div className="absolute h-[1128.177px] left-[245px] overflow-clip rounded-[44px] top-[7919px] w-[1410.307px]">
        {/* Row 1 – 3 vertical photos */}
        <div className="absolute h-[463px] left-0 opacity-80 top-0 w-[690px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[223.11%] left-0 max-w-none top-[-42.44%] w-full" src={ASSETS.gallery2} />
          </div>
        </div>
        <div className="absolute h-[463px] left-[690px] opacity-80 top-0 w-[360px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[138.35%] left-0 max-w-none top-0 w-[100.09%]" src={ASSETS.gallery4} />
          </div>
        </div>
        <div className="absolute h-[463px] left-[1050px] opacity-80 top-0 w-[360px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[138.26%] left-[0.07%] max-w-none top-0 w-[100.02%]" src={ASSETS.gallery3} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="absolute h-[385px] left-0 opacity-80 top-[463px] w-[428px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[166.39%] left-0 max-w-none top-[-8.84%] w-[99.98%]" src={ASSETS.gallery7} />
          </div>
        </div>
        <div className="absolute h-[386px] left-[428px] opacity-80 top-[462px] w-[360px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[148.67%] left-[-3.2%] max-w-none top-[-24.39%] w-[106.48%]" src={ASSETS.gallery6} />
          </div>
        </div>
        <div className="absolute h-[385px] left-[788px] opacity-80 top-[463px] w-[622px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[241.87%] left-0 max-w-none top-[-70.92%] w-full" src={ASSETS.gallery5} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="absolute h-[281px] left-0 opacity-80 top-[847.18px] w-[569px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.gallery8} />
        </div>
        <div className="absolute h-[281.177px] left-[569px] opacity-80 top-[847px] w-[360.306px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ASSETS.gallery1} />
        </div>
        <div className="absolute h-[281px] left-[929.31px] opacity-80 top-[847.18px] w-[481px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[256.26%] left-0 max-w-none top-[-62.59%] w-full" src={ASSETS.gallery9} />
          </div>
        </div>
      </div>
    </>
  );
}
