import { supabase, DemoRequest } from '../lib/supabase';

export const submitDemoRequest = async (data: DemoRequest) => {
  const { data: result, error } = await supabase
    .from('demo_requests')
    .insert([
      {
        name: data.name,
        email: data.email,
        institution: data.institution,
        message: data.message || null,
        status: 'pending'
      }
    ])
    .select()
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return result;
};

export const getAllDemoRequests = async () => {
  const { data, error } = await supabase
    .from('demo_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateDemoRequestStatus = async (id: string, status: string) => {
  const { data, error } = await supabase
    .from('demo_requests')
    .update({ status })
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
