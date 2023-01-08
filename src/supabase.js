import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ugdwmxrabvmybuntigbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZHdteHJhYnZteWJ1bnRpZ2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNDExNzcsImV4cCI6MTk4NzgxNzE3N30.yCoN9IQAftZPXxAX1e9FUXn6yWTZlSqVvW-9Iab0fE4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
