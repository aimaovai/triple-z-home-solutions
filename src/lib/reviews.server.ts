import { createClient } from "@supabase/supabase-js";

export type PublicReview = {
  id: string;
  name: string;
  detail: string;
  rating: number;
  quote: string;
  created_at: string;
};

function client() {
  const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
  const key =
    process.env["SUPABASE_PUBLISHABLE_KEY"] ??
    process.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ??
    process.env["VITE_SUPABASE_ANON_KEY"];

  if (!url || !key) {
    throw new Error("Backend is not configured");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function fetchReviews(): Promise<PublicReview[]> {
  const { data, error } = await client()
    .from("site_reviews")
    .select("id, name, detail, rating, quote, created_at")
    .order("created_at", { ascending: false })
    .limit(60);

  if (error) {
    console.error("Failed to load reviews", error.message);
    return [];
  }

  return (data ?? []).map((row) => ({
    id: String(row.id),
    name: String(row.name),
    detail: row.detail ? String(row.detail) : "",
    rating: Number(row.rating ?? 5),
    quote: String(row.quote),
    created_at: String(row.created_at),
  }));
}

export async function insertReview(input: {
  name: string;
  detail: string;
  rating: number;
  quote: string;
}): Promise<PublicReview> {
  const { data, error } = await client()
    .from("site_reviews")
    .insert({
      name: input.name,
      detail: input.detail || null,
      rating: input.rating,
      quote: input.quote,
    })
    .select("id, name, detail, rating, quote, created_at")
    .single();

  if (error || !data) {
    console.error("Failed to save review", error?.message);
    throw new Error("We couldn't save your review. Please try again.");
  }

  return {
    id: String(data.id),
    name: String(data.name),
    detail: data.detail ? String(data.detail) : "",
    rating: Number(data.rating ?? 5),
    quote: String(data.quote),
    created_at: String(data.created_at),
  };
}
