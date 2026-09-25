import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./primitives";

const solutions = [
  { to: "/solutions/warehouse-automation", label: "Warehouse & Automation" },
  { to: "/solutions/packaging-processing", label: "Packaging & Processing" },
  { to: "/solutions/cnc-fabrication", label: "CNC & Fabrication" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/australian-businesses", label: "Australian Businesses" },
  { to: "/manufacturers", label: "Manufacturers" },
  { to: "/solutions", label: "Solutions", children: solutions },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = "text-sm font-medium text-slate transition-colors hover:text-teal";
const activeProps = {
  className: "text-sm font-semibold text-teal underline underline-offset-8 decoration-2",
};

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3">
      <span className="flex h-8 items-end gap-1" aria-hidden>
        <span className="h-4 w-1.5 rounded-sm bg-navy" />
        <span className="h-6 w-1.5 rounded-sm bg-teal" />
        <span className="h-8 w-1.5 rounded-sm bg-navy" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold text-navy">PacificGate</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Industrial
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.to} className="group relative">
                <Link to={item.to} className={`${linkClass} flex items-center gap-1`} activeProps={activeProps}>
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-lg border border-border bg-card p-2 opacity-0 shadow-card transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block rounded-md px-3 py-2 text-sm text-slate hover:bg-surface hover:text-teal"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.to} to={item.to} className={linkClass} activeProps={activeProps}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-md bg-teal px-4 py-2.5 text-sm font-semibold text-teal-foreground transition-colors hover:bg-teal/90 sm:inline-flex"
          >
            Get in Touch →
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-navy xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.to}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-base font-medium text-navy"
                    activeProps={{ className: "block py-2.5 text-base font-semibold text-teal" }}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      aria-label="Toggle solutions"
                      onClick={() => setSolutionsOpen((v) => !v)}
                      className="p-2 text-slate"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
                {item.children && solutionsOpen ? (
                  <div className="ml-3 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-slate"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-teal px-4 py-3 text-sm font-semibold text-teal-foreground"
            >
              Get in Touch →
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
