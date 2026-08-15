/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `company` (text) — submitter's company
  - `industry` (text) — which industry they are interested in
  - `message` (text, not null) — the inquiry message
  - `status` (text, default 'new') — tracking status for the team
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth public website. The contact form is submitted anonymously.
- Allow anon + authenticated INSERT only — the public can submit forms but cannot read or modify them.
- No SELECT, UPDATE, or DELETE policies for anon/authenticated — only internal/service-role access can read and manage submissions.

3. Notes
- The anon-key client inserts new rows (form submissions). Reading/managing submissions is done through the Supabase dashboard or service-role key, not from the frontend.
- No user_id column — this is a single-tenant public contact form, not a multi-user app.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  industry text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
