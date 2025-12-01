import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface DemoRequest {
  id?: string;
  name: string;
  email: string;
  institution: string;
  message?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
