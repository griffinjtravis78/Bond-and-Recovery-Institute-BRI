const SUPABASE_URL = 'https://ijiletksbuevkirdkfaw.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ACTUAL_SUPABASE_ANON_KEY';

if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
var supabase = window.supabaseClient;
