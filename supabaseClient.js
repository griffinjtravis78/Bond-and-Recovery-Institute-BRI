// Initialize Supabase client safely
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Only create the client if it hasn't been initialized yet
if (typeof supabase === 'undefined') {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    var supabase = window.supabaseClient;
}
