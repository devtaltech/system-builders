import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — DeVTAL · Real projects, real results" },
      { name: "description", content: "Selected work from DeVTAL. WhatsApp automations, school systems, real estate CRMs, and more." },
      { property: "og:title", content: "Work — DeVTAL" },
      { property: "og:description", content: "Selected projects with honest results. Case studies coming." },
    ],
  }),
  component: Work,
});

const PROJECTS = [
  { tag: "Automation", title: "Restaurant WhatsApp Booking", stat: "47 signups", sub: "in 30 days", color: "cyan" },
  { tag: "System", title: "School Management Platform", stat: "100% automated", sub: "fees + attendance", color: "pink" },
  { tag: "CRM", title: "Real Estate Pipeline", stat: "Lead → close", sub: "in one dashboard", color: "cyan" },
  { tag: "Website", title: "Mango Studio Portfolio", stat: "1.2s LCP", sub: "on mobile 3G", color: "pink" },
  { tag: "Automation", title: "Clinic Reminder Bot", stat: "62% fewer", sub: "no-shows", color: "cyan" },
  { tag: "Web App", title: "Internal HR Dashboard", stat: "4 tools → 1", sub: "for the team", color: "pink" },
];

function Work() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-grid" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <span className="badge-honest">Selected work</span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">Real work. Real results.</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          We're a young team. Our portfolio is growing fast. Every client becomes a case study — no fake screenshots.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="lift group rounded-2xl border border-hairline bg-card p-7">
              <span className={`text-xs font-display uppercase tracking-widest ${p.color === "cyan" ? "text-cyan" : "text-pink"}`}>{p.tag}</span>
              <h2 className="mt-3 font-display text-xl font-semibold">{p.title}</h2>
              <p className={`mt-6 font-display text-4xl font-bold ${p.color === "cyan" ? "text-cyan" : "text-pink"}`}>{p.stat}</p>
              <p className="text-sm text-muted-foreground">{p.sub}</p>
              <p className="mt-6 text-xs text-muted-foreground">Full case study coming soon →</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
