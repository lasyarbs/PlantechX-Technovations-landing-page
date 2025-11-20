/*
  # Fix RLS policies for demo_requests table

  1. Security Changes
    - Drop existing policies that are too restrictive
    - Create new policy that allows anonymous users (anon role) to insert demo requests
    - Keep authenticated users able to read and manage requests (for admin dashboard)

  2. Important Notes
    - Anon users (unauthenticated) can now submit demo requests
    - The INSERT policy uses WITH CHECK (true) to allow all inserts
    - Only authenticated users (admins) can view all requests
    - This is secure because demo requests are public submissions with no sensitive data
*/

DO $$
BEGIN
  DROP POLICY IF EXISTS "Anyone can insert demo requests" ON demo_requests;
  DROP POLICY IF EXISTS "Authenticated users can view all demo requests" ON demo_requests;
  DROP POLICY IF EXISTS "Authenticated users can update demo requests" ON demo_requests;
END $$;

CREATE POLICY "Anon users can insert demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
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