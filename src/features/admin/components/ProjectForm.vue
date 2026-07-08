<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { githubApi } from "../../../utils/githubApi";

interface Project {
  title: string;
  category: string;
  theme: "light" | "dark";
  tags: string[];
  description: string;
  components: any[];
  thumbnail?: string;
}

const props = defineProps<{
  project?: Project | null;
  category: string;
  isLoading: boolean;
}>();

const emit = defineEmits<{
  save: [project: Project];
  cancel: [];
}>();

const form = ref<Project>({
  title: "",
  category: props.category || "general",
  theme: "dark",
  tags: [],
  description: "",
  components: [],
  thumbnail: "",
});

const thumbnailFile = ref<File | null>(null);
const thumbnailPreview = ref<string>("");
const newTag = ref("");
const embedUrl = ref("");
const embedHeight = ref("399");
const embedWidth = ref("504");
const isUploadingImage = ref(false);

const isFormValid = computed(() => {
  return (
    form.value.title.trim() &&
    form.value.description.trim() &&
    form.value.tags.length > 0
  );
});

watch(
  () => props.project,
  (newProject) => {
    if (newProject) {
      form.value = JSON.parse(JSON.stringify(newProject));
      if (newProject.thumbnail) {
        thumbnailPreview.value = newProject.thumbnail;
      }
    } else {
      form.value = {
        title: "",
        category: props.category || "general",
        theme: "dark",
        tags: [],
        description: "",
        components: [],
        thumbnail: "",
      };
      thumbnailPreview.value = "";
    }
  }
);

const handleThumbnailSelect = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    thumbnailFile.value = file;
    const reader = new FileReader();
    reader.onload = (event) => {
      thumbnailPreview.value = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const uploadThumbnail = async () => {
  if (!thumbnailFile.value) return;

  isUploadingImage.value = true;
  const reader = new FileReader();

  reader.onload = async (event) => {
    const base64 = (event.target?.result as string).split(",")[1] || "";
    const url = await githubApi.uploadImage(
      form.value.category || "general",
      thumbnailFile.value!.name,
      base64
    );

    if (url) {
      form.value.thumbnail = url;
      thumbnailPreview.value = url;
    }
    isUploadingImage.value = false;
  };

  reader.readAsDataURL(thumbnailFile.value);
};

const addTag = () => {
  const tag = newTag.value.trim();
  if (tag && !form.value.tags.includes(tag)) {
    form.value.tags.push(tag);
    newTag.value = "";
  }
};

const removeTag = (tag: string) => {
  form.value.tags = form.value.tags.filter((t) => t !== tag);
};

const addEmbedComponent = () => {
  if (!embedUrl.value.trim()) return;

  form.value.components.push({
    type: "embed",
    props: {
      src: embedUrl.value,
      height: embedHeight.value,
      width: embedWidth.value,
      title: "Embedded Content",
    },
  });

  embedUrl.value = "";
  embedHeight.value = "399";
  embedWidth.value = "504";
};

const removeComponent = (index: number) => {
  form.value.components.splice(index, 1);
};

const handleSubmit = async () => {
  if (!isFormValid.value) return;

  if (thumbnailFile.value) {
    await uploadThumbnail();
  }

  emit("save", {
    ...form.value,
    category: props.category,
  });
};
</script>

<template>
  <div class="project-form">
    <h2>{{ project ? "Edit Project" : "Add New Project" }}</h2>

    <!-- Title -->
    <div class="form-group">
      <label>Project Title *</label>
      <input
        v-model="form.title"
        type="text"
        placeholder="e.g., AI Voice Agent"
        class="form-input"
      />
    </div>

    <!-- Description -->
    <div class="form-group">
      <label>Description *</label>
      <textarea
        v-model="form.description"
        placeholder="Detailed description of your project"
        class="form-textarea"
        rows="4"
      ></textarea>
    </div>

    <!-- Theme -->
    <div class="form-group">
      <label>Theme</label>
      <select v-model="form.theme" class="form-input">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>

    <!-- Tags -->
    <div class="form-group">
      <label>Tags *</label>
      <div class="tag-input-wrapper">
        <input
          v-model="newTag"
          type="text"
          placeholder="Enter tag and press Add"
          class="form-input"
          @keyup.enter="addTag"
        />
        <button @click="addTag" type="button" class="tag-add-btn">
          Add Tag
        </button>
      </div>
      <div class="tags-list">
        <span v-for="tag in form.tags" :key="tag" class="tag-badge">
          {{ tag }}
          <button
            @click="removeTag(tag)"
            type="button"
            class="tag-remove"
          >
            ✕
          </button>
        </span>
      </div>
      <small v-if="form.tags.length === 0" class="form-error">
        Add at least one tag
      </small>
    </div>

    <!-- Thumbnail -->
    <div class="form-group">
      <label>Thumbnail Image</label>
      <div class="thumbnail-upload">
        <div v-if="thumbnailPreview" class="thumbnail-preview">
          <img :src="thumbnailPreview" :alt="form.title" />
        </div>
        <input
          type="file"
          accept="image/*"
          @change="handleThumbnailSelect"
          class="file-input"
        />
        <button
          v-if="thumbnailFile"
          @click="uploadThumbnail"
          type="button"
          class="upload-btn"
          :disabled="isUploadingImage"
        >
          {{ isUploadingImage ? "Uploading..." : "Upload Image" }}
        </button>
      </div>
    </div>

    <!-- LinkedIn Embed -->
    <div class="form-group">
      <label>LinkedIn Embed</label>
      <div class="embed-input-wrapper">
        <input
          v-model="embedUrl"
          type="url"
          placeholder="Paste LinkedIn embed URL"
          class="form-input"
        />
        <button @click="addEmbedComponent" type="button" class="embed-add-btn">
          Add Embed
        </button>
      </div>
      <div v-if="form.components.length > 0" class="components-list">
        <div
          v-for="(component, index) in form.components"
          :key="index"
          class="component-item"
        >
          <span>{{ component.type }} - {{ component.props.title }}</span>
          <button
            @click="removeComponent(index)"
            type="button"
            class="remove-btn"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Form Actions -->
    <div class="form-actions">
      <button
        @click="handleSubmit"
        type="button"
        class="btn btn-primary"
        :disabled="!isFormValid || isLoading"
      >
        {{ isLoading ? "Saving..." : "Save Project" }}
      </button>
      <button
        @click="emit('cancel')"
        type="button"
        class="btn btn-secondary"
        :disabled="isLoading"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-form {
  h2 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 22px;
    color: #333;
  }
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 600;
    color: #333;
    font-size: 14px;
  }
}

.form-input,
.form-textarea {
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-error {
  color: #d32f2f;
  font-size: 12px;
}

.tag-input-wrapper {
  display: flex;
  gap: 8px;

  .form-input {
    flex: 1;
  }
}

.tag-add-btn {
  padding: 10px 12px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: #5568d3;
  }
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-badge {
  background: #f0f0f0;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #333;
}

.tag-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 16px;
  padding: 0;

  &:hover {
    color: #d32f2f;
  }
}

.thumbnail-upload {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.thumbnail-preview {
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #e0e0e0;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.file-input {
  padding: 10px;
  border: 2px dashed #e0e0e0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border-color: #667eea;
  }
}

.upload-btn {
  padding: 10px 12px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #45a049;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.embed-input-wrapper {
  display: flex;
  gap: 8px;

  .form-input {
    flex: 1;
  }
}

.embed-add-btn {
  padding: 10px 12px;
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: #e68900;
  }
}

.components-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.component-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 13px;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #d32f2f;
  font-size: 16px;
  padding: 0;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 30px;
}

.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.btn-primary {
  background: #667eea;
  color: white;

  &:hover:not(:disabled) {
    background: #5568d3;
  }
}

.btn-secondary {
  background: #e0e0e0;
  color: #333;

  &:hover:not(:disabled) {
    background: #d0d0d0;
  }
}
</style>
