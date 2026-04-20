import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CodeRain } from "@/components/CodeRain";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DeVTAL — Your business isn't a website. It's a system." },
      { name: "description", content: "From one-page sites to full business management. One team. No vendor chaos. No retainer traps." },
      { property: "og:title", content: "DeVTAL — Build the system, not just the website" },
      { property: "og:description", content: "We build and maintain websites + business systems. Real humans. Honest pricing." },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const },
};

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <CodeRain />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge-honest"><span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" /> Open for 2 of 3 slots — May</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] md:text-7xl lg:text-8xl"
          >
            Your business isn't a <span className="scribble">website</span>.
            <br />
            It's a <span className="text-cyan">system</span>. We build both.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            From one-page sites to full business management — DeVTAL builds and manages everything.
            One team. No vendor chaos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/contact" className="wiggle group inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 font-display font-semibold text-background hover:shadow-glow-cyan">
              Start something real
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href="#how-we-think" className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3.5 font-display text-foreground hover:border-cyan/60">
              See how we think ↓
            </a>
          </motion.div>

          {/* Honest badges */}
          <motion.div {...fadeUp} className="mt-12 flex flex-wrap gap-2">
            {["No retainer traps", "We reply on WhatsApp", "Fixed pricing", "3 clients/month max", "Built & maintained"].map((b) => (
              <span key={b} className="badge-honest">✦ {b}</span>
            ))}
          </motion.div>
        </div>

        {/* Trust bar */}
        <div className="relative border-y border-hairline bg-surface/40">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by founders who were tired of bad agencies</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-3 opacity-70">
              {["Kettle&Co", "Nimbus HR", "Patio Real Estate", "RootSchool", "Mango Studio"].map((l) => (
                <span key={l} className="font-display text-lg text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WE FIX WHAT'S BROKEN */}
      <section id="how-we-think" className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.h2 {...fadeUp} className="font-display text-4xl font-bold md:text-5xl">
          You're probably dealing with <span className="text-pink">this</span> right now.
        </motion.h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Three things we hear every week. Three things we fix.</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { pain: "Your website is slow and your developer is missing.", fix: "We rebuild it — and stay to keep it healthy.", n: "01" },
            { pain: "You have 4 logins for billing, CRM, and WhatsApp.", fix: "We give you one system. One dashboard.", n: "02" },
            { pain: "Automation sounds great but no one sets it up properly.", fix: "We actually do it. Then we test it. Then we test it again.", n: "03" },
          ].map((c) => (
            <motion.div key={c.n} {...fadeUp} className="lift relative overflow-hidden rounded-2xl border border-hairline bg-card p-7">
              <span className="absolute right-5 top-5 font-display text-5xl font-bold text-muted-foreground/20">{c.n}</span>
              <p className="font-display text-xl text-foreground">{c.pain}</p>
              <div className="my-5 h-px w-full bg-hairline" />
              <div className="flex items-start gap-2 text-cyan">
                <span className="mt-0.5">✓</span>
                <p className="text-foreground/90">{c.fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative border-y border-hairline bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold md:text-5xl">What we actually build.</h2>
            <Link to="/services" className="font-display text-sm text-cyan hover:underline">All services →</Link>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: "🌐", title: "Websites & Web Apps", price: "₹15k – ₹50k", best: "Restaurants, agencies, creators", line: "Fast, fixable, owned by you." },
              { icon: "⚙️", title: "Business Systems", price: "₹40k – ₹2L", best: "Schools, clinics, real estate", line: "CRM + billing + ops in one." },
              { icon: "🤖", title: "Automation & Integrations", price: "₹10k – ₹40k", best: "Anyone tired of copy-paste", line: "WhatsApp, sheets, AI — wired up." },
            ].map((s) => (
              <motion.div key={s.title} {...fadeUp} className="lift group rounded-2xl border border-hairline bg-card p-7">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 text-muted-foreground">{s.line}</p>
                <div className="my-5 h-px w-full bg-hairline" />
                <p className="font-display text-2xl text-cyan">{s.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">Best for: {s.best}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="mt-8 text-muted-foreground">
            Don't see what you need? <a href="https://wa.me/919999999999" className="text-cyan hover:underline">WhatsApp us</a>. We build custom stuff too.
          </motion.p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        <motion.p {...fadeUp} className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">How it works</motion.p>
        <motion.h2 {...fadeUp} className="mt-4 font-display text-3xl font-bold md:text-5xl leading-tight">
          We <span className="text-cyan">talk</span> (no pressure).
          We <span className="text-pink">build</span> (fast).
          You <span className="underline decoration-cyan decoration-4 underline-offset-4">launch</span> (happy).
        </motion.h2>
        <motion.p {...fadeUp} className="mt-6 text-muted-foreground">
          No 50-page contracts. No "discovery phase" billing. No PowerPoint theatre.
        </motion.p>
      </section>

      {/* UNCOMFORTABLY HONEST */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="mx-auto max-w-5xl px-6 py-24">
          <motion.div {...fadeUp} className="rounded-3xl border border-hairline bg-gradient-to-br from-pink/10 via-card to-cyan/5 p-10 md:p-14">
            <span className="badge-honest">Uncomfortably honest</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Let's be real for a second.</h2>
            <div className="mt-6 space-y-4 text-lg text-foreground/90 md:text-xl">
              <p>Most agencies will promise you the world and deliver a WordPress theme.</p>
              <p>We're not most agencies.</p>
              <p>We take fewer clients. We reply on WhatsApp. We fix things when they break.</p>
              <p className="text-muted-foreground">If that sounds boring to you — we're not a match. If it sounds refreshing — let's talk.</p>
            </div>
            <Link to="/contact" className="wiggle mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-display text-sm text-background hover:bg-cyan">
              Let's talk →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div {...fadeUp} className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Real work. Real results.</h2>
          <Link to="/work" className="font-display text-sm text-cyan hover:underline">Full portfolio →</Link>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { tag: "Automation", title: "Restaurant WhatsApp Booking", stat: "47 signups", sub: "in 30 days" },
            { tag: "System", title: "School Management", stat: "100% automated", sub: "fees + attendance" },
            { tag: "CRM", title: "Real Estate Pipeline", stat: "Lead → close", sub: "in one dashboard" },
          ].map((p) => (
            <motion.article key={p.title} {...fadeUp} className="lift group rounded-2xl border border-hairline bg-card p-7">
              <span className="text-xs font-display uppercase tracking-widest text-pink">{p.tag}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-6 font-display text-4xl font-bold text-cyan">{p.stat}</p>
              <p className="text-sm text-muted-foreground">{p.sub}</p>
              <p className="mt-6 text-xs text-muted-foreground">Case study coming soon</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">We're new. Our portfolio is growing. Every client becomes a case study.</p>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div {...fadeUp} className="overflow-hidden rounded-3xl border border-hairline bg-card">
          <div className="marquee-track flex gap-12 whitespace-nowrap py-6 font-display text-3xl">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["Build the system →", "Not just the website →", "Three slots / month →", "Real humans on WhatsApp →"].map((t) => (
                <span key={`${i}-${t}`} className="text-foreground/80">{t}<span className="mx-6 text-pink">✦</span></span>
              ))
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
}
