import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(40),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
  sourcePage: z.string().trim().max(120).optional().default(""),
  // Honeypot: real users never fill this.
  company: z.string().max(200).optional().default(""),
});

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) {
      return { ok: true as const };
    }

    const { submitQuote } = await import("./quote.server");
    return submitQuote({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      sourcePage: data.sourcePage,
    });
  });
