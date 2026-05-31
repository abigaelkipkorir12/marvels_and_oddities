import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://nyveooxltdoxsqgfpcth.supabase.co';
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55dmVvb3hsdGRveHNxZ2ZwY3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMTQ3ODYsImV4cCI6MjA5NTc5MDc4Nn0.SAr2LyLmYVrM9Guuu9vPJYnKR3ldiOiAHHOjPjbXYmQ'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);