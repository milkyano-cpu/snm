const rules = [
  "• No burnouts",
  "• No excessive revving",
  "• No hooning or unwanted attention",
];

export default function DetailedRulePart() {
  return (
    <div className="rounded-4xl border pt-20 pb-12">
      <h3 className="text-center text-4xl font-bold">RESPECT THE SPACE</h3>
      <ul className="text-center">
        {rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}
