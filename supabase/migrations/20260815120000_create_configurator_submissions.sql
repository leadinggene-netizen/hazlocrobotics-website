/*
# Create configurator_submissions table

1. New Tables
- `configurator_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `company` (text) — submitter's company
  - `industry` (text) — selected industry
  - `hazard_classification` (text) — selected area classification
  - `terrain` (text) — selected terrain / mobility need
  - `functions_needed` (text) — comma-separated selected sensor/function priorities
  - `recommended_products` (text) — comma-separated slugs of the robots the configurator recommended
  - `status` (text, default 'new') — tracking status for the team
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `configurator_submissions`.
- This is a no-auth public website. The configurator is a lead-qualification tool,
  not a real ordering system — every submission still needs a specialist to follow
  up and scope an actual deployment.
- Allow anon + authenticated INSERT only — the public can submit the configurator,
  but cannot read or modify submissions.
- No SELECT, UPDATE, or DELETE policies for anon/authenticated — only internal/
  service-role access can read and manage submissions, same as contact_submissions.

3. Notes
- The anon-key client inserts new rows. Reading/managing submissions is done
  through the Supabase dashboard or service-role key, not from the frontend.
- No user_id column — single-tenant public tool, not a multi-user app.
*/

CREATE TABLE IF NOT EXISTS configurator_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  industry text,
  hazard_classification text,
  terrain text,
  functions_needed text,
  recommended_products text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE configurator_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_configurator_submissions" ON configurator_submissions;
CREATE POLICY "anon_insert_configurator_submissions"
ON configurator_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
