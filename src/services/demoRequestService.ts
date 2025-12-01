import { supabase, DemoRequest } from '../lib/supabase';

export const submitDemoRequest = async (data: DemoRequest) => {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

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

  if (result) {
    try {
      await sendEmailNotification(result);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
    }
  }

  return result;
};

const sendEmailNotification = async (demoRequest: any) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const response = await fetch(
    `${supabaseUrl}/functions/v1/send-demo-email`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify({
        id: demoRequest.id,
        name: demoRequest.name,
        email: demoRequest.email,
        institution: demoRequest.institution,
        message: demoRequest.message,
        created_at: demoRequest.created_at,
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to send email notification');
  }
};

export const getAllDemoRequests = async () => {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

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
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

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
