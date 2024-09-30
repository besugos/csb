import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("records").select().order('created_at', { ascending: false });
  return {
    records: data ?? [],
  };
}