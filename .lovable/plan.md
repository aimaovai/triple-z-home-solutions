# Add Lisa M.'s 5-star review

Add one new testimonial to the site's review list so it appears on the Reviews page and in the homepage testimonials.

## What gets added

- Name: Lisa M.
- Rating: 5 stars (all cards in this list render as 5 stars)
- Quote: "Triple Z Home Solutions transformed my living room with a stunning accent wall and flawless TV mounting—professional and attentive all the way."

## Technical detail

Append one entry to the `reviews` array in `src/data/site.ts` (the same curated list holding the 14 Thumbtack reviews), with `detail: "Verified Thumbtack review"` to match the surrounding entries. No database change and no component changes — the Reviews page and homepage already map over this array, and the uniform-height card with "Read more" handling applies automatically.

If you'd rather this be stored as a visitor-submitted review in the backend table instead of the curated list, say so and I'll switch approaches.
