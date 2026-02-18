export function GlassCard({ className = "", children, bg = "rgba(0,0,0,0.06)", borderRadius = 40 }) {
  return (
    <div
      className={`border-[3px] border-[rgba(255,255,255,0.49)] border-solid ${className}`}
      style={{ background: bg, borderRadius: `${borderRadius}px` }}
    >
      {children}
    </div>
  );
}
