import { createFileRoute } from "@tanstack/react-router";
import { Compass, UserCheck, Search, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { images } from "@/lib/images";
import { CaptionedImage, Container, CtaBand, Eyebrow } from "@/components/site/primitives";

const title = "About — PacificGate Industrial";
const description =
  "International capability with Australian commercial understanding. PacificGate bridges the gap between overseas manufacturers and the Australian market.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const points: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Compass,
    title: "Australian Market Knowledge",
    text: "How Australian businesses buy, communicate and make commercial decisions.",
  },
  {
    icon: UserCheck,
    title: "Local Representation",
    text: "Someone working in the Australian market rather than relying entirely on overseas communication.",
  },
  {
    icon: Search,
    title: "Direct Market Development",
    text: "Active prospecting and opportunity development — not simply listing products and waiting.",
  },
  {
    icon: Layers,
    title: "Clear Roles",
    text: "PacificGate handles the commercial front-end; manufacturers remain responsible for engineering and technical support.",
  },
];

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Text left */}
            <div className="max-w-xl">
              <Eyebrow>Why PacificGate</Eyebrow>
              <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
                International capability. Australian commercial understanding.
              </h1>
              <p className="mt-5 text-base leading-relaxed sm:text-lg">
                Doing business across different countries can be difficult. Time zones,
                communication, market knowledge and finding the right people can slow otherwise good
                opportunities. PacificGate helps bridge that gap.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {points.map(({ icon: Icon, title: pt, text }) => (
                  <div key={pt} className="flex gap-3.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal text-teal-foreground">
                      <Icon aria-hidden className="size-4.5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-navy">{pt}</h3>
                      <p className="mt-1 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collage right */}
            <div className="grid gap-4">
              <CaptionedImage
                src={images.futuristicWarehouse}
                alt="Futuristic automated warehouse interior"
                caption="Industrial technology"
                priority
                imgClassName="h-48 w-full sm:h-64"
              />
              <div className="grid grid-cols-2 gap-4">
                <CaptionedImage
                  src={images.cargoTerminal}
                  alt="Golden hour cargo terminal operation"
                  caption="Global supply"
                  imgClassName="h-32 w-full sm:h-44"
                />
                <CaptionedImage
                  src={images.logisticsYard}
                  alt="Logistics yard with machine delivery"
                  caption="Local commercial link"
                  imgClassName="h-32 w-full sm:h-44"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-12">
        <Container>
          <p className="text-center text-lg font-semibold text-teal sm:text-xl">
            Commercial first. Clear communication. Long-term relationships.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
