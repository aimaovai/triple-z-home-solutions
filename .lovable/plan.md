# Triple Z Home Solutions — Full Site Overhaul

A complete rebuild of triplezhomesolutions.com as a modern, conversion-focused site, reusing the real photos and copy already on the live site.

## What I found on the current site

- 5 pages: Home, Service packages, Project gallery, About, Contact (long SEO-style URLs).
- Real project photos plus a logo are hosted on the current site's CDN — those can be pulled down and bundled with the new site.
- Several images are generic stock filler; those get replaced by real project photos where available.
- Detailed service write-ups already exist (Home Theater Installation, TV Mounting, Reverse Osmosis, Cabinet & Fixture, Shower & Faucet, Walk-In Closet, Curtain Installation, Light Fixtures, Wall Art & Decor) — all reusable copy.
- Contact info: contact@triplezhomesolutions.com, 915-227-7449, Instagram + TikTok.
- Trust stats present: 150+ jobs, 82 reviews, 5 stars on Thumbtack.
- Note: the live site does not publish full review text — only the star/count badges. The Reviews page will be built with the real badges and a review-card layout that I fill with whatever review text you can export from Thumbtack; until then it uses the stats plus a few short quotes pulled from existing site copy.

## Step 1 — Design direction (before any building)

Three quick visual preference picks (palette, type pairing, layout), then three fully rendered design directions to choose from. Locked constraints from your blueprint: clean white base, deep blue + charcoal, orange/gold CTA accent, rounded corners, soft shadows.

## Step 2 — Asset migration

- Download every real project photo and the logo from the current site into the new project.
- Compress, add descriptive alt text on all of them, render as plain `<img>` so Google can index them.
- Drop stock filler that doesn't represent real work.

## Step 3 — Pages

Clean URLs: `/`, `/services`, `/projects`, `/reviews`, `/about`, `/contact`.

**Home** — full-width hero over the best project photo, headline "Houston Handyman & Remodeling Experts", two CTAs (Get a Quote / View Services); 6-card service grid; featured projects; Why Choose Us (Licensed & Insured, 5-Star Rated, Fast Response, Transparent Pricing, Quality Workmanship); testimonial preview; service areas (Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear); full footer with phone, email, hours, socials, quick links.

**Services** — hero banner, three tiers (Essential Repairs / Custom Upgrades / Full Remodeling) each with bullets and photos, plus the detailed individual service write-ups migrated from the current site. No prices; every card ends in "Request a Free Estimate". FAQ section (free estimates, start times, materials).

**Projects** — hero, category filter (Lighting, Kitchen Upgrades, TV Mounting, Furniture Assembly, Repairs, Custom Builds), project cards with image/title/short description, a before/after slider component, and a closing quote CTA.

**Reviews** — hero, "5-Star Rated" and "Verified Thumbtack Pro" badges, the 150+/82/5.0 stats, review grid, CTA to Projects. Structured so you can paste in real Thumbtack reviews any time.

**About** — hero, owner photo, founding story and mission from existing copy, values, "Meet Your Handyman", testimonials, "Schedule Your Estimate" CTA.

**Contact** — hero, quote form, phone/email/hours, service areas, "We respond within 24 hours", privacy note, tap-to-call button.

## Step 4 — Quote form backend

Enable Lovable Cloud so every quote request is:
- saved to a leads table (name, phone, email, service needed, message, timestamp),
- emailed to the owner immediately,
- confirmed on-screen to the visitor.

Includes spam protection and validation. Email delivery needs an email provider connected — I'll walk you through that when we get there.

## Step 5 — SEO & launch prep

- Unique title, description, and social preview tags per page.
- LocalBusiness + AggregateRating structured data (5.0 stars, 82 reviews) and per-service schema.
- Sitemap, robots, canonical URLs.
- Redirects from the old long URLs (e.g. `/handyman-projects-gallery` → `/projects`) so existing search rankings carry over.
- Mobile pass, speed pass, form test.
- Then: publish and point the Hostinger domain at the new site.

## Technical notes

Built on the project's TanStack Start + React + Tailwind stack, one route file per page, shared header/footer in the root layout. Design tokens (colors, radius, shadows, fonts) defined once in `src/styles.css` so the whole site stays consistent. Images imported as bundled assets for optimization. Quote submissions go through a server function into Lovable Cloud. Old-URL redirects handled at the routing layer.

## Order of work

1. Design directions → you pick one
2. Tokens, layout shell, header/footer
3. Home
4. Services, Projects
5. Reviews, About, Contact + form backend
6. SEO, redirects, mobile/speed pass
7. Publish + domain cutover
