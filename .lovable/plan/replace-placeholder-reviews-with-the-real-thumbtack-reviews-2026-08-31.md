# Replace placeholder reviews with the real Thumbtack reviews

I pulled the testimonials section from the live site's gallery page. There are 14 real reviews, all 5 stars, 9 of them marked "(Verified)".

## What changes

Replace the 6 generic placeholder testimonials in the site content file with these 14 real ones, keeping name, 5-star rating, and the exact review text:

1. Malar J. (Verified) — fan, RO, and light bulb installation
2. Lisa A. (Verified) — ceiling fans, cabinet hardware, water filtration, surround sound, closet shelves
3. Scott T. (Verified) — multiple ceiling fan installs
4. Camilla T. (Verified) — two chandeliers replaced
5. Daymon M. (Verified) — general praise, will reuse
6. Michael W. (Verified) — came out despite bad weather
7. Brittany M. (Verified) — faucet, alkaline filter, drawer, front door
8. Taylor L. — office furniture assembly
9. Queenbee O. — bedroom TV mounting
10. Kemi A. — overall experience and professionalism
11. Sean S. — home theater knowledge
12. Jay I. — repairs and installations, affordability
13. Olivia L. (Verified) — furniture assembly
14. Chase J. (Verified) — portrait hung in a staircase

## Details

- Review text stays verbatim from the live site; only typographic quotes/apostrophes are normalized.
- Each card keeps the existing 5-star display. The sub-label under the name becomes "Verified Thumbtack review" for the 9 verified ones and "Thumbtack review" for the rest, replacing the invented "Service · City" labels (the live site doesn't publish those).
- The Reviews page keeps its current layout, the 5.0 / 82-review stats, the "Add your review" dialog, and visitor-submitted reviews still appear above these.
- Homepage testimonials (which read from the same list) automatically pick up the real reviews too.

## Technical

- Edit the `reviews` array in `src/data/site.ts` (type `Review = { quote, name, detail }`) — no schema or component changes needed.
