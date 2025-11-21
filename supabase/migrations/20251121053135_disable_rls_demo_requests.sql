/*
  # Disable RLS for demo_requests table

  1. Security Changes
    - Disable RLS on demo_requests table
    - Remove all RLS policies
    - This allows public submissions without authentication
    
  2. Important Notes
    - Demo requests are public submissions with no sensitive data
    - Anyone can submit demo requests
    - This is safe because we're collecting public information only
*/

ALTER TABLE demo_requests DISABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  DROP POLICY IF EXISTS "Anon users can insert demo requests" ON demo_requests;
  DROP POLICY IF EXISTS "Authenticated users can view all demo requests" ON demo_requests;
  DROP POLICY IF EXISTS "Authenticated users can update demo requests" ON demo_requests;
END $$;