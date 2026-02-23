"use client";
import { useSyncExternalStore } from "react";

const CANVAS_W = 1920;
const CANVAS_H = 10846;

function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getScale() {
  return document.documentElement.clientWidth / CANVAS_W;
}

function getServerScale() {
  return 1;
}

export function ScaleWrapper({ children }) {
  const scale = useSyncExternalStore(subscribe, getScale, getServerScale);

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
