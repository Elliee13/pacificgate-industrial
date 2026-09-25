import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { images } from "@/lib/images";
import { Container, Eyebrow } from "@/components/site/primitives";

const title = "Contact — PacificGate Industrial";
const description =
  "Start a conversation with PacificGate Industrial — for Australian businesses seeking equipment and international manufacturers developing the Australian market.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const australianSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(40),
  industry: z.string().trim().max(100).optional(),
  state: z.string().trim().max(50).optional(),
  equipment: z.string().trim().max(200).optional(),
  message: z.string().trim().max(2000).optional(),
  botcheck: z.string().max(0).optional(),
});

const manufacturerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  country: z.string().trim().min(1, "Country is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(40),
  whatsapp: z.string().trim().min(1, "WhatsApp is required").max(40),
  website: z.string().trim().max(255).optional(),
  category: z.string().trim().max(200).optional(),
  message: z.string().trim().max(2000).optional(),
  botcheck: z.string().max(0).optional(),
});

type AustralianValues = z.infer<typeof australianSchema>;
type ManufacturerValues = z.infer<typeof manufacturerSchema>;

async function submitToWeb3Forms(subject: string, values: Record<string, string | undefined>) {
  const accessKey = import.meta.env["VITE_WEB3FORMS_KEY"] as string | undefined;
  if (!accessKey) {
    throw new Error("missing-key");
  }
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, subject, ...values }),
  });
  if (!res.ok) throw new Error("submit-failed");
  const data = (await res.json()) as { success?: boolean };
  if (!data.success) throw new Error("submit-failed");
}

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus:border-teal";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy";
const errorClass = "mt-1 text-xs text-red-600";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block">
        <span className={labelClass}>{label}</span>
        {children}
      </label>
      {error ? <p className={errorClass} role="alert">{error}</p> : null}
    </div>
  );
}

function AustralianForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AustralianValues>({ resolver: zodResolver(australianSchema) });

  const onSubmit = async (values: AustralianValues) => {
    try {
      await submitToWeb3Forms("PacificGate enquiry — Australian business", values);
      toast.success("Thanks — we've received your requirement and will be in touch.");
      reset();
    } catch {
      toast.error("Something went wrong sending your message. Please try again.");
    }
  };

  return (
    <form
      id="australian-businesses"
      onSubmit={handleSubmit(onSubmit)}
      className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <Eyebrow>Australian Businesses</Eyebrow>
      <h2 className="mt-2 font-display text-2xl font-bold text-navy">What are you looking for?</h2>
      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name *" error={errors.name?.message}>
            <input className={inputClass} {...register("name")} />
          </Field>
          <Field label="Company *" error={errors.company?.message}>
            <input className={inputClass} {...register("company")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email *" error={errors.email?.message}>
            <input type="email" className={inputClass} {...register("email")} />
          </Field>
          <Field label="Phone *" error={errors.phone?.message}>
            <input className={inputClass} {...register("phone")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Industry" error={errors.industry?.message}>
            <input className={inputClass} {...register("industry")} />
          </Field>
          <Field label="State" error={errors.state?.message}>
            <input className={inputClass} {...register("state")} placeholder="e.g. VIC" />
          </Field>
        </div>
        <Field label="Equipment or technology required" error={errors.equipment?.message}>
          <input className={inputClass} {...register("equipment")} />
        </Field>
        <Field label="Tell us what you are trying to improve" error={errors.message?.message}>
          <textarea rows={4} className={inputClass} {...register("message")} />
        </Field>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          {...register("botcheck")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal/90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Discuss My Requirement"}
        </button>
      </div>
    </form>
  );
}

function ManufacturerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ManufacturerValues>({ resolver: zodResolver(manufacturerSchema) });

  const onSubmit = async (values: ManufacturerValues) => {
    try {
      await submitToWeb3Forms("PacificGate enquiry — International manufacturer", values);
      toast.success("Thanks — we've received your enquiry and will be in touch.");
      reset();
    } catch {
      toast.error("Something went wrong sending your message. Please try again.");
    }
  };

  return (
    <form
      id="manufacturers"
      onSubmit={handleSubmit(onSubmit)}
      className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <Eyebrow>International Manufacturers</Eyebrow>
      <h2 className="mt-2 font-display text-2xl font-bold text-navy">
        Looking to develop Australia?
      </h2>
      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Name *" error={errors.name?.message}>
            <input className={inputClass} {...register("name")} />
          </Field>
          <Field label="Company *" error={errors.company?.message}>
            <input className={inputClass} {...register("company")} />
          </Field>
          <Field label="Country *" error={errors.country?.message}>
            <input className={inputClass} {...register("country")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Email *" error={errors.email?.message}>
            <input type="email" className={inputClass} {...register("email")} />
          </Field>
          <Field label="Phone *" error={errors.phone?.message}>
            <input className={inputClass} {...register("phone")} />
          </Field>
          <Field label="WhatsApp *" error={errors.whatsapp?.message}>
            <input className={inputClass} {...register("whatsapp")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Website" error={errors.website?.message}>
            <input className={inputClass} {...register("website")} />
          </Field>
          <Field label="Product category" error={errors.category?.message}>
            <input className={inputClass} {...register("category")} />
          </Field>
        </div>
        <Field label="What are you looking to achieve in Australia?" error={errors.message?.message}>
          <textarea rows={4} className={inputClass} {...register("message")} />
        </Field>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          {...register("botcheck")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal/90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Discuss the Australian Market"}
        </button>
      </div>
    </form>
  );
}

function Page() {
  const strips = [
    { src: images.warehouseInterior, alt: "Modern warehouse interior" },
    { src: images.palletWrapping, alt: "Automated pallet wrapping line" },
    { src: images.cncWorkshop, alt: "Precision CNC machining workshop" },
    { src: images.cargoTerminal, alt: "Cargo terminal at golden hour" },
  ];

  return (
    <>
      <section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {strips.map((s) => (
              <img
                width={800}
                height={600}
                decoding="async"
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="h-24 w-full rounded-lg object-cover sm:h-32"
                loading="lazy"
              />
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Start a conversation.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you are an Australian business looking for equipment or an international
              manufacturer looking to develop the Australian market, we'd like to hear from you.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <AustralianForm />
            <ManufacturerForm />
          </div>
        </Container>
      </section>
    </>
  );
}
