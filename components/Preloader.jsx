"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState("logo-in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 1900);
    const t3 = setTimeout(() => setPhase("done"), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="preloader-overlay"
      data-phase={phase}
    >
      {/* Ambient red glow behind logo */}
      <div className="preloader-glow" />

      {/* Horizontal light sweep */}
      <div className="preloader-sweep" />

      <img
        src="/SNM-Logos-BlackBG.svg"
        alt="SNM Logo"
        className="preloader-logo"
        draggable={false}
      />
    </div>
  );
}
