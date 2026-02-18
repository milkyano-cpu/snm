
export default function PerFeature({ text, icon }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {icon}
      <p className="text-center">{text}</p>
    </div>
  );
}
