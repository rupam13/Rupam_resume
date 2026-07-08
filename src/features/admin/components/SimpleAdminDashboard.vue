<script setup lang="ts">
import { ref, onMounted } from "vue";
import SimpleProjectForm from "./SimpleProjectForm.vue";

interface Project {
  title: string;
  category: string;
  theme: "light" | "dark";
  tags: string[];
  description: string;
  components: any[];
  thumbnail?: string;
}

const STORAGE_KEY = "portfolio-projects";

const projects = ref<Project[]>([]);
const showForm = ref(false);
const selectedCategory = ref("servicenow");
const message = ref("");
const messageType = ref<"success" | "error">("success");

const categories = ["servicenow", "ai", "general"];

const loadProjects = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  projects.value = stored ? JSON.parse(stored) : [];
};

const saveProjects = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects.value));
};

const handleAddProject = (project: Project) => {
  projects.value.push(project);
  saveProjects();
  showForm.value = false;
  showMessage("Project added successfully!", "success");
};

const handleDeleteProject = (index: number) => {
  const project = projects.value[index];
  if (!project) return;

  if (confirm(`Delete "${project.title}"?`)) {
    projects.value.splice(index, 1);
    saveProjects();
    showMessage("Project deleted!", "success");
  }
};

const showMessage = (text: string, type: "success" | "error") => {
  message.value = text;
  messageType.value = type;
  setTimeout(() => {
    message.value = "";
  }, 3000);
};

const exportAllProjectsAsJSON = () => {
  if (projects.value.length === 0) {
    showMessage("No projects to export!", "error");
    return;
  }

  const dataStr = JSON.stringify(projects.value, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `projects-${new Date().toISOString().split("T")[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);

  showMessage("Projects exported as JSON!", "success");
};

const exportCategoryAsJSON = (category: string) => {
  const categoryProjects = projects.value.filter((p) => p.category === category);

  if (categoryProjects.length === 0) {
    showMessage(`No ${category} projects to export!`, "error");
    return;
  }

  const dataStr = JSON.stringify(categoryProjects, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${category}-projects-${new Date().toISOString().split("T")[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);

  showMessage(`${category} projects exported!`, "success");
};

const importJSON = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target?.result as string);
      if (Array.isArray(imported)) {
        projects.value.push(...imported);
        saveProjects();
        showMessage(`${imported.length} projects imported!`, "success");
      } else {
        showMessage("Invalid JSON format!", "error");
      }
    } catch (err) {
      showMessage("Failed to parse JSON!", "error");
    }
  };
  reader.readAsText(file);
};

const getProjectsByCategory = (category: string) => {
  return projects.value.filter((p) => p.category === category);
};

onMounted(() => {
  loadProjects();
});

const emit = defineEmits<{
  logout: [];
}>();
</script>

<template>
  <div class="simple-admin">
    <!-- Header -->
    <div class="admin-header">
      <div class="admin-header-content">
        <h1>Admin - Manage Projects</h1>
        <button @click="emit('logout')" class="logout-btn">Logout</button>
      </div>
    </div>

    <!-- Message -->
    <div v-if="message" :class="['admin-message', `message-${messageType}`]">
      {{ message }}
    </div>

    <!-- Container -->
    <div class="admin-container">
      <!-- Add Project Form -->
      <div v-if="showForm" class="form-overlay">
        <div class="form-box">
          <button @click="showForm = false" class="form-close">✕</button>
          <SimpleProjectForm
            :category="selectedCategory"
            @add="handleAddProject"
            @cancel="showForm = false"
          />
        </div>
      </div>

      <!-- Export Section -->
      <div class="export-section">
        <h2>📥 Export & Import</h2>
        <div class="export-buttons">
          <button @click="exportAllProjectsAsJSON" class="btn btn-export">
            ⬇️ Export All as JSON
          </button>
          <label class="btn btn-import">
            ⬆️ Import JSON
            <input
              type="file"
              accept=".json"
              @change="importJSON"
              style="display: none"
            />
          </label>
        </div>
        <div class="export-info">
          💾 <strong>Save your projects:</strong> Export as JSON and manually add files to
          GitHub repo at <code>projects/[category]/</code>
        </div>
      </div>

      <!-- Instructions -->
      <div class="instructions-box">
        <h2>📋 How to Use</h2>
        <ol>
          <li>Add projects using the forms below</li>
          <li>Export projects as JSON</li>
          <li>Go to GitHub repo: <code>rupam-projects-data</code></li>
          <li>Create/edit files in <code>projects/[category]/</code></li>
          <li>Paste JSON content into files</li>
          <li>Commit & push to GitHub</li>
          <li>Portfolio fetches automatically</li>
        </ol>
      </div>

      <!-- Projects by Category -->
      <div class="categories-section">
        <div v-for="category in categories" :key="category" class="category-block">
          <div class="category-header">
            <h2>{{ category.toUpperCase() }} Projects</h2>
            <div class="category-actions">
              <button
                @click="
                  selectedCategory = category;
                  showForm = true;
                "
                class="btn btn-add"
              >
                + Add
              </button>
              <button
                @click="exportCategoryAsJSON(category)"
                class="btn btn-export-sm"
              >
                Export
              </button>
            </div>
          </div>

          <div class="projects-list">
            <div
              v-for="(project, index) in getProjectsByCategory(category)"
              :key="index"
              class="project-item"
            >
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description?.substring(0, 80) }}...</p>
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
              <button
                @click="handleDeleteProject(index)"
                class="btn btn-delete"
              >
                🗑️ Delete
              </button>
            </div>

            <div v-if="getProjectsByCategory(category).length === 0" class="empty">
              No projects yet. Click "Add" to create one.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.simple-admin {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.admin-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;
      font-size: 24px;
    }
  }
}

.logout-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

.admin-message {
  max-width: 1200px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;

  &.message-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.message-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}

.admin-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.export-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 18px;
    color: #333;
  }
}

.export-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.export-info {
  padding: 12px;
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  border-radius: 4px;
  font-size: 13px;
  color: #856404;

  code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
  }
}

.instructions-box {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    font-size: 18px;
    color: #333;
  }

  ol {
    margin: 0;
    padding-left: 20px;
    color: #666;
    line-height: 1.8;

    li {
      margin-bottom: 8px;
    }

    code {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
      color: #d32f2f;
    }
  }
}

.categories-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.category-block {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
}

.category-actions {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
}

.btn-add {
  background: #667eea;
  color: white;

  &:hover {
    background: #5568d3;
  }
}

.btn-export,
.btn-export-sm {
  background: #4caf50;
  color: white;

  &:hover {
    background: #45a049;
  }
}

.btn-import {
  background: #2196f3;
  color: white;
  cursor: pointer;

  &:hover {
    background: #0b7dda;
  }
}

.btn-delete {
  background: #ffebee;
  color: #d32f2f;

  &:hover {
    background: #ffcdd2;
  }
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #667eea;
  }
}

.project-info {
  flex: 1;

  h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
    color: #333;
  }

  p {
    margin: 0 0 8px 0;
    font-size: 13px;
    color: #666;
  }
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
}

.empty {
  padding: 40px 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.form-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.form-box {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.form-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #eee;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: #ddd;
  }
}
</style>
