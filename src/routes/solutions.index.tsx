import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/lib/images";
import { Container, Eyebrow } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const title = "Solutions — PacificGate Industrial";
const description =
  "PacificGate works across industrial equipment, technology and opportunity — warehouse, packaging, automation, robotics, CNC, fabrication and import support.";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Page,
});

const tiles = [
  {
    label: "Warehouse & Material Handling",
    image: images.warehouseInterior,
    alt: "Warehouse interior with material handling systems",
    to: "/solutions/warehouse-automation",
  },
  {
    label: "Packaging & Processing",
    image: images.palletWrapping,
    alt: "Automated pallet wrapping line",
    to: "/solutions/packaging-processing",
  },
  {
    label: "Automation & Robotics",
    image: images.roboticPalletising,
    alt: "Robotic palletising in a modern warehouse",
    to: "/solutions/warehouse-automation",
  },
  {
    label: "CNC & Fabrication",
    image: images.cncWorkshop,
    alt: "Precision CNC machining workshop",
    to: "/solutions/cnc-fabrication",
  },
  {
    label: "Production Technology",
    image: images.roboticPackaging,
    alt: "High-tech robotic packaging line",
    to: "/solutions/packaging-processing",
  },
  {
    label: "Import & Delivery Support",
    image: images.cargoTerminal,
    alt: "Cargo terminal operating at golden hour",
    to: "/how-it-works",
  },
];

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>What we work with</Eyebrow>
            <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Industrial equipment. Technology. Opportunity.
            </h1>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">
              PacificGate is not restricted to one type of equipment or one industry. We focus on
              industrial products where Australian businesses can benefit from capable international
              manufacturers.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <Link
                key={t.label}
                to={t.to}
                className="group relative block overflow-hidden rounded-lg border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    width={800}
                    height={600}
                    decoding="async"
                    src={t.image}
                    alt={t.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground">
                  {t.label}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface border-y border-border py-16 lg:py-24 text-center">
        <Container>
          <p className={cn("mx-auto max-w-3xl text-2xl text-teal sm:text-3xl")}>
            The service is the business. The products can vary.
          </p>
        </Container>
      </section>
    </>
  );
}
