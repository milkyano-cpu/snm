"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Button from "../Button";
import { ASSETS } from "../assets";
import Image from "next/image";

const API_BASE = "https://api.alphaomegamensgrooming.com/api/form-submissions";
const PABBLY_WEBHOOK_URL =
  "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZlMDYzMDA0MzM1MjZlNTUzZDUxMzMi_pc";

const SPREADSHEET_URL = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const EMAIL_RECEIVER = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;

const FIELD_CONFIG = [
  {
    key: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    span: 1,
  },
  {
    key: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    span: 1,
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    span: 2,
  },
  {
    key: "whatsapp",
    label: "Whatsapp Number",
    type: "phone",
    placeholder: "+61 400 000 000",
    span: 2,
  },
  {
    key: "instagram",
    label: "Your Instagram Username/Link",
    type: "text",
    placeholder: "@yourusername",
    span: 1,
  },
  {
    key: "age",
    label: "How old are you",
    type: "number",
    placeholder: "Enter your age",
    span: 1,
  },
  {
    key: "vehicleType",
    label: "Is your Vehicle a Car , Bike, or both ?",
    type: "select",
    placeholder: "Select an option",
    options: ["Car", "Bike", "Both"],
    span: 2,
  },
  {
    key: "brand",
    label: "What is the brand?",
    type: "text",
    placeholder: "e.g. Toyota, BMW, Ducati",
    span: 1,
  },
  {
    key: "model",
    label: "What is the model?",
    type: "text",
    placeholder: "e.g. Supra, M3, Panigale",
    span: 1,
  },
];

const INITIAL_FORM_DATA = Object.fromEntries(
  FIELD_CONFIG.map((f) => [f.key, ""]),
);

const inputBaseClasses =
  "bg-white h-[48px] rounded-[8px] w-full px-[16px] font-dm-sans text-[16px] outline-none transition-all duration-200 border border-transparent focus:ring-2 focus:ring-white/20 focus:shadow-[0_0_12px_rgba(255,255,255,0.08)]";

const inputErrorClasses = "border-red-500 ring-2 ring-red-500/30";

function CameraIcon({ className }) {
  return (
    <Image
      alt="Camera Icon"
      className={className}
      src={ASSETS.cameraIcon2}
      width={40}
      height={40}
    />
  );
}

function Spinner({ className }) {
  return (
    <svg className={`reg-spinner ${className}`} viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="32 32"
      />
    </svg>
  );
}

function SuccessCheckmark() {
  return (
    <div className="reg-success-checkmark mb-8">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle
          cx="40"
          cy="40"
          r="36"
          stroke="rgba(74, 222, 128, 0.5)"
          strokeWidth="3"
          fill="rgba(22, 163, 74, 0.15)"
        />
        <path
          className="reg-checkmark-path"
          d="M24 42 L34 52 L56 30"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function Toast({ toast, onDismiss }) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      if (elRef.current) elRef.current.dataset.dismissing = "true";
      setTimeout(onDismiss, 300);
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  if (typeof window === "undefined" || !toast) return null;

  return createPortal(
    <div
      ref={elRef}
      className={`reg-toast ${toast.type === "success" ? "reg-toast-success" : "reg-toast-error"}`}
      data-dismissing="false"
    >
      {toast.message}
    </div>,
    document.body,
  );
}

function ChevronDown() {
  return (
    <svg
      className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function RegistrationFormV3() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const [toast, setToast] = useState(null);
  const initCalledRef = useRef(false);
  const fieldRefs = useRef({});

  const dismissToast = useCallback(() => setToast(null), []);

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

      if (
        (type === "tel" || type === "phone") &&
        val.replace(/\D/g, "").length < 7
      ) {
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

  const scrollToFirstError = useCallback((errs) => {
    const firstKey = FIELD_CONFIG.find((f) => errs[f.key])?.key;
    if (!firstKey) return;
    const el = fieldRefs.current[firstKey];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollY = window.scrollY + rect.top - 120;
    window.scrollTo({ top: Math.max(0, scrollY), behavior: "smooth" });
  }, []);

  const handleSubmit = useCallback(async () => {
    if (submitState === "submitting" || submitState === "success") return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      scrollToFirstError(validationErrors);
      return;
    }

    setSubmitState("submitting");
    setSubmitError("");

    try {
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
          // Non-blocking
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
        }).catch(() => {}),
      ]);

      if (apiResult.status === "fulfilled") {
        setSubmitState("success");
        setToast({
          type: "success",
          message: "Registration submitted successfully!",
        });
      } else {
        const msg =
          apiResult.reason?.message ||
          "Something went wrong. Please try again.";
        setSubmitState("error");
        setSubmitError(msg);
        setToast({ type: "error", message: msg });
      }
    } catch (err) {
      const msg = err.message || "Something went wrong. Please try again.";
      setSubmitState("error");
      setSubmitError(msg);
      setToast({ type: "error", message: msg });
    }
  }, [formData, validate, submitState, scrollToFirstError]);

  return (
    <div
      id="registration-form"
      className="fading-border container flex flex-col items-center rounded-[100px] px-60 py-25"
    >
      {/* logo */}
      <div className="-mx-[15%] w-[130%] pb-12">
        <Image
          src="/registration-form/logo.png"
          alt="Registration Form Logo"
          width={2000}
          height={2000}
          className="h-full w-full"
        />
      </div>

      {/* Heading */}
      <h2 className="font-outfit mb-10 text-center text-[48px] leading-normal font-bold tracking-[-0.96px] text-white">
        REGISTRATION FORM
      </h2>

      {/* Form area */}
      {submitState === "success" ? (
        <div className="animate-fade-in-up flex w-full flex-col items-center justify-center py-30">
          <SuccessCheckmark />
          <p className="font-outfit text-center text-[48px] font-bold tracking-[-0.96px] text-white">
            You&apos;re Registered!
          </p>
          <p className="font-dm-sans mt-4 text-center text-[24px] text-white/70">
            We&apos;ll send your event details and photos to your email.
          </p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-2 gap-5">
          {FIELD_CONFIG.map(
            ({ key, label, type, placeholder, options, span }) => (
              <div
                key={key}
                ref={(el) => {
                  fieldRefs.current[key] = el;
                }}
                className={`flex w-full flex-col gap-3 ${span === 2 ? "col-span-2" : "col-span-1"}`}
              >
                <label className="font-outfit text-[20px] leading-normal tracking-[-0.4px] text-white">
                  {label}
                </label>
                {type === "select" ? (
                  <div className="relative">
                    <select
                      value={formData[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className={`${inputBaseClasses} cursor-pointer appearance-none pr-10 ${
                        formData[key] ? "text-black" : "text-gray-400"
                      } ${errors[key] ? inputErrorClasses : ""}`}
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
                    <ChevronDown />
                  </div>
                ) : type === "phone" ? (
                  <PhoneInput
                    defaultCountry="au"
                    value={formData[key]}
                    onChange={(phone) => handleChange(key, phone)}
                    className={`reg-phone-input ${errors[key] ? "reg-phone-input-error" : ""}`}
                  />
                ) : (
                  <input
                    type={type}
                    value={formData[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={placeholder}
                    {...(type === "number" ? { min: 0 } : {})}
                    className={`${inputBaseClasses} text-black ${errors[key] ? inputErrorClasses : ""}`}
                  />
                )}
                {errors[key] && (
                  <p className="font-dm-sans text-[14px] text-red-500">
                    {errors[key]}
                  </p>
                )}
              </div>
            ),
          )}

          {/* Submit button + error */}
          <div className="col-span-2 mt-5 flex flex-col items-start gap-3">
            <div
              onClick={handleSubmit}
              className={
                submitState === "submitting"
                  ? "pointer-events-none opacity-60"
                  : "cursor-pointer"
              }
            >
              <Button
                icon={
                  submitState === "submitting" ? (
                    <Spinner className="h-10 w-10 p-1.5 text-white" />
                  ) : (
                    <CameraIcon className="h-10 w-10 p-1.5" />
                  )
                }
                text={
                  submitState === "submitting"
                    ? "SUBMITTING..."
                    : "GET MY EVENT PHOTOS"
                }
              />
            </div>
            {submitState === "error" && submitError && (
              <p className="font-dm-sans text-[14px] text-red-500">
                {submitError}
              </p>
            )}
          </div>
        </div>
      )}

      <Toast
        key={toast ? toast.message : ""}
        toast={toast}
        onDismiss={dismissToast}
      />
    </div>
  );
}
