/*
  # Create demo_requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for each demo request
      - `name` (text) - Full name of the person requesting the demo
      - `email` (text) - Email address for contact
      - `institution` (text) - Name of the institution/organization
      - `message` (text, nullable) - Optional message from the requester
      - `created_at` (timestamptz) - Timestamp when the request was created
      - `status` (text) - Status of the demo request (pending, contacted, completed)
      - `updated_at` (timestamptz) - Timestamp when the record was last updated

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for public INSERT access (anyone can submit a demo request)
    - Add policy for authenticated admin users to read all demo requests

  3. Indexes
    - Index on email for faster lookups
    - Index on created_at for sorting by date
    - Index on status for filtering

  4. Important Notes
    - The table allows public submissions without authentication
    - Only authenticated users (admins) can view all requests
    - Email validation should be handled at the application level
    - Status defaults to 'pending' for new requests
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  institution text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert demo requests"
  ON demo_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update demo requests"
  ON demo_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_demo_requests_updated_at'
  ) THEN
    CREATE TRIGGER update_demo_requests_updated_at
      BEFORE UPDATE ON demo_requests
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;