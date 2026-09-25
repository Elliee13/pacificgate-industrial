import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";
import {
  Container,
  CtaBand,
  Eyebrow,
  HeroImage,
  LinkCard,
  Section,
  SectionHeading,
  ButtonLink,
  InfoCard,
} from "@/components/site/primitives";

const title = "PacificGate Industrial — Connecting Global Manufacturers with Australian Business";
const description =
  "Australian market representation for international industrial manufacturers, and a commercial link for Australian businesses seeking specialised machinery and equipment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <Eyebrow>Australian Market Connection</Eyebrow>
              <h1 className="mt-4 text-3xl leading-[1.1] sm:text-5xl">
                Connecting Global Manufacturers with Australian Business
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
                Australian market representation for international industrial manufacturers — and a
                commercial link for Australian businesses seeking specialised machinery, equipment
                and technology.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/australian-businesses">I'm an Australian Business</ButtonLink>
                <ButtonLink to="/manufacturers" variant="secondary">
                  I'm a Manufacturer
                </ButtonLink>
              </div>
            </div>
            <HeroImage
              src={images.sydneyHarbour}
              alt="Sydney harbour beside an automated factory"
              caption="Australia is the market. PacificGate is the commercial link."
            />
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <LinkCard
            to="/australian-businesses"
            eyebrow="For Australian Businesses"
            title="Tell us what you need to improve."
            text="We help identify suitable equipment, technology and international manufacturers."
            image={images.logisticsYard}
            imageAlt="Logistics yard with containers and trucks"
            caption="Logistics yard"
          />
          <LinkCard
            to="/manufacturers"
            eyebrow="For International Manufacturers"
            title="Put an Australian front-end on your business."
            text="Local prospecting, partner search, opportunity qualification and follow-up."
            image={images.palletWrapping}
            imageAlt="Automated pallet wrapping line"
            caption="New machine delivery"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Solutions"
          title="Where we focus"
          intro="Industrial categories where Australian demand and international capability meet."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <LinkCard
            to="/solutions/warehouse-automation"
            eyebrow="Category"
            title="Warehouse & Automation"
            text="Storage systems, conveyors, robotics and autonomous material handling."
            image={images.futuristicWarehouse}
            imageAlt="Automated warehouse interior"
          />
          <LinkCard
            to="/solutions/packaging-processing"
            eyebrow="Category"
            title="Packaging & Processing"
            text="Filling, labelling, wrapping and end-of-line packaging equipment."
            image={images.packagingLine}
            imageAlt="Automated packaging line in a modern factory"
          />
          <LinkCard
            to="/solutions/cnc-fabrication"
            eyebrow="Category"
            title="CNC & Fabrication"
            text="Machining centres, cutting, forming and precision metalwork technology."
            image={images.cncWorkshop}
            imageAlt="Precision CNC machining workshop"
          />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward commercial path"
          intro="From first conversation to a working relationship on the ground in Australia."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <InfoCard
            index={1}
            title="Understand the requirement"
            text="We map the need, the process constraint and the commercial context."
          />
          <InfoCard
            index={2}
            title="Match capability"
            text="We identify manufacturers or buyers with a genuine fit, then qualify the opportunity."
          />
          <InfoCard
            index={3}
            title="Support the relationship"
            text="Local follow-up, coordination and ongoing representation in the Australian market."
          />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
