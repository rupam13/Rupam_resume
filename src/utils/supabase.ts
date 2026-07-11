import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are present to prevent app crashes when run without env config
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Graceful helpers for fetching and saving tracking data
export const dbApi = {
  async fetchProgress() {
    if (!supabase) {
      console.warn("⚠️ Supabase not configured. Using local storage / fallback data.");
      return null;
    }

    try {
      // Fetch the single row (we'll use id: 1 for simplicity) from the 'learning_progress' table
      const { data, error } = await supabase
        .from("learning_progress")
        .select("*")
        .eq("id", 1)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          // Row doesn't exist yet, return null so it can fall back to local/static data
          return null;
        }
        console.error("❌ Error fetching from Supabase:", error);
        return null;
      }

      return data;
    } catch (e) {
      console.error("❌ Failed to query database:", e);
      return null;
    }
  },

  async saveProgress(payload: {
    checkedTopics: Record<string, boolean>;
    notes: any[];
    copilotTopics: any[];
    snTopics: any[];
  }) {
    if (!supabase) {
      console.warn("⚠️ Supabase not configured. Changes saved locally only.");
      return false;
    }

    try {
      // Upsert the data for id: 1
      const { error } = await supabase
        .from("learning_progress")
        .upsert({
          id: 1,
          checked_topics: payload.checkedTopics,
          notes: payload.notes,
          copilot_topics: payload.copilotTopics,
          sn_topics: payload.snTopics,
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error("❌ Error upserting to Supabase:", error);
        return false;
      }

      return true;
    } catch (e) {
      console.error("❌ Failed to write to database:", e);
      return false;
    }
  },
};
