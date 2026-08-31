REVOKE SELECT, UPDATE, DELETE ON public.quote_requests FROM anon, authenticated;

DROP POLICY IF EXISTS "No client read access to quote requests" ON public.quote_requests;
CREATE POLICY "No client read access to quote requests"
  ON public.quote_requests
  FOR SELECT
  TO anon, authenticated
  USING (false);