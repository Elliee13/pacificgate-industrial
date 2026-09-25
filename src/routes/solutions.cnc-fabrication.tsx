import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";
import { CaptionedImage, Container, CtaBand, Eyebrow } from "@/components/site/primitives";

const title = "CNC & Fabrication — PacificGate Industrial";
const description =
  "PacificGate connects Australian manufacturers and workshops with international suppliers of CNC machining centres, laser cutting systems, fabrication machinery and specialised production equipment.";

export const Route = createFileRoute("/solutions/cnc-fabrication")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/solutions/cnc-fabrication" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/cnc-fabrication" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <CaptionedImage
              src={images.cncWorkshop}
              alt="Precision CNC machining workshop"
              caption="CNC • Laser • Fabrication"
              priority
              imgClassName="h-64 sm:h-80 lg:h-[28rem]"
            />
            <div className="max-w-xl">
              <Eyebrow>CNC & Fabrication</Eyebrow>
              <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
                Precision equipment for Australian industry.
              </h1>
              <p className="mt-5 text-base leading-relaxed sm:text-lg">
                PacificGate can connect Australian manufacturers and workshops with international
                suppliers of CNC machining centres, laser cutting systems, fabrication machinery
                and specialised production equipment.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <CaptionedImage
                  src={images.cncMilling}
                  alt="Precision CNC milling with coolant spray"
                  caption="Precision machining"
                  imgClassName="h-32 w-full sm:h-40"
                />
                <CaptionedImage
                  src={images.logisticsYard}
                  alt="Machine delivery in a logistics yard"
                  caption="Delivery"
                  imgClassName="h-32 w-full sm:h-40"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-12">
        <Container>
          <p className="text-center text-lg font-semibold text-teal sm:text-xl">
            From initial requirement through manufacturer introduction and commercial follow-up.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
