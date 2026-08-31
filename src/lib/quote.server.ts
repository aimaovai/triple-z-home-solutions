import { createClient } from "@supabase/supabase-js";

type QuoteInput = {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  sourcePage?: string;
};

export async function submitQuote(input: QuoteInput) {
  const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
  const key =
    process.env["SUPABASE_PUBLISHABLE_KEY"] ??
    process.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ??
    process.env["VITE_SUPABASE_ANON_KEY"];

  if (!url || !key) {
    throw new Error("Backend is not configured");
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("quote_requests").insert({
    name: input.name,
    email: input.email,
    phone: input.phone,
    service: input.service || null,
    message: input.message || null,
    source_page: input.sourcePage || null,
  });

  if (error) {
    console.error("Failed to save quote request", error.message);
    throw new Error("We couldn't save your request. Please call us instead.");
  }

  await notifyOwner(input);

  return { ok: true as const };
}

async function notifyOwner(input: QuoteInput) {
  const apiKey = process.env["RESEND_API_KEY"];
  const to = process.env["QUOTE_NOTIFICATION_EMAIL"] ?? "contact@triplezhomesolutions.com";
  const from = process.env["QUOTE_NOTIFICATION_FROM"];

  if (!apiKey || !from) {
    // Email delivery not configured yet — the lead is still saved in the database.
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.email,
        subject: `New quote request — ${input.name}`,
        text: [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          `Phone: ${input.phone}`,
          `Service: ${input.service || "Not specified"}`,
          `Page: ${input.sourcePage || "Unknown"}`,
          "",
          input.message || "(no message)",
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("Quote notification email failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("Quote notification email error", err);
  }
}
