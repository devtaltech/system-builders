import { useEffect, useState } from "react";

/** Just-for-fun light/dark toggle. Persists to localStorage. */
export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("devtal-theme");
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setLight(true);
    }
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("devtal-theme", next ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="wiggle inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-foreground hover:border-cyan/60"
    >
      <span className="text-base">{light ? "☀️" : "🌙"}</span>
    </button>
  );
}
