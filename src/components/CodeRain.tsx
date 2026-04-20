/** Floating code snippets behind the hero. Pure decoration, very low opacity. */
const SNIPPETS = [
  "const trust = await build(real);",
  "if (vendor.count > 1) consolidate();",
  "// no retainer traps",
  "deploy(); maintain(); reply();",
  "fetch('/whatsapp', { human: true })",
  "agency.replace('hype', 'work')",
  "while(broken) { fix(); }",
  "export default honesty;",
];

export function CodeRain() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {SNIPPETS.map((s, i) => (
        <span
          key={i}
          className="float-code absolute font-mono text-xs text-cyan/40 whitespace-nowrap"
          style={{
            left: `${(i * 13 + 5) % 90}%`,
            top: `${60 + (i % 3) * 12}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
