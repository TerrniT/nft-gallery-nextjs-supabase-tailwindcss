import { createClient } from "@supabase/supabase-js";
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ""
);
