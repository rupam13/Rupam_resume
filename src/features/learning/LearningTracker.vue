<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Layout from "../../components/Layout.vue";
import Button from "../../components/Button.vue";
import { dbApi, isSupabaseConfigured } from "../../utils/supabase";

interface Topic {
  id: string;
  title: string;
}

interface Note {
  id: string;
  track: "Copilot Studio" | "ServiceNow";
  content: string;
  timestamp: string;
}

const defaultCopilotTopics: Topic[] = [
  { id: "cs-1", title: "Introduction to Copilot Studio & Conversational Design" },
  { id: "cs-2", title: "Topics, Triggers, & Dialog Management (Entities/Variables)" },
  { id: "cs-3", title: "Generative Answers & RAG (Uploading documents/websites)" },
  { id: "cs-4", title: "Actions & Power Automate Flows (Integrating backend APIs)" },
  { id: "cs-5", title: "Custom Connectors & Microsoft Dataverse integration" },
  { id: "cs-6", title: "Analytics, Sentiment Tracking, & Agent Publishing" },
];

const defaultSnTopics: Topic[] = [
  { id: "sn-1", title: "ServiceNow Platform Basics & UI Customization" },
  { id: "sn-2", title: "Client Scripts & UI Policies (Client-side logic)" },
  { id: "sn-3", title: "Business Rules & Script Includes (Server-side logic)" },
  { id: "sn-4", title: "Flow Designer & Integration Hub (Workflow Automation)" },
  { id: "sn-5", title: "Service Portal Customization (Widgets, HTML/CSS/Angular)" },
  { id: "sn-6", title: "ServiceNow APIs (REST API Explorer, Scripted REST APIs)" },
];

const copilotTopics = ref<Topic[]>([...defaultCopilotTopics]);
const snTopics = ref<Topic[]>([...defaultSnTopics]);
const newTopicTitle = ref("");

const checkedTopics = ref<Record<string, boolean>>({});
const notes = ref<Note[]>([]);
const newNoteContent = ref("");
const selectedTrack = ref<"Copilot Studio" | "ServiceNow">("Copilot Studio");
const activeTrack = ref<"Copilot Studio" | "ServiceNow">("Copilot Studio");

// real-time sync status
const syncStatus = ref<"synced" | "saving" | "offline" | "failed">("synced");

const filteredNotes = computed(() => {
  return notes.value.filter((n) => n.track === activeTrack.value);
});

// Auto-sync function to database & local storage on every change
const triggerSync = async () => {
  if (typeof window !== "undefined") {
    // 1. Write local cache backup
    localStorage.setItem("learning_checked_topics", JSON.stringify(checkedTopics.value));
    localStorage.setItem("learning_notes", JSON.stringify(notes.value));
    localStorage.setItem("learning_copilot_topics", JSON.stringify(copilotTopics.value));
    localStorage.setItem("learning_sn_topics", JSON.stringify(snTopics.value));
  }

  // 2. Write to Supabase Cloud Database (if configured)
  if (isSupabaseConfigured) {
    syncStatus.value = "saving";
    const success = await dbApi.saveProgress({
      checkedTopics: checkedTopics.value,
      notes: notes.value,
      copilotTopics: copilotTopics.value,
      snTopics: snTopics.value,
    });

    if (success) {
      syncStatus.value = "synced";
    } else {
      syncStatus.value = "failed";
    }
  } else {
    syncStatus.value = "offline";
  }
};

// Load remote public/data/learning.json & merge with local storage drafts
onMounted(async () => {
  if (typeof window !== "undefined") {
    syncStatus.value = isSupabaseConfigured ? "saving" : "offline";

    // 1. Try to load from Supabase Cloud Database first (real-time sync)
    if (isSupabaseConfigured) {
      try {
        const dbData = await dbApi.fetchProgress();
        if (dbData) {
          checkedTopics.value = dbData.checked_topics || {};
          notes.value = dbData.notes || [];
          copilotTopics.value = dbData.copilot_topics || [...defaultCopilotTopics];
          snTopics.value = dbData.sn_topics || [...defaultSnTopics];

          // Save copy locally
          localStorage.setItem("learning_checked_topics", JSON.stringify(checkedTopics.value));
          localStorage.setItem("learning_notes", JSON.stringify(notes.value));
          localStorage.setItem("learning_copilot_topics", JSON.stringify(copilotTopics.value));
          localStorage.setItem("learning_sn_topics", JSON.stringify(snTopics.value));
          syncStatus.value = "synced";
          return;
        }
      } catch (e) {
        console.warn("Supabase fetch failed, falling back to local/static data:", e);
        syncStatus.value = "failed";
      }
    }

    // 2. Fallback to Local Storage
    const savedChecked = localStorage.getItem("learning_checked_topics");
    if (savedChecked) {
      checkedTopics.value = JSON.parse(savedChecked);
    }

    const savedNotes = localStorage.getItem("learning_notes");
    if (savedNotes) {
      notes.value = JSON.parse(savedNotes);
    }

    const savedCopilotTopics = localStorage.getItem("learning_copilot_topics");
    if (savedCopilotTopics) {
      copilotTopics.value = JSON.parse(savedCopilotTopics);
    }

    const savedSnTopics = localStorage.getItem("learning_sn_topics");
    if (savedSnTopics) {
      snTopics.value = JSON.parse(savedSnTopics);
    }

    // 3. Fallback to committed static files in public directory
    const baseUrl = import.meta.env.BASE_URL || "/";
    const dataUrl = `${baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"}data/learning.json`;
    
    try {
      const response = await fetch(dataUrl);
      if (response.ok) {
        const remoteData = await response.json();
        
        // Merge checked topics (giving local overrides priority)
        if (remoteData.checkedTopics) {
          checkedTopics.value = { ...remoteData.checkedTopics, ...checkedTopics.value };
        }
        
        // Merge notes (deduplicating by ID)
        if (remoteData.notes) {
          const localNotes = notes.value.length ? notes.value : [];
          const remoteNotes = remoteData.notes as Note[];
          const allNotes = [...localNotes];
          
          remoteNotes.forEach((rn) => {
            if (!allNotes.some((ln) => ln.id === rn.id)) {
              allNotes.push(rn);
            }
          });
          
          // Sort by ID descending
          allNotes.sort((a, b) => b.id.localeCompare(a.id));
          notes.value = allNotes;
        }

        // Merge custom topics
        if (remoteData.copilotTopics) {
          remoteData.copilotTopics.forEach((rt: Topic) => {
            if (!copilotTopics.value.some((lt) => lt.id === rt.id)) {
              copilotTopics.value.push(rt);
            }
          });
        }
        if (remoteData.snTopics) {
          remoteData.snTopics.forEach((rt: Topic) => {
            if (!snTopics.value.some((lt) => lt.id === rt.id)) {
              snTopics.value.push(rt);
            }
          });
        }
      }
    } catch (e) {
      console.warn("Failed to load remote learning tracker file:", e);
    }
  }
});

// Update state and trigger automatic sync
const toggleTopic = (id: string) => {
  checkedTopics.value[id] = !checkedTopics.value[id];
  triggerSync();
};

// Add new custom topic list item and trigger sync
const addTopic = () => {
  if (!newTopicTitle.value.trim()) return;

  const newTopic: Topic = {
    id: `${activeTrack.value === "Copilot Studio" ? "cs" : "sn"}-custom-${Date.now()}`,
    title: newTopicTitle.value.trim(),
  };

  if (activeTrack.value === "Copilot Studio") {
    copilotTopics.value.push(newTopic);
  } else {
    snTopics.value.push(newTopic);
  }

  newTopicTitle.value = "";
  triggerSync();
};

// Delete custom topic and trigger sync
const deleteTopic = (id: string, event: Event) => {
  event.stopPropagation(); // Avoid checkbox click action
  if (activeTrack.value === "Copilot Studio") {
    copilotTopics.value = copilotTopics.value.filter((t) => t.id !== id);
  } else {
    snTopics.value = snTopics.value.filter((t) => t.id !== id);
  }
  delete checkedTopics.value[id];
  triggerSync();
};

const copilotProgress = computed(() => {
  if (copilotTopics.value.length === 0) return 0;
  const covered = copilotTopics.value.filter((t) => checkedTopics.value[t.id]).length;
  return Math.round((covered / copilotTopics.value.length) * 100);
});

const snProgress = computed(() => {
  if (snTopics.value.length === 0) return 0;
  const covered = snTopics.value.filter((t) => checkedTopics.value[t.id]).length;
  return Math.round((covered / snTopics.value.length) * 100);
});

// Add new timeline note and trigger sync
const addNote = () => {
  if (!newNoteContent.value.trim()) return;

  const newNote: Note = {
    id: Date.now().toString(),
    track: selectedTrack.value,
    content: newNoteContent.value.trim(),
    timestamp: new Date().toLocaleString(),
  };

  notes.value.unshift(newNote);
  newNoteContent.value = "";
  triggerSync();
};

// Delete timeline note and trigger sync
const deleteNote = (id: string) => {
  notes.value = notes.value.filter((n) => n.id !== id);
  triggerSync();
};
</script>

<template>
  <Layout class="learning-tracker-page">
    <div class="tracker-hero">
      <div class="hero-sticker">📚 PARALLEL LEARNING PATHS</div>
      <h1 class="tracker-title">Copilot Studio & ServiceNow Tracker</h1>
      <p class="tracker-subtitle">
        Track your learning milestones in <strong>Microsoft Copilot Studio</strong> and <strong>ServiceNow Engineering</strong> in real-time.
      </p>

      <!-- Track Switcher Toggle & Auto-Sync Status Badge -->
      <div class="track-toggle-wrapper">
        <div class="track-toggle-container">
          <button
            type="button"
            class="toggle-tab tab-cs"
            :class="{ active: activeTrack === 'Copilot Studio' }"
            @click="activeTrack = 'Copilot Studio'; selectedTrack = 'Copilot Studio'"
          >
            🤖 Copilot Studio
          </button>
          <button
            type="button"
            class="toggle-tab tab-sn"
            :class="{ active: activeTrack === 'ServiceNow' }"
            @click="activeTrack = 'ServiceNow'; selectedTrack = 'ServiceNow'"
          >
            ⚙️ ServiceNow
          </button>
        </div>

        <div class="sync-status-badge" :class="syncStatus" :title="`Status: ${syncStatus}`">
          <span class="status-dot"></span>
          <span class="status-text">
            {{ 
              syncStatus === 'synced' ? 'Cloud Synced' :
              syncStatus === 'saving' ? 'Saving...' :
              syncStatus === 'failed' ? 'Sync Failed' : 'Local Offline'
            }}
          </span>
        </div>
      </div>

      <div class="sync-banner">
        <p class="sync-banner-text">
          💡 <strong>Real-time Syncing Active:</strong> Any topic checked, custom topic added, or note logged automatically syncs to your Supabase Cloud database instantly.
        </p>
      </div>
    </div>

    <div class="grid tracker-grid">
      <!-- Left side: Progress Cards -->
      <div class="left-section">
        <!-- Copilot Studio Tracker Card -->
        <div v-if="activeTrack === 'Copilot Studio'" class="tracker-card card-cs">
          <div class="card-header">
            <div class="header-main">
              <span class="card-icon">🤖</span>
              <h2 class="card-title">Copilot Studio Track</h2>
            </div>
            <span class="progress-badge badge-cs">{{ copilotProgress }}% DONE</span>
          </div>

          <!-- Progress Bar -->
          <div class="progress-bar-container">
            <div class="progress-bar-fill fill-cs" :style="{ width: `${copilotProgress}%` }"></div>
          </div>

          <!-- Subtopics -->
          <div class="topics-list">
            <div
              v-for="topic in copilotTopics"
              :key="topic.id"
              class="topic-row"
              :class="{ 'topic-row-checked': checkedTopics[topic.id] }"
              @click="toggleTopic(topic.id)"
            >
              <div class="topic-row-left">
                <div class="checkbox-container">
                  <span v-if="checkedTopics[topic.id]" class="checkbox-check">⚡</span>
                </div>
                <p class="topic-title">{{ topic.title }}</p>
              </div>
              <button
                v-if="topic.id.includes('custom')"
                type="button"
                class="topic-delete-btn"
                @click="deleteTopic(topic.id, $event)"
                title="Delete custom topic"
              >
                ❌
              </button>
            </div>
          </div>

          <!-- Add Topic Input -->
          <div class="add-topic-form">
            <input
              v-model="newTopicTitle"
              type="text"
              class="add-topic-input"
              placeholder="➕ Add new learning topic..."
              @keyup.enter="addTopic"
            />
            <button type="button" class="add-topic-btn" @click="addTopic">
              Add
            </button>
          </div>
        </div>

        <!-- ServiceNow Tracker Card -->
        <div v-if="activeTrack === 'ServiceNow'" class="tracker-card card-sn">
          <div class="card-header">
            <div class="header-main">
              <span class="card-icon">⚙️</span>
              <h2 class="card-title">ServiceNow Developer Track</h2>
            </div>
            <span class="progress-badge badge-sn">{{ snProgress }}% DONE</span>
          </div>

          <!-- Progress Bar -->
          <div class="progress-bar-container">
            <div class="progress-bar-fill fill-sn" :style="{ width: `${snProgress}%` }"></div>
          </div>

          <!-- Subtopics -->
          <div class="topics-list">
            <div
              v-for="topic in snTopics"
              :key="topic.id"
              class="topic-row"
              :class="{ 'topic-row-checked': checkedTopics[topic.id] }"
              @click="toggleTopic(topic.id)"
            >
              <div class="topic-row-left">
                <div class="checkbox-container">
                  <span v-if="checkedTopics[topic.id]" class="checkbox-check">⚡</span>
                </div>
                <p class="topic-title">{{ topic.title }}</p>
              </div>
              <button
                v-if="topic.id.includes('custom')"
                type="button"
                class="topic-delete-btn"
                @click="deleteTopic(topic.id, $event)"
                title="Delete custom topic"
              >
                ❌
              </button>
            </div>
          </div>

          <!-- Add Topic Input -->
          <div class="add-topic-form">
            <input
              v-model="newTopicTitle"
              type="text"
              class="add-topic-input"
              placeholder="➕ Add new learning topic..."
              @keyup.enter="addTopic"
            />
            <button type="button" class="add-topic-btn" @click="addTopic">
              Add
            </button>
          </div>
        </div>
      </div>

      <!-- Right side: Notes & Log -->
      <div class="right-section">
        <!-- Form Card -->
        <div class="tracker-card log-form-card">
          <h3 class="section-title">📝 Log Learning Session</h3>
          <div class="form-group">
            <label class="form-label">Select Track</label>
            <div class="track-selector">
              <button
                type="button"
                class="selector-btn btn-cs"
                :class="{ active: selectedTrack === 'Copilot Studio' }"
                @click="selectedTrack = 'Copilot Studio'"
              >
                🤖 Copilot Studio
              </button>
              <button
                type="button"
                class="selector-btn btn-sn"
                :class="{ active: selectedTrack === 'ServiceNow' }"
                @click="selectedTrack = 'ServiceNow'"
              >
                ⚙️ ServiceNow
              </button>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Session Summary / Notes</label>
            <textarea
              v-model="newNoteContent"
              class="form-textarea"
              placeholder="e.g. Configured generative answers, built custom connector actions, or tested UI policies."
              rows="3"
            ></textarea>
          </div>

          <Button variant="accent" class="submit-btn" @click="addNote">
            Log Progress Stamp
          </Button>
        </div>

        <!-- Activity Timeline -->
        <div class="tracker-card timeline-card">
          <h3 class="section-title">⏱️ Activity Timeline</h3>
          <div class="timeline-scroll">
            <div v-if="filteredNotes.length === 0" class="no-notes">
              No logged activities for this track yet. Log your first note above!
            </div>
            <div v-for="note in filteredNotes" :key="note.id" class="timeline-item">
              <div class="timeline-header">
                <span class="timeline-badge" :class="note.track === 'Copilot Studio' ? 'badge-cs' : 'badge-sn'">
                  {{ note.track === 'Copilot Studio' ? '🤖 Copilot Studio' : '⚙️ ServiceNow' }}
                </span>
                <span class="timeline-time">{{ note.timestamp }}</span>
              </div>
              <p class="timeline-content">{{ note.content }}</p>
              <button class="delete-btn" @click="deleteNote(note.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.learning-tracker-page {
  background-color: var(--color-background-400);
  min-height: 100vh;
  padding-top: calc(var(--height-header) + 32px);
  padding-bottom: 64px;
  color: var(--color-text-400);
}

.tracker-hero {
  max-width: 800px;
  margin: 0 auto var(--space-xl) auto;
  text-align: center;
  padding: 0 var(--space-outer);
}

.hero-sticker {
  background-color: #2d2a24;
  color: #f5efe6;
  font-size: 0.8rem;
  font-weight: 900;
  padding: 6px 14px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: var(--space-sm);
  border: 2px solid #2d2a24;
  box-shadow: 2px 2px 0px #2d2a24;
  transform: rotate(-1.5deg);
}

.tracker-title {
  font-size: var(--font-size-title-md);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-text-400);
  line-height: 1.1;

  @include mixins.mq("md") {
    font-size: var(--font-size-title-lg);
  }
}

.tracker-subtitle {
  font-size: var(--font-size-md);
  color: var(--color-text-300);
  margin-top: var(--space-sm);
  line-height: 1.45;
}

// Track Switcher Toggle Styles
.track-toggle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  margin: var(--space-md) auto;
  max-width: 480px;

  @include mixins.mq("md") {
    flex-direction: row;
    justify-content: center;
    max-width: 650px;
  }
}

.track-toggle-container {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  background-color: #fbf9f6;
  border: 3px solid #2d2a24;
  border-radius: 14px;
  padding: 6px;
  box-shadow: 4px 4px 0px #2d2a24;
  width: 100%;

  @include mixins.mq("md") {
    width: auto;
  }
}

.toggle-tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px 18px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.88rem;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: #5f5646;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    color: #2d2a24;
    background-color: rgba(223, 210, 191, 0.15);
  }

  &.active {
    border: 2.5px solid #2d2a24;
    box-shadow: 2.5px 2.5px 0px #2d2a24;
    color: #ffffff;
    
    &.tab-cs {
      background-color: #0099b8;
    }

    &.tab-sn {
      background-color: #db0062;
    }
  }
}

// Auto-sync status badge style
.sync-status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid #2d2a24;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px #2d2a24;
  height: 44px;
  box-sizing: border-box;
  
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #5f5646;
    border: 1.5px solid #2d2a24;
  }
  
  .status-text {
    font-size: 0.72rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #2d2a24;
  }
  
  &.synced {
    background-color: rgba(0, 204, 136, 0.08);
    .status-dot {
      background-color: #00cc88;
    }
  }
  
  &.saving {
    background-color: rgba(0, 153, 184, 0.08);
    .status-dot {
      background-color: #0099b8;
      animation: pulse 1s infinite alternate;
    }
  }
  
  &.failed {
    background-color: rgba(219, 0, 98, 0.08);
    .status-dot {
      background-color: #db0062;
    }
  }

  &.offline {
    background-color: rgba(223, 210, 191, 0.08);
    .status-dot {
      background-color: #5f5646;
    }
  }
}

@keyframes pulse {
  from { opacity: 0.4; }
  to { opacity: 1; }
}

.sync-banner {
  margin-top: var(--space-md);
  background-color: #ffffff;
  border: 2.5px solid #2d2a24;
  box-shadow: 3px 3px 0px #2d2a24;
  border-radius: 12px;
  padding: 10px 16px;
  display: inline-block;
  max-width: 600px;
  
  &-text {
    font-size: var(--font-size-sm);
    color: #5f5646;
    line-height: 1.4;
    margin: 0;
  }
}

.tracker-grid {
  max-width: var(--breakpoint-xxxl);
  margin: 0 auto;
  padding: 0 var(--space-outer);
  gap: var(--space-lg);
}

.left-section {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @include mixins.mq("lg") {
    grid-column: 1 / 8;
  }
}

.right-section {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @include mixins.mq("lg") {
    grid-column: 8 / 13;
  }
}

.tracker-card {
  background: #ffffff;
  border: 3.5px solid #2d2a24;
  box-shadow: 7px 7px 0px 0px #2d2a24;
  border-radius: 20px;
  padding: var(--space-lg);
  position: relative;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.header-main {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.card-icon {
  font-size: 1.8rem;
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: 900;
  text-transform: uppercase;
  color: #2d2a24;
}

.progress-badge {
  font-size: 0.72rem;
  font-weight: 900;
  padding: 6px 12px;
  border-radius: 8px;
  border: 2.5px solid #2d2a24;
  box-shadow: 2px 2px 0px #2d2a24;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &.badge-cs {
    background-color: #0099b8;
    color: #ffffff;
  }

  &.badge-sn {
    background-color: #db0062;
    color: #ffffff;
  }
}

.progress-bar-container {
  height: 20px;
  border: 3px solid #2d2a24;
  background-color: #fcfbf9;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: var(--space-lg);
  position: relative;
}

.progress-bar-fill {
  height: 100%;
  transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.fill-cs {
    background-color: #0099b8;
  }

  &.fill-sn {
    background-color: #db0062;
  }
}

.topics-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.topic-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border: 2.5px solid #2d2a24;
  border-radius: 12px;
  background-color: #fcfbf9;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(-1.5px, -1.5px);
    box-shadow: 3px 3px 0px #2d2a24;
  }

  &-checked {
    background-color: rgba(223, 210, 191, 0.15);
    opacity: 0.85;
    
    .topic-title {
      text-decoration: line-through;
      color: #5f5646;
    }
  }
}

.topic-row-left {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.checkbox-container {
  width: 24px;
  height: 24px;
  border: 2.5px solid #2d2a24;
  border-radius: 6px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.checkbox-check {
  font-size: 0.9rem;
  font-weight: 900;
}

.topic-title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: #2d2a24;
  line-height: 1.3;
}

.topic-delete-btn {
  background: transparent;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(219, 0, 98, 0.08);
  }
}

// Add Topic Form Styles
.add-topic-form {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

.add-topic-input {
  flex: 1;
  border: 2.5px solid #2d2a24;
  border-radius: 12px;
  padding: 8px 12px;
  font-family: inherit;
  font-size: var(--font-size-sm);
  background-color: #fcfbf9;
  color: #2d2a24;
  outline: none;

  &:focus {
    border-color: var(--color-orange-400);
  }
}

.add-topic-btn {
  border: 2.5px solid #2d2a24;
  background-color: #dfd2bf;
  color: #2d2a24;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.78rem;
  border-radius: 12px;
  padding: 0 16px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #2d2a24;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px #2d2a24;
    background-color: #d2c3ae;
  }
}

/* Form Styles */
.section-title {
  font-size: var(--font-size-md);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: var(--space-md);
  color: #2d2a24;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: var(--space-md);
}

.form-group:last-of-type {
  margin-bottom: var(--space-lg);
}

.form-label {
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #5f5646;
}

.track-selector {
  display: flex;
  gap: var(--space-sm);
}

.selector-btn {
  flex: 1;
  height: 40px;
  border: 2.5px solid #2d2a24;
  border-radius: 10px;
  background-color: #fcfbf9;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 0px #2d2a24;
  }

  &.active {
    color: #ffffff;
    
    &.btn-cs {
      background-color: #0099b8;
    }

    &.btn-sn {
      background-color: #db0062;
    }
  }
}

.form-textarea {
  border: 2.5px solid #2d2a24;
  border-radius: 12px;
  padding: 10px var(--space-sm);
  font-family: inherit;
  font-size: var(--font-size-sm);
  background-color: #fcfbf9;
  color: #2d2a24;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: var(--color-orange-400);
  }
}

.submit-btn {
  width: 100%;
  :deep(.button-wrapper) {
    border-radius: 12px !important;
    border: 3px solid #2d2a24 !important;
    box-shadow: 3.5px 3.5px 0px #2d2a24 !important;
    
    &:hover {
      transform: translate(-1.5px, -1.5px);
      box-shadow: 5px 5px 0px #2d2a24 !important;
    }
  }
}

/* Timeline card */
.timeline-card {
  max-height: 480px;
}

.timeline-scroll {
  overflow-y: auto;
  padding-right: var(--space-xs);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.timeline-item {
  border: 2.5px solid #2d2a24;
  border-radius: 12px;
  background-color: #fcfbf9;
  padding: var(--space-sm);
  position: relative;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.timeline-badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 8px;
  border-radius: 6px;
  color: #ffffff;

  &.badge-cs {
    background-color: #0099b8;
  }

  &.badge-sn {
    background-color: #db0062;
  }
}

.timeline-time {
  font-size: 0.65rem;
  color: #5f5646;
  font-weight: 600;
}

.timeline-content {
  font-size: var(--font-size-sm);
  color: #2d2a24;
  font-weight: 600;
  line-height: 1.4;
  padding-right: 48px;
}

.no-notes {
  text-align: center;
  font-size: var(--font-size-sm);
  color: #5f5646;
  padding: var(--space-lg) 0;
  font-weight: 600;
}

.delete-btn {
  position: absolute;
  bottom: var(--space-sm);
  right: var(--space-sm);
  background: transparent;
  border: none;
  color: #db0062;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(219, 0, 98, 0.08);
  }
}
</style>
