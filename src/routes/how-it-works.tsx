import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Container, CtaBand, Eyebrow } from "@/components/site/primitives";

const title = "How It Works — PacificGate Industrial";
const description =
  "A commercial link between two markets: how PacificGate does the groundwork in Australia for international manufacturers and overseas for Australian businesses.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/how-it-works" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: Page,
});

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full bg-navy px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-foreground">
      {children}
    </span>
  );
}

const sectionA = [
  { num: 1, title: "Understand", text: "Products, capability & objectives" },
  { num: 2, title: "Identify", text: "Target industries, buyers & partners" },
  { num: 3, title: "Approach", text: "Local outreach and market development" },
  { num: 4, title: "Qualify", text: "Separate real opportunities from noise" },
  { num: 5, title: "Connect", text: "Bring in the manufacturer at the right time" },
  { num: 6, title: "Follow through", text: "Keep commercial momentum moving" },
];

const sectionB = [
  { title: "Tell us what you need", text: "Requirement first — not a product pitch." },
  { title: "We identify suitable manufacturers", text: "Compare capability, fit and commercial options." },
  { title: "Information & proposals", text: "Coordinate questions, specifications and responses." },
  { title: "Direct connection", text: "Bring you together with the right manufacturer." },
  { title: "Commercial follow-up", text: "Keep communication and next steps moving." },
];

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>How it works</Eyebrow>
            <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
              A commercial link between two markets.
            </h1>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">
              We do the groundwork in Australia for international manufacturers — and the groundwork
              overseas for Australian businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Section A — For International Manufacturers */}
      <section className="border-t border-border py-16 lg:py-24">
        <Container>
          <Pill>For International Manufacturers</Pill>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {sectionA.map((s) => (
              <div
                key={s.num}
                className="rounded-lg border border-border bg-card p-5 shadow-card"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-teal text-sm font-bold text-teal-foreground">
                  {s.num}
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-navy">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section B — For Australian Businesses */}
      <section className="border-t border-border bg-surface py-16 lg:py-24">
        <Container>
          <Pill>For Australian Businesses</Pill>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {sectionB.map((s, i) => (
              <div
                key={s.title}
                className={cn(
                  "rounded-lg border border-border p-5 shadow-card",
                  i % 2 === 0 ? "bg-card" : "bg-surface",
                )}
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-teal text-sm font-bold text-teal-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-navy">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
