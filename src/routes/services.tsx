import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { faqs, images, tiers } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Handyman & Remodeling Services in Houston | Triple Z" },
      {
        name: "description",
        content:
          "Essential repairs, custom upgrades, and full remodeling in Houston: TV mounting, lighting, closets, cabinets, faucets, water filtration and more. Free estimates.",
      },
      { property: "og:title", content: "Handyman & Remodeling Services in Houston | Triple Z" },
      {
        property: "og:description",
        content: "Repairs, upgrades, and full remodels handled by one trusted Houston crew.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Repairs, upgrades, and full remodels"
        subtitle="Three ways to work with us — from a single afternoon fix to a room rebuilt from the studs out."
        image={images.serviceCabinets}
        alt="Cabinet and fixture installation by Triple Z Home Solutions"
      />

      <section className="mx-auto max-w-6xl space-y-20 px-5 py-20">
        {tiers.map((tier, index) => (
          <div key={tier.name} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="eyebrow">Package {index + 1}</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">{tier.name}</h2>
              <p className="mt-3 text-muted-foreground">{tier.summary}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-charcoal/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-7 inline-block rounded-lg bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                Request an Estimate
              </Link>
            </div>
            <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              {tier.images.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full rounded-2xl object-cover shadow-card ${
                    i === 0 ? "aspect-[3/4]" : "mt-8 aspect-[3/4]"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">Questions we hear a lot</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-6">
              <summary className="cursor-pointer list-none font-bold text-navy marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
