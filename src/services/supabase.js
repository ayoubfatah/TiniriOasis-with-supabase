import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://abpbmrevqhrumbygedav.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicGJtcmV2cWhydW1ieWdlZGF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NDAzOTYsImV4cCI6MjAzMDMxNjM5Nn0.vMKaPko_yLU5SdhCcYmQanwOAdU0hLXXIWCJPPglUQY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
