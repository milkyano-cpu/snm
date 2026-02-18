"use client";
import { useEffect, useState, useCallback } from "react";

const CANVAS_W = 1920;
const CANVAS_H = 10846;

export function ScaleWrapper({ children }) {
  const [scale, setScale] = useState(1);

  const update = useCallback(() => {
    setScale(document.documentElement.clientWidth / CANVAS_W);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return (
    <div style={{ overflow: "hidden", height: `${CANVAS_H * scale}px` }}>
      <main
        className="relative bg-[#010101]"
        style={{
          width: `${CANVAS_W}px`,
          height: `${CANVAS_H}px`,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </main>
    </div>
  );
}
