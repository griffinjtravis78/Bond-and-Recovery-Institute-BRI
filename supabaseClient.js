import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Bond & Recovery Institute (BRI) - Supabase Production Connection
const SUPABASE_URL = 'https://ijiletksbuevkirdkfaw.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_cuMGIsnCN8v7RGdDQ1Ck5w_xOi5ORHA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)