import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";
import {
  Container,
  CtaBand,
  CaptionedImage,
  Eyebrow,
  ButtonLink,
  Section,
} from "@/components/site/primitives";

const title = "For Australian Businesses — PacificGate Industrial";
const description =
  "Tell us what you need to improve. PacificGate helps Australian businesses identify suitable international manufacturers, gather information and coordinate the commercial process.";

export const Route = createFileRoute("/australian-businesses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/australian-businesses" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/australian-businesses" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-3xl">
              <Eyebrow>For Australian Businesses</Eyebrow>
              <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
                Tell us what you need to improve.
              </h1>
              <p className="mt-5 text-base leading-relaxed sm:text-lg">
                You don't need to know which manufacturer to contact. Tell us what your business
                needs and PacificGate can help identify suitable international manufacturers,
                gather information and coordinate the commercial process.
              </p>
              <div className="mt-7">
                <ButtonLink to="/contact#australian-businesses">
                  Discuss My Requirement →
                </ButtonLink>
              </div>
            </div>
            <CaptionedImage
              src={images.logisticsYard}
              alt="Logistics yard with new machine delivery"
              caption="New machine delivery"
              priority
              imgClassName="h-64 sm:h-80 lg:h-96"
            />
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            image={images.cncWorkshop}
            alt="CNC machining workshop"
            title="Industrial machinery"
            text="CNC, laser, fabrication and specialised production equipment."
          />
          <ServiceCard
            image={images.warehouseInterior}
            alt="Warehouse interior with automation"
            title="Warehouse & automation"
            text="Material movement, AGVs, storage, conveyors and robotic handling."
          />
          <ServiceCard
            image={images.palletWrapping}
            alt="Automated pallet wrapping line"
            title="Packaging & processing"
            text="Wrapping, filling, labelling, palletising and production-line systems."
          />
        </div>
      </Section>

      <section className="py-16 lg:py-24">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-xl leading-snug text-teal sm:text-2xl">
            You bring us the requirement. We help find the right manufacturer and solution.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function ServiceCard({
  image,
  alt,
  title,
  text,
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card sm:flex-row md:flex-col">
      <img
        width={800}
        height={600}
        decoding="async"
        src={image}
        alt={alt}
        loading="lazy"
        className="h-44 w-full object-cover sm:h-full sm:w-40 md:h-44 md:w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
