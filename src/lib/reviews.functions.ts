import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().trim().min(2).max(80),
  detail: z.string().trim().max(120).optional().default(""),
  rating: z.coerce.number().int().min(1).max(5).default(5),
  quote: z.string().trim().min(10).max(1000),
  // Honeypot: real users never fill this.
  company: z.string().max(200).optional().default(""),
});

export const listReviews = createServerFn({ method: "GET" }).handler(async () => {
  const { fetchReviews } = await import("./reviews.server");
  return fetchReviews();
});

export const addReview = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => reviewSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) {
      return null;
    }
    const { insertReview } = await import("./reviews.server");
    return insertReview({
      name: data.name,
      detail: data.detail,
      rating: data.rating,
      quote: data.quote,
    });
  });
