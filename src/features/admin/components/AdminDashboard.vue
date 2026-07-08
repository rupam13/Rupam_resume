<script setup lang="ts">
import { ref, onMounted } from "vue";
import { githubApi } from "../../../utils/githubApi";
import ProjectForm from "./ProjectForm.vue";

interface Project {
  title: string;
  category: string;
  theme: "light" | "dark";
  tags: string[];
  description: string;
  components: any[];
  thumbnail?: string;
}

const projects = ref<Record<string, Project[]>>({});
const selectedCategory = ref<string | null>(null);
const showForm = ref(false);
const editingProject = ref<Project | null>(null);
const isLoading = ref(false);
const message = ref("");
const messageType = ref<"success" | "error">("success");

const emit = defineEmits<{
  logout: [];
}>();

const loadProjects = async () => {
  isLoading.value = true;
  console.log("🔄 Loading projects...");

  // Test connection first
  const isConnected = await githubApi.testConnection();
  if (!isConnected) {
    showMessage("Failed to connect to GitHub. Check .env.local configuration.", "error");
    isLoading.value = false;
    return;
  }

  projects.value = await githubApi.getAllProjects();
  console.log("📦 Projects loaded:", projects.value);
  isLoading.value = false;
};

const categories = ["ai", "servicenow", "general"];

const openNewProjectForm = (category: string) => {
  selectedCategory.value = category;
  editingProject.value = null;
  showForm.value = true;
};

const openEditForm = (project: Project) => {
  selectedCategory.value = project.category;
  editingProject.value = JSON.parse(JSON.stringify(project));
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
  editingProject.value = null;
  selectedCategory.value = null;
};

const handleSaveProject = async (project: Project) => {
  if (!selectedCategory.value) return;

  isLoading.value = true;
  const projectName = project.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const success = await githubApi.saveProject(
    selectedCategory.value,
    projectName,
    project
  );

  isLoading.value = false;

  if (success) {
    showMessage("Project saved successfully!", "success");
    closeForm();
    await loadProjects();
  } else {
    showMessage("Failed to save project. Check GitHub token.", "error");
  }
};

const handleDeleteProject = async (project: Project) => {
  if (
    !confirm(
      `Are you sure you want to delete "${project.title}"? This cannot be undone.`
    )
  ) {
    return;
  }

  isLoading.value = true;
  const projectName = project.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const success = await githubApi.deleteProject(
    project.category,
    projectName
  );

  isLoading.value = false;

  if (success) {
    showMessage("Project deleted successfully!", "success");
    await loadProjects();
  } else {
    showMessage("Failed to delete project.", "error");
  }
};

const showMessage = (text: string, type: "success" | "error") => {
  message.value = text;
  messageType.value = type;
  setTimeout(() => {
    message.value = "";
  }, 3000);
};

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <div class="admin-dashboard">
    <!-- Header -->
    <div class="admin-header">
      <div class="admin-header-content">
        <h1>Admin Dashboard</h1>
        <button @click="emit('logout')" class="admin-logout-btn">Logout</button>
      </div>
    </div>

    <!-- Message -->
    <div v-if="message" :class="['admin-message', `admin-message-${messageType}`]">
      {{ message }}
    </div>

    <!-- Main Content -->
    <div class="admin-container">
      <div v-if="showForm" class="admin-form-overlay">
        <div class="admin-form-container">
          <button @click="closeForm" class="admin-form-close">✕</button>
          <ProjectForm
            :project="editingProject"
            :category="selectedCategory || 'general'"
            @save="handleSaveProject"
            @cancel="closeForm"
            :isLoading="isLoading"
          />
        </div>
      </div>

      <!-- Projects by Category -->
      <div class="admin-categories">
        <div v-for="category in categories" :key="category" class="admin-category">
          <div class="admin-category-header">
            <h2>{{ category.toUpperCase() }} Projects</h2>
            <button
              @click="openNewProjectForm(category)"
              class="admin-add-btn"
              :disabled="isLoading"
            >
              + Add Project
            </button>
          </div>

          <div
            v-if="projects[category] && projects[category].length > 0"
            class="admin-projects-list"
          >
            <div
              v-for="project in projects[category]"
              :key="project.title"
              class="admin-project-card"
            >
              <div class="admin-project-header">
                <div>
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description?.substring(0, 100) }}...</p>
                </div>
                <div v-if="project.thumbnail" class="admin-project-thumb">
                  <img :src="project.thumbnail" :alt="project.title" />
                </div>
              </div>

              <div class="admin-project-tags">
                <span v-for="tag in project.tags" :key="tag" class="admin-tag">
                  {{ tag }}
                </span>
              </div>

              <div class="admin-project-actions">
                <button
                  @click="openEditForm(project)"
                  class="admin-action-btn admin-edit-btn"
                  :disabled="isLoading"
                >
                  ✏️ Edit
                </button>
                <button
                  @click="handleDeleteProject(project)"
                  class="admin-action-btn admin-delete-btn"
                  :disabled="isLoading"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>

          <div v-else class="admin-empty">
            No projects yet. Click "Add Project" to create one.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-dashboard {
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

.admin-logout-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

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

  &-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}

.admin-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.admin-form-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.admin-form-container {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.admin-form-close {
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ddd;
  }
}

.admin-categories {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.admin-category {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &-header {
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
}

.admin-add-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #5568d3;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.admin-projects-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.admin-project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #667eea;
  }
}

.admin-project-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;

  h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #666;
  }
}

.admin-project-thumb {
  width: 80px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.admin-project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.admin-tag {
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
}

.admin-project-actions {
  display: flex;
  gap: 8px;
}

.admin-action-btn {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.admin-edit-btn {
  background-color: #e3f2fd;
  color: #1976d2;

  &:hover:not(:disabled) {
    background-color: #bbdefb;
  }
}

.admin-delete-btn {
  background-color: #ffebee;
  color: #d32f2f;

  &:hover:not(:disabled) {
    background-color: #ffcdd2;
  }
}

.admin-empty {
  padding: 40px 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
}
</style>
