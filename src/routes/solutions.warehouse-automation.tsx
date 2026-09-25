import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";
import { CaptionedImage, Container, CtaBand, Eyebrow } from "@/components/site/primitives";

const title = "Warehouse & Automation — PacificGate Industrial";
const description =
  "From autonomous pallet movement to high-bay storage, conveyors and robotic handling — PacificGate connects Australian operations with manufacturers building practical warehouse technology.";

export const Route = createFileRoute("/solutions/warehouse-automation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/solutions/warehouse-automation" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/warehouse-automation" }],
  }),
  component: Page,
});

const miniCards = [
  {
    image: images.autonomousRobot,
    alt: "Autonomous robot in a modern warehouse",
    title: "AGV / AMR systems",
    text: "Autonomous movement for repeat transport tasks.",
  },
  {
    image: images.roboticPalletising,
    alt: "Robotic palletising in a modern warehouse",
    title: "Robotic palletising",
    text: "Automated handling for consistent pallet build and flow.",
  },
];

const chips = [
  "3PL",
  "Distribution",
  "Cold storage",
  "Food & beverage",
  "Industrial supply",
  "Manufacturing",
  "E-commerce fulfilment",
];

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <CaptionedImage
              src={images.warehouseInterior}
              alt="Warehouse interior with material handling systems"
              priority
              imgClassName="h-64 sm:h-80 lg:h-[28rem]"
            />
            <div className="max-w-xl">
              <Eyebrow>Warehouse • Material handling • Automation</Eyebrow>
              <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
                Move more. Handle less.
              </h1>
              <p className="mt-5 text-base leading-relaxed sm:text-lg">
                From autonomous pallet movement to high-bay storage, conveyors and robotic handling,
                PacificGate can connect Australian operations with manufacturers building practical
                warehouse technology.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {miniCards.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-stretch gap-4 rounded-lg border border-border bg-card p-3 shadow-card"
                  >
                    <img
                      width={800}
                      height={600}
                      decoding="async"
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="h-24 w-32 shrink-0 rounded-md object-cover sm:h-28 sm:w-40"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-base font-semibold text-navy">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 lg:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="eyebrow whitespace-nowrap">Typical opportunities</span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {chips.map((chip, i) => (
                <span key={chip} className="flex items-center gap-x-2">
                  <span aria-hidden className="size-1.5 rounded-full bg-teal" />
                  <span className="text-sm font-medium text-navy">{chip}</span>
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
