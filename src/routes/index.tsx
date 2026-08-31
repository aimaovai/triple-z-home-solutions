import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { business, images, projects, reviews, serviceCards, whyChooseUs } from "@/data/site";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Houston Handyman & Remodeling | Triple Z Home Solutions" },
      {
        name: "description",
        content:
          "Reliable handyman and remodeling services across Houston, Katy, Cypress, Sugar Land, Richmond and Fulshear. 5-star rated with free estimates.",
      },
      { property: "og:title", content: "Houston Handyman & Remodeling | Triple Z Home Solutions" },
      {
        property: "og:description",
        content: "Reliable, skilled, customer-focused home improvement services across the Houston area.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: business.name,
          telephone: business.phone,
          email: business.email,
          areaServed: business.areas,
          address: { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX", addressCountry: "US" },
          sameAs: [business.instagram, business.tiktok],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "82" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={images.heroLivingRoom}
          alt="Triple Z Home Solutions technician greeting a homeowner in Houston"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/35" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow">Serving the greater Houston area</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl md:text-6xl">
              Houston Handyman &amp; Remodeling Experts
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Reliable, skilled, and customer-focused home improvement services for homes and businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-lg bg-accent px-7 py-4 text-center font-bold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="rounded-lg border border-primary-foreground/25 px-7 py-4 text-center font-bold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              {business.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-primary-foreground">{s.value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-primary-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">
            From a loose hinge to a full remodel
          </h2>
          <p className="mt-3 text-muted-foreground">
            One crew for the whole punch list — repairs, upgrades, and the finish work that makes a room feel done.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-charcoal/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/services" className="inline-flex items-center gap-2 font-bold text-navy hover:text-accent">
            See all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow">Recent work</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">Featured projects</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-navy hover:text-accent">
              View the full gallery
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <figure
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">{project.category}</p>
                  <h3 className="mt-1.5 font-bold text-navy">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Why homeowners call us back</p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">Built on doing it right</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="mb-3 h-1 w-10 rounded-full bg-accent" />
              <h3 className="font-bold text-navy">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Reviews</p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground md:text-4xl">
                5.0 stars across 82 reviews
              </h2>
            </div>
            <Link to="/reviews" className="inline-flex items-center gap-2 font-bold text-accent">
              Read all reviews
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Service areas</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">Local to the Houston area</h2>
            <p className="mt-3 text-muted-foreground">
              We work throughout Houston and the surrounding communities. If you're nearby and not listed, just ask.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {business.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-navy"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={images.projectAccentWall}
            alt="Completed remodel project in a Houston home"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </section>

      <CtaBanner
        title="Ready to get it done?"
        body="Send us the details and we'll come back with a straightforward estimate — no pressure, no surprises."
      />
    </>
  );
}
