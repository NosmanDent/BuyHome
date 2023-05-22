import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://goswzawpinffuztlbkbe.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvc3d6YXdwaW5mZnV6dGxia2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTkxMTIsImV4cCI6MTk5NzgzNTExMn0.Jc-8dtAgCuXmD4fjGt1Q09ivff2IURfDkxGwB6T2TLM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
