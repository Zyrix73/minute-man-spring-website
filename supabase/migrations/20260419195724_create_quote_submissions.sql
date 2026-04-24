/*
  # Create Quote Submissions Table

  ## Purpose
  Stores quote requests submitted through the Minuteman Spring website contact/quote form.

  ## New Tables
  - `quote_submissions`
    - `id` (uuid, primary key)
    - `created_at` (timestamp)
    - `first_name` (text) - Requester's first name
    - `last_name` (text) - Requester's last name
    - `company` (text) - Company name
    - `email` (text) - Business email address
    - `phone` (text, optional) - Contact phone number
    - `industry` (text, optional) - Industry sector
    - `spring_type` (text, optional) - Type of spring needed
    - `quantity` (text, optional) - Estimated quantity
    - `message` (text) - Project details and requirements
    - `status` (text) - Processing status: 'new', 'in_review', 'quoted', 'closed'

  ## Security
  - RLS enabled
  - Public users can INSERT (submit quotes)
  - No public SELECT (submissions are internal only)
*/

CREATE TABLE IF NOT EXISTS quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  first_name text NOT NULL DEFAULT '',
  last_name text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text DEFAULT '',
  industry text DEFAULT '',
  spring_type text DEFAULT '',
  quantity text DEFAULT '',
  message text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON quote_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
