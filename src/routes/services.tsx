import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DeVTAL · Honest pricing, no jargon" },
      { name: "description", content: "Websites, business systems, and automation. Honest price ranges. No vendor chaos." },
      { property: "og:title", content: "Services — DeVTAL" },
      { property: "og:description", content: "Websites, systems, automation. Real ranges. Real timelines." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { icon: "🌐", title: "Websites & Web Apps", price: "₹15k – ₹50k", best: "Restaurants, agencies, creators", points: ["Fast, mobile-first", "You own the code", "We host & maintain"] },
  { icon: "⚙️", title: "Business Management Systems", price: "₹40k – ₹2L", best: "Schools, clinics, real estate", points: ["CRM + billing + ops", "One login for everything", "Custom workflows"] },
  { icon: "🤖", title: "Automation & Integrations", price: "₹10k – ₹40k", best: "Anyone copy-pasting daily", points: ["WhatsApp + Sheets + AI", "Tested end-to-end", "We document it"] },
  { icon: "📈", title: "Growth & Performance", price: "₹8k – ₹25k / mo", best: "Founders ready to scale", points: ["SEO + analytics", "Conversion experiments", "No vanity metrics"] },
  { icon: "🎨", title: "Brand & Identity", price: "₹12k – ₹35k", best: "New ventures, rebrands", points: ["Logo + system", "Brand voice", "Built for the web"] },
  { icon: "🛠️", title: "Maintenance Plan", price: "₹3k – ₹10k / mo", best: "Anyone we built for", points: ["Bug fixes within 24h", "Monthly reports", "WhatsApp access"] },
];

export default function Services() { return <ServicesPage />; }
function ServicesPage() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-grid" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <span className="badge-honest">Pricing in the open</span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">What we actually build.</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          No "enterprise-grade synergy". Just real services with real ranges. If your project doesn't fit, WhatsApp us — we build custom too.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="lift rounded-2xl border border-hairline bg-card p-7">
              <div className="text-3xl">{s.icon}</div>
              <h2 className="mt-4 font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-4 font-display text-2xl text-cyan">{s.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">Best for: {s.best}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-cyan">✓</span>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-hairline p-8 text-center">
          <p className="font-display text-2xl">Don't see what you need?</p>
          <p className="mt-2 text-muted-foreground">We've built things from custom CRMs to AI-powered chat menus. Tell us the problem.</p>
          <Link to="/contact" className="wiggle mt-5 inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-2.5 font-display text-sm text-background">Tell us →</Link>
        </div>
      </div>
    </div>
  );
}
