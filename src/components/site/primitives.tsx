import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <section
      className={cn(
        "py-16 lg:py-24",
        tone === "surface" && "bg-surface border-y border-border",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-5 text-base leading-relaxed sm:text-lg">{intro}</p> : null}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-2xl leading-tight sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 leading-relaxed">{intro}</p> : null}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        buttonBase,
        variant === "primary"
          ? "bg-teal text-teal-foreground hover:bg-teal/90"
          : "border border-navy bg-background text-navy hover:bg-surface",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function CaptionedImage({
  src,
  alt,
  caption,
  priority = false,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <figure className={cn("relative overflow-hidden rounded-lg border border-border", className)}>
      <img
        src={src}
        alt={alt}
        width={1200}
        height={800}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {caption ? (
        <figcaption className="absolute bottom-3 left-3 rounded-md bg-navy/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function HeroImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border">
      <img src={src} alt={alt} width={1200} height={800} fetchPriority="high" className="h-64 w-full object-cover sm:h-80 lg:h-[26rem]" />
      <figcaption className="bg-navy px-5 py-4 text-sm font-medium text-navy-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export function LinkCard({
  to,
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  caption,
}: {
  to: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  caption?: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-colors hover:border-teal"
    >
      <div className="relative">
        <img src={image} alt={imageAlt} width={800} height={600} decoding="async" loading="lazy" className="h-52 w-full object-cover" />
        {caption ? (
          <span className="absolute bottom-3 left-3 rounded-md bg-navy/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-foreground">
            {caption}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-3 text-xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{text}</p>
        <span className="mt-5 text-sm font-semibold text-teal group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

export function InfoCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index?: number;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card">
      {index !== undefined ? (
        <span className="eyebrow">Step {String(index).padStart(2, "0")}</span>
      ) : null}
      <h3 className="mt-2 text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-navy py-14">
      <Container>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-3 text-2xl text-navy-foreground sm:text-3xl">
              Tell us what you need, or what you make.
            </h2>
          </div>
          <ButtonLink to="/contact">Get in Touch →</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
