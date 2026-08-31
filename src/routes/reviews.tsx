import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { BadgeCheck, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ReviewDialog } from "@/components/site/ReviewDialog";
import { business, images, reviews } from "@/data/site";
import { listReviews } from "@/lib/reviews.functions";

const reviewsQueryOptions = queryOptions({
  queryKey: ["site-reviews"],
  queryFn: () => listReviews(),
});

export const Route = createFileRoute("/reviews")({
  loader: ({ context }) => context.queryClient.ensureQueryData(reviewsQueryOptions),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center text-muted-foreground">
      We couldn't load reviews right now. Please refresh the page.
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center text-muted-foreground">Page not found.</div>
  ),
  head: () => ({
    meta: [
      { title: "Customer Reviews | Triple Z Home Solutions Houston" },
      {
        name: "description",
        content:
          "82 reviews and a 5.0 star rating on Thumbtack. Read what Houston homeowners say about Triple Z Home Solutions handyman and remodeling work.",
      },
      { property: "og:title", content: "Customer Reviews | Triple Z Home Solutions Houston" },
      { property: "og:description", content: "5.0 stars across 82 reviews from Houston-area homeowners." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: business.name,
          telephone: business.phone,
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "82", bestRating: "5" },
        }),
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  const { data: submitted = [], refetch } = useQuery(reviewsQueryOptions);

  const allReviews = [
    ...submitted.map((r) => ({
      key: r.id,
      quote: r.quote,
      name: r.name,
      detail: r.detail,
      rating: r.rating,
    })),
    ...reviews.map((r) => ({ key: r.quote, quote: r.quote, name: r.name, detail: r.detail, rating: 5 })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="5.0 stars, 82 reviews, zero drama"
        subtitle="Houston homeowners, landlords, and small businesses keep calling us back. Here's why."
        image={images.projectLighting}
        alt="Interior lighting project completed by Triple Z Home Solutions"
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="flex justify-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <p className="mt-3 font-display text-3xl font-extrabold text-navy">5.0 Rating</p>
            <p className="text-sm text-muted-foreground">Across every reviewed job</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <BadgeCheck className="mx-auto h-9 w-9 text-accent" aria-hidden />
            <p className="mt-3 font-display text-3xl font-extrabold text-navy">Verified Pro</p>
            <p className="text-sm text-muted-foreground">Thumbtack verified professional</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <p className="font-display text-4xl font-extrabold text-navy">150+</p>
            <p className="mt-1 text-sm text-muted-foreground">Projects completed across Houston</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((review) => (
            <blockquote
              key={review.key}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < review.rating ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 text-muted-foreground/40"
                    }
                    aria-hidden
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal">“{review.quote}”</p>
              <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {review.name}
                {review.detail ? ` · ${review.detail}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Worked with us before? <ReviewDialog onSubmitted={() => void refetch()} /> and we'll add it here.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-block rounded-lg border border-input px-6 py-3.5 font-bold text-navy transition-colors hover:border-accent hover:text-accent"
          >
            See Our Work
          </Link>
        </div>
      </section>

      <CtaBanner title="Join the 5-star list" body="Tell us what you need and we'll take it from there." />
    </>
  );
}
