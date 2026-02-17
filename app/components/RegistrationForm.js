import { ASSETS } from "./assets";

const fields = [
  "First Name",
  "Last Name",
  "Email",
  "( Country Code ) Whatsapp Number",
  "Your Instagram Username/Link",
  "How old are you",
  "Is your Vehicle a Car , Bike, or both ?",
  "What is the brand?",
  "What is the model?",
];

export function RegistrationForm() {
  return (
    <>
      {/* Registration card */}
      <div className="-translate-x-1/2 absolute bg-black border-[3px] border-[rgba(255,255,255,0.49)] border-solid h-[1938px] left-[calc(50%-0.5px)] rounded-[100px] top-[5728px] w-[1429px]" />

      {/* SNM logo inside form */}
      <div className="-translate-x-1/2 absolute h-[73px] left-1/2 top-[5835px] w-[224px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="SNM" className="absolute h-[377.14%] left-[-20.66%] max-w-none top-[-140%] w-[137.61%]" src={ASSETS.snmLogo} />
        </div>
      </div>

      {/* REGISTRATION FORM heading */}
      <p className="-translate-x-1/2 absolute font-outfit font-bold leading-normal left-1/2 not-italic text-[48px] text-center text-white top-[5972px] tracking-[-0.96px]">
        REGISTRATION FORM
      </p>

      {/* Form fields */}
      <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[485px] top-[6094px] w-[950px]">
        {fields.map((label) => (
          <div key={label} className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
            <p className="font-outfit leading-normal not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full whitespace-pre-wrap">
              {label}
            </p>
            <div className="bg-white h-[60px] rounded-[8px] shrink-0 w-full" />
          </div>
        ))}
      </div>

      {/* GET MY EVENT PHOTOS button */}
      <div className="-translate-x-1/2 absolute h-[64.305px] left-[calc(50%-295.5px)] top-[7462px] w-[359px]">
        <div className="-translate-x-1/2 absolute bg-white h-[64.305px] left-1/2 rounded-[46.263px] top-0 w-[359px]" />
        <p className="absolute font-outfit font-medium leading-normal left-[calc(50%-98.5px)] not-italic text-[24.648px] text-black top-[23.29px] tracking-[-1.2324px]">
          GET MY EVENT PHOTOS
        </p>
        <div className="absolute left-[6px] size-[53.665px] top-[6px]">
          <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.ellipse16} />
        </div>
        <div className="absolute inset-[32.66%_87.67%_32.74%_6.13%]">
          <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.cameraIcon2} />
        </div>
      </div>
    </>
  );
}
