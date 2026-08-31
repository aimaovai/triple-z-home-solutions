CREATE TABLE public.site_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  detail text,
  rating smallint NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  quote text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.site_reviews TO anon;
GRANT SELECT, INSERT ON public.site_reviews TO authenticated;
GRANT ALL ON public.site_reviews TO service_role;
ALTER TABLE public.site_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read reviews" ON public.site_reviews FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can submit a review" ON public.site_reviews FOR INSERT TO anon, authenticated WITH CHECK (true);