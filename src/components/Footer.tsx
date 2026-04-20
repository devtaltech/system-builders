import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-cyan to-pink text-background font-display font-bold">D</span>
              <span className="font-display text-lg font-bold">DeVTAL<span className="text-pink">.</span></span>
            </div>
            <p className="mt-4 max-w-md text-muted-foreground">
              From website to full business system — built and managed.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Three projects a month. No vendor chaos. Real humans on WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-muted-foreground">Sitemap</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-cyan">Services</Link></li>
              <li><Link to="/work" className="hover:text-cyan">Work</Link></li>
              <li><Link to="/careers" className="hover:text-cyan">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-cyan">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-muted-foreground">Elsewhere</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan">LinkedIn</a></li>
              <li><a href="https://wa.me/919999999999" className="hover:text-cyan">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} DeVTAL. Built by humans. Maintained by humans.</p>
          <p className="font-display">No retainer traps · No discovery-phase billing</p>
        </div>
      </div>
    </footer>
  );
}
