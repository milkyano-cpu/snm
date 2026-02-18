export function GlassCard({ className = "", children, bg = "rgba(0,0,0,0.06)", borderRadius = 40 }) {
  return (
    <div
      className={className}
      style={{
        background: bg,
        borderRadius: `${borderRadius}px`,
        border: '3px solid rgba(255,255,255,0.49)',
      }}
    >
      {children}
    </div>
  );
}
