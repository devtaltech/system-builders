import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's talk. No pressure. · DeVTAL" },
      { name: "description", content: "WhatsApp us, email us, or fill the short form. Reply within 24 hours. Budgets from ₹10k." },
      { property: "og:title", content: "Contact — DeVTAL" },
      { property: "og:description", content: "Real humans. Real reply times. No pricing gatekeeping." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-grid" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <span className="badge-honest">No pressure. Promise.</span>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Let's <span className="text-cyan">talk</span>.</h1>
        <p className="mt-3 max-w-xl text-lg text-muted-foreground">
          Tell us what you're trying to build (or fix). We'll reply within 24 hours — usually faster.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-cyan/40 bg-cyan/5 p-8">
                <p className="font-display text-2xl">Got it. ✦</p>
                <p className="mt-2 text-muted-foreground">We'll be in touch on WhatsApp or email shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4 rounded-2xl border border-hairline bg-card p-6 md:p-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                </div>
                <Field label="Phone / WhatsApp" name="phone" placeholder="+91…" />
                <div>
                  <label className="mb-1 block text-xs font-display uppercase tracking-wider text-muted-foreground" htmlFor="msg">
                    What do you need help with?
                  </label>
                  <textarea
                    id="msg"
                    rows={6}
                    placeholder="A new website? A broken system? Automation? Just describe it like you'd tell a friend."
                    className="w-full rounded-lg border border-hairline bg-background px-3 py-3 outline-none focus:border-cyan"
                  />
                </div>
                <button className="wiggle inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-display font-semibold text-background">
                  Send it →
                </button>
                <p className="text-xs text-muted-foreground">No "submit to get pricing" gatekeeping. Just a conversation.</p>
              </form>
            )}
          </div>

          <aside className="md:col-span-2 space-y-4">
            <a href="https://wa.me/919999999999" className="lift block rounded-2xl border border-hairline bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366]/15 text-lg">📱</span>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                  <p className="font-display text-lg">+91 99999 99999</p>
                </div>
              </div>
            </a>
            <div className="lift rounded-2xl border border-hairline bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan/15">⏱️</span>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-muted-foreground">Reply time</p>
                  <p className="font-display text-lg">Within 24 hours · usually faster</p>
                </div>
              </div>
            </div>
            <div className="lift rounded-2xl border border-hairline bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-pink/15">💰</span>
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-muted-foreground">Budgets</p>
                  <p className="font-display text-lg">From ₹10k. Yes really.</p>
                </div>
              </div>
            </div>
          </aside>
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
