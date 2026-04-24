/*
  # Fix RLS policy for quote_submissions

  ## Problem
  The existing INSERT policy uses `WITH CHECK (true)` which is effectively
  no restriction at all, bypassing the intent of RLS.

  ## Fix
  Drop the always-true policy and replace it with one that validates the
  required fields (first_name, last_name, company, email, message) are
  non-empty strings. This allows the public quote form to function while
  ensuring submissions contain at minimum the required data.

  ## Security Changes
  - Removed: `Anyone can submit a quote request` policy (WITH CHECK (true))
  - Added: `Public can submit quote with required fields` policy that enforces
    non-empty values for first_name, last_name, company, email, and message
*/

DROP POLICY IF EXISTS "Anyone can submit a quote request" ON public.quote_submissions;

CREATE POLICY "Public can submit quote with required fields"
  ON public.quote_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    first_name IS NOT NULL AND first_name <> '' AND
    last_name  IS NOT NULL AND last_name  <> '' AND
    company    IS NOT NULL AND company    <> '' AND
    email      IS NOT NULL AND email      <> '' AND
    message    IS NOT NULL AND message    <> ''
  );
