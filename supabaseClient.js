const SUPABASE_URL = 'https://ijiletksbuevkirdkfaw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cuMGIsnCN8v7RGdDQ1Ck5w_xOi5ORHA';

if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
var supabase = window.supabaseClient;
