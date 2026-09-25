import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";
import {
  Container,
  CtaBand,
  CaptionedImage,
  Eyebrow,
  ButtonLink,
} from "@/components/site/primitives";

const title = "For International Manufacturers — PacificGate Industrial";
const description =
  "PacificGate provides local market development and commercial representation for international manufacturers entering Australia — without opening an office or appointing a major distributor.";

export const Route = createFileRoute("/manufacturers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/manufacturers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/manufacturers" }],
  }),
  component: Page,
});

const checklist = [
  "Identify and approach potential Australian customers",
  "Qualify genuine commercial opportunities",
  "Find distributors, dealers and integration partners",
  "Maintain local follow-up and market feedback",
];

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <CaptionedImage
              src={images.cargoTerminal}
              alt="Cargo terminal operating at golden hour"
              caption="Australian market entry"
              priority
              className="lg:order-1"
              imgClassName="h-64 sm:h-80 lg:h-[28rem]"
            />
            <div className="max-w-xl lg:order-2">
              <Eyebrow>For International Manufacturers</Eyebrow>
              <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
                Your Australian commercial presence.
              </h1>
              <p className="mt-5 text-base leading-relaxed sm:text-lg">
                Entering Australia does not necessarily mean opening an office, employing a local
                sales team or immediately appointing a major distributor. PacificGate provides local
                market development and commercial representation.
              </p>

              <ul className="mt-7 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 size-2 shrink-0 rounded-full bg-teal"
                    />
                    <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-slate">
                Your company remains responsible for products, engineering, technical quotations,
                warranty, parts and support. PacificGate focuses on developing the commercial
                opportunity in Australia.
              </p>

              <div className="mt-7">
                <ButtonLink to="/contact#manufacturers">
                  Discuss the Australian Market →
                </ButtonLink>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <img
                  width={800}
                  height={600}
                  decoding="async"
                  src={images.roboticPalletising}
                  alt="Robotic palletising in a modern warehouse"
                  loading="lazy"
                  className="h-32 w-full rounded-lg border border-border object-cover sm:h-40"
                />
                <img
                  width={800}
                  height={600}
                  decoding="async"
                  src={images.autonomousRobot}
                  alt="Autonomous robot in a modern warehouse"
                  loading="lazy"
                  className="h-32 w-full rounded-lg border border-border object-cover sm:h-40"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
