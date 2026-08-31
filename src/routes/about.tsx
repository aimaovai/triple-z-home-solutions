import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { business, images, reviews } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Triple Z Home Solutions | Houston Handyman" },
      {
        name: "description",
        content:
          "Triple Z Home Solutions is a Houston handyman and remodeling company serving homeowners, landlords, and small businesses with a true 5-star experience.",
      },
      { property: "og:title", content: "About Triple Z Home Solutions | Houston Handyman" },
      {
        property: "og:description",
        content: "Every home and business deserves reliable, high-quality craftsmanship you can trust.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { title: "Show up", body: "On time, prepared, with the right tools for the job." },
  { title: "Say the price", body: "A clear estimate before work starts. No moving numbers." },
  { title: "Finish clean", body: "Level, sealed, swept. We leave it better than we found it." },
  { title: "Stand behind it", body: "If something isn't right, we come back and make it right." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Craftsmanship you can actually count on"
        subtitle="Based in Houston, serving homeowners, landlords, and small businesses with dependable handyman and remodeling work."
        image={images.projectAccentWall}
        alt="Completed remodeling project by Triple Z Home Solutions"
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <img
              src={images.ownerPortrait}
              alt="The owner of Triple Z Home Solutions"
              className="aspect-square w-full rounded-2xl object-cover shadow-lift"
            />
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="eyebrow">Meet your handyman</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You deal with the same person from first call to final walkthrough. No call center, no rotating
                subcontractors — just the crew that actually does the work, answering the phone.
              </p>
              <a href={business.phoneHref} className="mt-4 inline-block font-bold text-navy hover:text-accent">
                {business.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">
              Every home and business deserves work done right
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                At Triple Z Home Solutions, we believe every home and business deserves reliable, high-quality
                craftsmanship you can trust. Based in Houston, we proudly serve homeowners, landlords, and small
                businesses with dependable handyman and remodeling services tailored to a wide range of needs.
              </p>
              <p>
                We take pride in delivering a true <strong className="text-navy">5-star experience</strong> from start
                to finish. Whether it's adding the perfect finishing touch to a room or transforming an entire space
                into something functional, stylish, and comfortable, our skilled team is committed to excellence with
                precision and care.
              </p>
              <p>
                Every project we take on — big or small — is handled with professionalism, attention to detail, and a
                focus on long-lasting results. Our goal is simple: to provide reliable home and commercial solutions
                that give our clients peace of mind and confidence in the work we deliver.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-sand p-6">
              <p className="eyebrow">Our mission</p>
              <p className="mt-2 font-display text-xl font-bold text-navy">
                Dependable service, transparent pricing, and quality craftsmanship that strengthens our community.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="mb-3 h-1 w-10 rounded-full bg-accent" />
                  <h3 className="font-bold text-navy">{value.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">In their words</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground md:text-4xl">
            What our clients tell us
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <blockquote key={review.quote} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">“{review.quote}”</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {review.name} · {review.detail}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/reviews" className="font-bold text-accent">
              Read all 82 reviews →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Schedule Your Estimate"
        body="Tell us about the project. We'll walk it with you and give you an honest number."
      />
    </>
  );
}
