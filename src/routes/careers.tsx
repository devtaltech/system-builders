import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build with us. Not for us. · DeVTAL" },
      { name: "description", content: "Join DeVTAL as an intern or campus ambassador. Real work, real commission, real skills. No coffee-fetching." },
      { property: "og:title", content: "Careers — DeVTAL" },
      { property: "og:description", content: "Internships and campus ambassador roles. Commission paid in 7 days." },
    ],
  }),
  component: Careers,
});

const ROLES = [
  {
    icon: "🎓",
    title: "Campus Ambassador",
    mission: "Make DeVTAL famous in your college.",
    youGet: "Internship certificate + 10% commission on every project you bring + direct access to founder.",
    time: "3–5 hrs / week",
    apply: "You talk to people easily and want real-world experience.",
  },
  {
    icon: "⚡",
    title: "Business Development Intern",
    mission: "Help small businesses discover they don't need 4 vendors.",
    youGet: "Commission (10–15%) + LinkedIn recommendation + full-time offer possibility.",
    time: "Flexible",
    apply: "You're not afraid to DM strangers on Instagram or LinkedIn.",
  },
  {
    icon: "🔍",
    title: "Lead Generation Intern",
    mission: "Find businesses with broken websites or no systems.",
    youGet: "Performance-based stipend + certificate + flexible hours.",
    time: "Flexible",
    apply: "You like research and patterns.",
  },
];

function Counter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const target = 47200;
    const t = setInterval(() => {
      setN((v) => {
        const next = v + Math.ceil((target - v) / 18);
        return next >= target ? target : next;
      });
    }, 50);
    return () => clearInterval(t);
  }, []);
  return <span className="text-cyan">₹{n.toLocaleString("en-IN")}</span>;
}

function Careers() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-grid" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <span className="badge-honest">We're hiring talent, not bodies</span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
          Build <span className="text-cyan">with</span> us.
          <br />
          Not <span className="text-pink">for</span> us.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          DeVTAL runs on talent, not hierarchy. Join as an intern or campus ambassador. Earn commission. Learn real skills. No boring work.
        </p>

        {/* Counter */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-hairline bg-card px-5 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan/10">💸</span>
          <div>
            <p className="font-display text-2xl font-bold leading-tight"><Counter /></p>
            <p className="text-xs text-muted-foreground">paid to interns this month</p>
          </div>
        </div>

        {/* Roles */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {ROLES.map((r) => (
            <article key={r.title} className="lift rounded-2xl border border-hairline bg-card p-7">
              <div className="text-3xl">{r.icon}</div>
              <h2 className="mt-4 font-display text-2xl font-semibold">{r.title}</h2>
              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground font-display">Your mission</p>
              <p className="text-foreground/90">{r.mission}</p>
              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground font-display">You get</p>
              <p className="text-foreground/90">{r.youGet}</p>
              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground font-display">Time</p>
              <p className="text-foreground/90">{r.time}</p>
              <div className="my-5 h-px bg-hairline" />
              <p className="text-sm text-muted-foreground"><span className="text-cyan">Apply if:</span> {r.apply}</p>
            </article>
          ))}
        </div>

        {/* Why work */}
        <div className="mt-20 rounded-3xl border border-hairline bg-gradient-to-br from-card to-pink/5 p-10">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Why work with DeVTAL?</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "No coffee-fetching. Real work from day 1.",
              "Commission paid within 7 days of client payment.",
              "Top performers get offered full-time roles.",
              "You'll build a portfolio of real projects (not fake case studies).",
            ].map((l) => (
              <li key={l} className="flex items-start gap-2 text-foreground/90"><span className="mt-1 text-cyan">✓</span>{l}</li>
            ))}
          </ul>
        </div>

        {/* Apply */}
        <div className="mt-16 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold">Apply.</h2>
            <p className="mt-2 text-muted-foreground">Short form. We promise. No 12-step funnel.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll WhatsApp you soon."); }}
            className="md:col-span-3 space-y-4 rounded-2xl border border-hairline bg-card p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-display uppercase tracking-wider text-muted-foreground">Role</label>
              <select className="w-full rounded-lg border border-hairline bg-background px-3 py-2.5 outline-none focus:border-cyan">
                {ROLES.map((r) => <option key={r.title}>{r.title}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-display uppercase tracking-wider text-muted-foreground">
                Why do you want to work with a small, honest agency?
              </label>
              <textarea rows={4} className="w-full rounded-lg border border-hairline bg-background px-3 py-2.5 outline-none focus:border-cyan" placeholder="One paragraph is plenty." />
            </div>
            <button className="wiggle inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-2.5 font-display font-semibold text-background">
              Send it →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-display uppercase tracking-wider text-muted-foreground" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder}
        className="w-full rounded-lg border border-hairline bg-background px-3 py-2.5 outline-none focus:border-cyan" />
    </div>
  );
}
