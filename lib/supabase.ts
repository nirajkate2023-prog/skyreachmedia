import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get config from env or localStorage if set in admin dashboard
export function getSupabaseConfig(): { url: string; key: string } | null {
  if (typeof window !== 'undefined') {
    const customUrl = localStorage.getItem('skyreach_supabase_url');
    const customKey = localStorage.getItem('skyreach_supabase_key');
    if (customUrl && customKey) {
      return { url: customUrl, key: customKey };
    }
  }

  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (envUrl && envKey && !envUrl.includes('your-project')) {
    return { url: envUrl, key: envKey };
  }

  return null;
}

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const config = getSupabaseConfig();
  if (!config) return null;

  try {
    if (!supabaseInstance) {
      supabaseInstance = createClient(config.url, config.key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      });
    }
    return supabaseInstance;
  } catch (err) {
    console.warn('Supabase initialization failed:', err);
    return null;
  }
}
