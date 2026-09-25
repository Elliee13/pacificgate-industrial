import { Link } from "@tanstack/react-router";
import { Container } from "./primitives";

const links = [
  { to: "/australian-businesses", label: "Australian Businesses" },
  { to: "/manufacturers", label: "Manufacturers" },
  { to: "/solutions", label: "Solutions" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate lg:flex-row lg:items-center lg:justify-between">
        <p>© 2026 PacificGate Industrial</p>
        <p className="text-muted-foreground">Global manufacturers ↔ Australian business</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-teal">
              {l.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
