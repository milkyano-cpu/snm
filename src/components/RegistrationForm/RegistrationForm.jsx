import Image from "next/image";
import { ASSETS } from "../assets";
import FormPart from "./Parts/FormPart";

const FIELD_CONFIG = [
  {
    key: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    key: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    key: "whatsapp",
    label: "( Country Code ) Whatsapp Number",
    type: "tel",
    placeholder: "+61 400 000 000",
  },
  {
    key: "instagram",
    label: "Your Instagram Username/Link",
    type: "text",
    placeholder: "@yourusername",
  },
  {
    key: "age",
    label: "How old are you",
    type: "number",
    placeholder: "Enter your age",
  },
  {
    key: "vehicleType",
    label: "Is your Vehicle a Car , Bike, or both ?",
    type: "select",
    placeholder: "Select an option",
    options: ["Car", "Bike", "Both"],
  },
  {
    key: "brand",
    label: "What is the brand?",
    type: "text",
    placeholder: "e.g. Toyota, BMW, Ducati",
  },
  {
    key: "model",
    label: "What is the model?",
    type: "text",
    placeholder: "e.g. Supra, M3, Panigale",
  },
];

export default function RegistrationForm() {
  return (
    <section id="registration-form" className="container">
      <div className="relative mx-auto max-w-357">
        <Image
          src="/border-gradient-for-form.png"
          alt="Border Gradient For Form"
          width={1429}
          height={1733}
          className="h-auto w-full"
        />
        <form className="form-container absolute inset-0 flex flex-col gap-12 py-12">
          <div className="h-19.5">
            <Image
              src="/registration-form/logo.png"
              alt="Registration Form Logo"
              width={1900}
              height={156}
              className="h-full"
            />
          </div>
          <h3 className="text-center text-5xl font-bold">Registration Form</h3>
          <FormPart />
        </form>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useRef, useCallback } from "react";
// import { ASSETS } from "./assets";
// import Button from "./Button";

// const API_BASE = "https://api.alphaomegamensgrooming.com/api/form-submissions";
// const PABBLY_WEBHOOK_URL =
//     "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZlMDYzMDA0MzM1MjZlNTUzZDUxMzMi_pc";

// const SPREADSHEET_URL = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
// const EMAIL_RECEIVER = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;

// const FIELD_CONFIG = [
//     { key: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name" },
//     { key: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name" },
//     { key: "email", label: "Email", type: "email", placeholder: "Enter your email" },
//     { key: "whatsapp", label: "( Country Code ) Whatsapp Number", type: "tel", placeholder: "+61 400 000 000" },
//     { key: "instagram", label: "Your Instagram Username/Link", type: "text", placeholder: "@yourusername" },
//     { key: "age", label: "How old are you", type: "number", placeholder: "Enter your age" },
//     {
//         key: "vehicleType",
//         label: "Is your Vehicle a Car , Bike, or both ?",
//         type: "select",
//         placeholder: "Select an option",
//         options: ["Car", "Bike", "Both"],
//     },
//     { key: "brand", label: "What is the brand?", type: "text", placeholder: "e.g. Toyota, BMW, Ducati" },
//     { key: "model", label: "What is the model?", type: "text", placeholder: "e.g. Supra, M3, Panigale" },
// ];

// const INITIAL_FORM_DATA = Object.fromEntries(FIELD_CONFIG.map((f) => [f.key, ""]));

// function CameraIcon({ className }) {
//     return <img alt="" className={className} src={ASSETS.cameraIcon2} />;
// }

// export function RegistrationForm() {
//     const [formData, setFormData] = useState(INITIAL_FORM_DATA);
//     const [errors, setErrors] = useState({});
//     const [submitState, setSubmitState] = useState("idle");
//     const [submitError, setSubmitError] = useState("");
//     const initCalledRef = useRef(false);

//     const handleChange = useCallback((key, value) => {
//         setFormData((prev) => ({ ...prev, [key]: value }));
//         setErrors((prev) => {
//             if (!prev[key]) return prev;
//             const next = { ...prev };
//             delete next[key];
//             return next;
//         });
//     }, []);

//     const validate = useCallback((data) => {
//         const errs = {};

//         FIELD_CONFIG.forEach(({ key, label, type }) => {
//             const val = data[key].trim();

//             if (!val) {
//                 errs[key] = `${label} is required`;
//                 return;
//             }

//             if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
//                 errs[key] = "Please enter a valid email address";
//             }

//             if (type === "tel" && val.replace(/\D/g, "").length < 7) {
//                 errs[key] = "Phone number must have at least 7 digits";
//             }

//             if (key === "age") {
//                 const age = Number(val);
//                 if (isNaN(age) || age < 16 || age > 100) {
//                     errs[key] = "Age must be between 16 and 100";
//                 }
//             }
//         });

//         return errs;
//     }, []);

//     const handleSubmit = useCallback(async () => {
//         if (submitState === "submitting" || submitState === "success") return;

//         const validationErrors = validate(formData);
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setSubmitState("submitting");
//         setSubmitError("");

//         try {
//             if (!initCalledRef.current) {
//                 try {
//                     await fetch(`${API_BASE}/init-spreadsheet`, {
//                         method: "POST",
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify({
//                             spreadsheetUrl: SPREADSHEET_URL,
//                             fields: FIELD_CONFIG.map((f) => f.key),
//                         }),
//                     });
//                     initCalledRef.current = true;
//                 } catch {
//                     // Non-blocking
//                 }
//             }

//             const payload = {
//                 formData,
//                 spreadsheetUrl: SPREADSHEET_URL,
//                 emailReceiver: EMAIL_RECEIVER,
//             };

//             const [apiResult] = await Promise.allSettled([
//                 fetch(API_BASE, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                 }).then((res) => {
//                     if (!res.ok) throw new Error(`Server responded with ${res.status}`);
//                     return res.json();
//                 }),
//                 fetch(PABBLY_WEBHOOK_URL, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(payload),
//                 }).catch(() => {}),
//             ]);

//             if (apiResult.status === "fulfilled") {
//                 setSubmitState("success");
//             } else {
//                 setSubmitState("error");
//                 setSubmitError(apiResult.reason?.message || "Something went wrong. Please try again.");
//             }
//         } catch (err) {
//             setSubmitState("error");
//             setSubmitError(err.message || "Something went wrong. Please try again.");
//         }
//     }, [formData, validate, submitState]);

//     return (
//         <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] top-[5728px] w-[1429px] bg-black border-[3px] border-[rgba(255,255,255,0.49)] border-solid rounded-[100px] flex flex-col items-center px-[240px] py-[100px]">
//             {/* SNM logo */}
//             <div className="relative h-[73px] w-[224px] mb-[64px]">
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     <img
//                         alt="SNM"
//                         className="absolute h-[377.14%] left-[-20.66%] max-w-none top-[-140%] w-[137.61%]"
//                         src={ASSETS.snmLogo}
//                     />
//                 </div>
//             </div>

//             {/* Heading */}
//             <h2 className="font-outfit font-bold leading-normal text-[48px] text-center text-white tracking-[-0.96px] mb-[60px]">
//                 REGISTRATION FORM
//             </h2>

//             {/* Form area */}
//             {submitState === "success" ? (
//                 <div className="flex flex-col items-center justify-center w-full py-[120px]">
//                     <p className="font-outfit font-bold text-[48px] text-white tracking-[-0.96px] text-center">
//                         You&apos;re Registered!
//                     </p>
//                     <p className="font-dm-sans text-[24px] text-white/70 mt-[16px] text-center">
//                         We&apos;ll send your event details and photos to your email.
//                     </p>
//                 </div>
//             ) : (
//                 <div className="flex flex-col gap-[28px] w-full">
//                     {FIELD_CONFIG.map(({ key, label, type, placeholder, options }) => (
//                         <div key={key} className="flex flex-col gap-[10px] w-full">
//                             <label className="font-outfit leading-normal text-[20px] text-white tracking-[-0.4px]">
//                                 {label}
//                             </label>
//                             {type === "select" ? (
//                                 <select
//                                     value={formData[key]}
//                                     onChange={(e) => handleChange(key, e.target.value)}
//                                     className={`bg-white h-[48px] rounded-[8px] w-full px-[16px] font-dm-sans text-[16px] outline-none appearance-none cursor-pointer ${
//                                         formData[key] ? "text-black" : "text-gray-400"
//                                     }`}
//                                 >
//                                     <option value="" disabled>
//                                         {placeholder}
//                                     </option>
//                                     {options.map((opt) => (
//                                         <option key={opt} value={opt} className="text-black">
//                                             {opt}
//                                         </option>
//                                     ))}
//                                 </select>
//                             ) : (
//                                 <input
//                                     type={type}
//                                     value={formData[key]}
//                                     onChange={(e) => handleChange(key, e.target.value)}
//                                     placeholder={placeholder}
//                                     className="bg-white h-[48px] rounded-[8px] w-full px-[16px] font-dm-sans text-[16px] text-black outline-none"
//                                 />
//                             )}
//                             {errors[key] && <p className="font-dm-sans text-[14px] text-red-500">{errors[key]}</p>}
//                         </div>
//                     ))}

//                     {/* Submit button + error */}
//                     <div className="flex flex-col items-start gap-[12px] mt-[20px]">
//                         <div
//                             onClick={handleSubmit}
//                             className={
//                                 submitState === "submitting" ? "opacity-60 pointer-events-none" : "cursor-pointer"
//                             }
//                         >
//                             <Button
//                                 icon={<CameraIcon className="h-10 w-10 p-1.5" />}
//                                 text={submitState === "submitting" ? "SUBMITTING..." : "GET MY EVENT PHOTOS"}
//                             />
//                         </div>
//                         {submitState === "error" && submitError && (
//                             <p className="font-dm-sans text-[14px] text-red-500">{submitError}</p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
