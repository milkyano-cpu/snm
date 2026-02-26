"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const MIN_HOLD_MS = 1600;

export default function Preloader() {
  const [phase, setPhase] = useState("logo-in");

  const startExit = useCallback(() => {
    setPhase("exit");
    setTimeout(() => setPhase("done"), 700);
  }, []);

  // Phase 1: logo-in → hold
  useEffect(() => {
    const t = setTimeout(() => setPhase("hold"), 1000);
    return () => clearTimeout(t);
  }, []);

  // Phase 2: hold → exit (when loaded + min time met)
  useEffect(() => {
    if (phase !== "hold") {
      return undefined;
    }

    let minTimeMet = false;
    let pageLoaded = document.readyState === "complete";

    const tryExit = () => {
      if (minTimeMet && pageLoaded) {
        startExit();
      }
    };

    const minTimer = setTimeout(() => {
      minTimeMet = true;
      tryExit();
    }, MIN_HOLD_MS);

    const onLoad = () => {
      pageLoaded = true;
      tryExit();
    };

    if (!pageLoaded) {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, [phase, startExit]);

  if (phase === "done") {
    return null;
  }

  return (
    <div className="preloader-overlay" data-phase={phase}>
      <div className="preloader-glow" />
      <div className="preloader-sweep" />
      <Image
        alt="SNM Logo"
        src="/SNM-Logos-BlackBG.svg"
        className="preloader-logo"
        width={523}
        height={170}
        draggable={false}
        loading="eager"
      />
    </div>
  );
}
