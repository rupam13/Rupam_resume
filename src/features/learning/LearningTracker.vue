<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Layout from "../../components/Layout.vue";
import Button from "../../components/Button.vue";

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

const copilotTopics: Topic[] = [
  { id: "cs-1", title: "Introduction to Copilot Studio & Conversational Design" },
  { id: "cs-2", title: "Topics, Triggers, & Dialog Management (Entities/Variables)" },
  { id: "cs-3", title: "Generative Answers & RAG (Uploading documents/websites)" },
  { id: "cs-4", title: "Actions & Power Automate Flows (Integrating backend APIs)" },
  { id: "cs-5", title: "Custom Connectors & Microsoft Dataverse integration" },
  { id: "cs-6", title: "Analytics, Sentiment Tracking, & Agent Publishing" },
];

const snTopics: Topic[] = [
  { id: "sn-1", title: "ServiceNow Platform Basics & UI Customization" },
  { id: "sn-2", title: "Client Scripts & UI Policies (Client-side logic)" },
  { id: "sn-3", title: "Business Rules & Script Includes (Server-side logic)" },
  { id: "sn-4", title: "Flow Designer & Integration Hub (Workflow Automation)" },
  { id: "sn-5", title: "Service Portal Customization (Widgets, HTML/CSS/Angular)" },
  { id: "sn-6", title: "ServiceNow APIs (REST API Explorer, Scripted REST APIs)" },
];

const checkedTopics = ref<Record<string, boolean>>({});
const notes = ref<Note[]>([]);
const newNoteContent = ref("");
const selectedTrack = ref<"Copilot Studio" | "ServiceNow">("Copilot Studio");

onMounted(() => {
  if (typeof window !== "undefined") {
    const savedChecked = localStorage.getItem("learning_checked_topics");
    if (savedChecked) {
      checkedTopics.value = JSON.parse(savedChecked);
    }

    const savedNotes = localStorage.getItem("learning_notes");
    if (savedNotes) {
      notes.value = JSON.parse(savedNotes);
    } else {
      notes.value = [
        {
          id: "1",
          track: "Copilot Studio",
          content: "Started parallel learning track. Set up the Copilot Studio vs ServiceNow tracker dashboard.",
          timestamp: new Date().toLocaleString(),
        },
        {
          id: "2",
          track: "ServiceNow",
          content: "Studied Flow Designer, Script Includes, and Integration Hub APIs.",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toLocaleString(),
        },
      ];
      localStorage.setItem("learning_notes", JSON.stringify(notes.value));
    }
  }
});

const toggleTopic = (id: string) => {
  checkedTopics.value[id] = !checkedTopics.value[id];
  localStorage.setItem("learning_checked_topics", JSON.stringify(checkedTopics.value));
};

const copilotProgress = computed(() => {
  const covered = copilotTopics.filter((t) => checkedTopics.value[t.id]).length;
  return Math.round((covered / copilotTopics.length) * 100);
});

const snProgress = computed(() => {
  const covered = snTopics.filter((t) => checkedTopics.value[t.id]).length;
  return Math.round((covered / snTopics.length) * 100);
});

const addNote = () => {
  if (!newNoteContent.value.trim()) return;

  const newNote: Note = {
    id: Date.now().toString(),
    track: selectedTrack.value,
    content: newNoteContent.value.trim(),
    timestamp: new Date().toLocaleString(),
  };

  notes.value.unshift(newNote);
  localStorage.setItem("learning_notes", JSON.stringify(notes.value));
  newNoteContent.value = "";
};

const deleteNote = (id: string) => {
  notes.value = notes.value.filter((n) => n.id !== id);
  localStorage.setItem("learning_notes", JSON.stringify(notes.value));
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
    </div>

    <div class="grid tracker-grid">
      <!-- Left side: Progress Cards -->
      <div class="left-section">
        <!-- Copilot Studio Tracker Card -->
        <div class="tracker-card card-cs">
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
              <div class="checkbox-container">
                <span v-if="checkedTopics[topic.id]" class="checkbox-check">⚡</span>
              </div>
              <p class="topic-title">{{ topic.title }}</p>
            </div>
          </div>
        </div>

        <!-- ServiceNow Tracker Card -->
        <div class="tracker-card card-sn">
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
              <div class="checkbox-container">
                <span v-if="checkedTopics[topic.id]" class="checkbox-check">⚡</span>
              </div>
              <p class="topic-title">{{ topic.title }}</p>
            </div>
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
            <div v-if="notes.length === 0" class="no-notes">
              No logged activities yet. Type above to add your first note!
            </div>
            <div v-for="note in notes" :key="note.id" class="timeline-item">
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
}

.topic-row {
  display: flex;
  align-items: center;
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
    &.btn-cs {
      background-color: #0099b8;
      color: #ffffff;
    }

    &.btn-sn {
      background-color: #db0062;
      color: #ffffff;
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
