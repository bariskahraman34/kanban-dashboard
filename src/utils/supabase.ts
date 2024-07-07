import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jghzvgdtpkjghygqyifm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnaHp2Z2R0cGtqZ2h5Z3F5aWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NTEyNjIsImV4cCI6MjAzNTUyNzI2Mn0.VUXMegCEGlkOKe065mPXrO6J0pP_ClVkQ2p3yUGXrBU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase