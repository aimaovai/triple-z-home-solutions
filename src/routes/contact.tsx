import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business, images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | Triple Z Home Solutions Houston" },
      {
        name: "description",
        content:
          "Request a free handyman or remodeling estimate in Houston. Call 915-227-7449 or send project details — we respond within 24 hours.",
      },
      { property: "og:title", content: "Get a Free Quote | Triple Z Home Solutions Houston" },
      { property: "og:description", content: "Free estimates for handyman and remodeling work across Houston." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free estimate"
        subtitle="Send us the details and we'll come back with a straightforward price. Most requests get an answer the same day."
        image={images.serviceFaucet}
        alt="Triple Z Home Solutions installing a new faucet"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <QuoteForm sourcePage="contact" />

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-bold text-navy">Reach us directly</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block font-semibold text-charcoal">Phone</span>
                  <a href={business.phoneHref} className="text-muted-foreground hover:text-accent">
                    {business.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block font-semibold text-charcoal">Email</span>
                  <a href={business.emailHref} className="break-all text-muted-foreground hover:text-accent">
                    {business.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block font-semibold text-charcoal">Service areas</span>
                  <span className="text-muted-foreground">{business.areas.join(", ")}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span className="w-full">
                  <span className="block font-semibold text-charcoal">Hours</span>
                  <span className="mt-1 block space-y-1 text-muted-foreground">
                    {business.hours.map((h) => (
                      <span key={h.days} className="flex justify-between gap-3">
                        <span>{h.days}</span>
                        <span>{h.time}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
            <a
              href={business.phoneHref}
              className="mt-6 block rounded-lg bg-accent px-6 py-3.5 text-center font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Call Now
            </a>
          </div>

          <div className="rounded-2xl bg-navy p-6 text-primary-foreground shadow-card">
            <p className="eyebrow">Response time</p>
            <p className="mt-2 font-display text-2xl font-bold">We respond within 24 hours</p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Urgent repair? Call and we'll tell you honestly whether we can get to you this week.
            </p>
          </div>

          <p className="px-2 text-xs leading-relaxed text-muted-foreground">
            Privacy: the details you send are used only to prepare your estimate and contact you about your project.
            We never sell or share your information.
          </p>
        </div>
      </section>
    </>
  );
}
