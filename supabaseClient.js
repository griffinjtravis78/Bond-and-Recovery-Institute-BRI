// Initialize Supabase client cleanly using window namespace
if (!window.supabaseClient && window.supabase) {
    window.supabaseClient = window.supabase.createClient(
        'https://ijiletksbuevkirdkfaw.supabase.co',
        'sb_publishable_cuMGIsnCN8v7RGdDQ1Ck5w_xOi5ORHA'
    );
}
