import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-cyan to-pink text-background font-display font-bold">
            D
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            DeVTAL<span className="text-pink">.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex font-display text-sm">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-cyan" }} className="text-muted-foreground hover:text-foreground">Home</Link>
          <Link to="/services" activeProps={{ className: "text-cyan" }} className="text-muted-foreground hover:text-foreground">Services</Link>
          <Link to="/work" activeProps={{ className: "text-cyan" }} className="text-muted-foreground hover:text-foreground">Work</Link>
          <Link to="/careers" activeProps={{ className: "text-cyan" }} className="text-muted-foreground hover:text-foreground">Careers</Link>
          <Link to="/contact" activeProps={{ className: "text-cyan" }} className="text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="wiggle hidden rounded-full bg-foreground px-4 py-2 font-display text-sm text-background hover:bg-cyan md:inline-flex"
          >
            Start something →
          </Link>
        </div>
      </div>
    </header>
  );
}
