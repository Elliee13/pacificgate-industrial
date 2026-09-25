import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";
import { ButtonLink, CaptionedImage, Container, CtaBand, Eyebrow } from "@/components/site/primitives";

const title = "Packaging & Processing — PacificGate Industrial";
const description =
  "Wrapping, filling, sealing, labelling, conveying, case packing and palletising equipment from international manufacturers, represented in Australia.";

export const Route = createFileRoute("/solutions/packaging-processing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/solutions/packaging-processing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/packaging-processing" }],
  }),
  component: Page,
});

const applications = [
  "Filling & sealing",
  "Labelling",
  "Cartoning",
  "Wrapping",
  "Case packing",
  "Palletising",
];

function Page() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <Eyebrow>Packaging & Processing</Eyebrow>
              <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
                From product to pallet.
              </h1>
              <p className="mt-5 text-base leading-relaxed sm:text-lg">
                Packaging and processing equipment can deliver an immediate, visible productivity
                gain. We can help identify international manufacturers for wrapping, filling,
                sealing, labelling, conveying, case packing and palletising.
              </p>
              <div className="mt-8">
                <ButtonLink to="/contact#australian-businesses">Discuss Your Line →</ButtonLink>
              </div>
            </div>
            <CaptionedImage
              src={images.palletWrapping}
              alt="Automated pallet wrapping line"
              caption="Pallet wrapping"
              priority
              imgClassName="h-64 sm:h-80 lg:h-[28rem]"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <CaptionedImage
              src={images.roboticPackaging}
              alt="High-tech robotic packaging line"
              caption="Packaging automation"
              imgClassName="h-44 w-full sm:h-52"
            />
            <CaptionedImage
              src={images.packagingLine}
              alt="Automated packaging line in a modern factory"
              caption="Production line"
              imgClassName="h-44 w-full sm:h-52"
            />
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <Eyebrow>Common applications</Eyebrow>
              <ul className="mt-4 flex flex-col gap-2.5">
                {applications.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                    <span aria-hidden className="size-1.5 rounded-full bg-teal" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
