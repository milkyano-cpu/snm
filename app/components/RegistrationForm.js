"use client";

import { useState, useRef, useCallback } from "react";
import { ASSETS } from "./assets";

const API_BASE = "https://api.alphaomegamensgrooming.com/api/form-submissions";
const PABBLY_WEBHOOK_URL =
  "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZlMDYzMDA0MzM1MjZlNTUzZDUxMzMi_pc";

const SPREADSHEET_URL = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const EMAIL_RECEIVER = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;

const FIELD_CONFIG = [
  { key: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name" },
  { key: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name" },
  { key: "email", label: "Email", type: "email", placeholder: "Enter your email" },
  { key: "whatsapp", label: "( Country Code ) Whatsapp Number", type: "tel", placeholder: "+61 400 000 000" },
  { key: "instagram", label: "Your Instagram Username/Link", type: "text", placeholder: "@yourusername" },
  { key: "age", label: "How old are you", type: "number", placeholder: "Enter your age" },
  {
    key: "vehicleType",
    label: "Is your Vehicle a Car , Bike, or both ?",
    type: "select",
    placeholder: "Select an option",
    options: ["Car", "Bike", "Both"],
  },
  { key: "brand", label: "What is the brand?", type: "text", placeholder: "e.g. Toyota, BMW, Ducati" },
  { key: "model", label: "What is the model?", type: "text", placeholder: "e.g. Supra, M3, Panigale" },
];

const INITIAL_FORM_DATA = Object.fromEntries(FIELD_CONFIG.map((f) => [f.key, ""]));

export function RegistrationForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle"); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState("");
  const initCalledRef = useRef(false);

  const handleChange = useCallback((key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const validate = useCallback((data) => {
    const errs = {};

    FIELD_CONFIG.forEach(({ key, label, type }) => {
      const val = data[key].trim();

      if (!val) {
        errs[key] = `${label} is required`;
        return;
      }

      if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        errs[key] = "Please enter a valid email address";
      }

      if (type === "tel" && val.replace(/\D/g, "").length < 7) {
        errs[key] = "Phone number must have at least 7 digits";
      }

      if (key === "age") {
        const age = Number(val);
        if (isNaN(age) || age < 16 || age > 100) {
          errs[key] = "Age must be between 16 and 100";
        }
      }
    });

    return errs;
  }, []);

  const handleSubmit = useCallback(async () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitState("submitting");
    setSubmitError("");

    try {
      // Init spreadsheet on first submit
      if (!initCalledRef.current) {
        try {
          await fetch(`${API_BASE}/init-spreadsheet`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              spreadsheetUrl: SPREADSHEET_URL,
              fields: FIELD_CONFIG.map((f) => f.key),
            }),
          });
          initCalledRef.current = true;
        } catch {
          // Non-blocking — continue even if init fails
        }
      }

      const payload = {
        formData,
        spreadsheetUrl: SPREADSHEET_URL,
        emailReceiver: EMAIL_RECEIVER,
      };

      const [apiResult] = await Promise.allSettled([
        fetch(API_BASE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).then((res) => {
          if (!res.ok) throw new Error(`Server responded with ${res.status}`);
          return res.json();
        }),
        fetch(PABBLY_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {}), // Pabbly errors are non-blocking
      ]);

      if (apiResult.status === "fulfilled") {
        setSubmitState("success");
      } else {
        setSubmitState("error");
        setSubmitError(apiResult.reason?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitState("error");
      setSubmitError(err.message || "Something went wrong. Please try again.");
    }
  }, [formData, validate]);

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
        {submitState === "success" ? (
          <div className="flex flex-col items-center justify-center w-full py-[120px]">
            <p className="font-outfit font-bold text-[48px] text-white tracking-[-0.96px] text-center">
              You&apos;re Registered!
            </p>
            <p className="font-dm-sans text-[24px] text-white/70 mt-[16px] text-center">
              We&apos;ll send your event details and photos to your email.
            </p>
          </div>
        ) : (
          FIELD_CONFIG.map(({ key, label, type, placeholder, options }) => (
            <div key={key} className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
              <p className="font-outfit leading-normal not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full whitespace-pre-wrap">
                {label}
              </p>
              {type === "select" ? (
                <select
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className={`bg-white h-[60px] rounded-[8px] shrink-0 w-full px-[16px] font-dm-sans text-[20px] outline-none appearance-none cursor-pointer ${
                    formData[key] ? "text-black" : "text-gray-400"
                  }`}
                >
                  <option value="" disabled>
                    {placeholder}
                  </option>
                  {options.map((opt) => (
                    <option key={opt} value={opt} className="text-black">
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  className="bg-white h-[60px] rounded-[8px] shrink-0 w-full px-[16px] font-dm-sans text-[20px] text-black outline-none"
                />
              )}
              {errors[key] && (
                <p className="font-dm-sans text-[16px] text-red-500 mt-[-8px]">{errors[key]}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* GET MY EVENT PHOTOS button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitState === "submitting" || submitState === "success"}
        className={`-translate-x-1/2 absolute h-[64.305px] left-[calc(50%-295.5px)] top-[7462px] w-[359px] border-none bg-transparent p-0 cursor-pointer ${
          submitState === "submitting" || submitState === "success" ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        <div className="-translate-x-1/2 absolute bg-white h-[64.305px] left-1/2 rounded-[46.263px] top-0 w-[359px]" />
        <p className="absolute font-outfit font-medium leading-normal left-[calc(50%-98.5px)] not-italic text-[24.648px] text-black top-[23.29px] tracking-[-1.2324px]">
          {submitState === "submitting" ? "SUBMITTING..." : "GET MY EVENT PHOTOS"}
        </p>
        <div className="absolute left-[6px] size-[53.665px] top-[6px]">
          <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.ellipse16} />
        </div>
        <div className="absolute inset-[32.66%_87.67%_32.74%_6.13%]">
          <img alt="" className="absolute block inset-0 max-w-none" src={ASSETS.cameraIcon2} />
        </div>
      </button>

      {/* Submit error message */}
      {submitState === "error" && submitError && (
        <p className="-translate-x-1/2 absolute font-dm-sans left-1/2 text-[18px] text-center text-red-500 top-[7540px] w-[600px]">
          {submitError}
        </p>
      )}
    </>
  );
}
