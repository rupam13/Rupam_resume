<script setup lang="ts">
import { ref, computed } from "vue";

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
  category: string;
}>();

const emit = defineEmits<{
  add: [project: Project];
  cancel: [];
}>();

const form = ref<Project>({
  title: "",
  category: props.category,
  theme: "dark",
  tags: [],
  description: "",
  components: [],
  thumbnail: "",
});

const newTag = ref("");
const embedUrl = ref("");

const isFormValid = computed(() => {
  return (
    form.value.title.trim() &&
    form.value.description.trim() &&
    form.value.tags.length > 0
  );
});

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

const addEmbed = () => {
  if (!embedUrl.value.trim()) return;

  form.value.components.push({
    type: "embed",
    props: {
      src: embedUrl.value,
      height: "399",
      width: "504",
      title: "Embedded Content",
    },
  });

  embedUrl.value = "";
};

const removeComponent = (index: number) => {
  form.value.components.splice(index, 1);
};

const handleSubmit = () => {
  if (!isFormValid.value) return;

  emit("add", {
    ...form.value,
    category: props.category,
  });

  // Reset form
  form.value = {
    title: "",
    category: props.category,
    theme: "dark",
    tags: [],
    description: "",
    components: [],
    thumbnail: "",
  };
};
</script>

<template>
  <div class="simple-form">
    <h2>Add {{ category }} Project</h2>

    <!-- Title -->
    <div class="form-group">
      <label>Project Title *</label>
      <input
        v-model="form.title"
        type="text"
        placeholder="e.g., Ticket Management System"
        class="form-input"
      />
    </div>

    <!-- Description -->
    <div class="form-group">
      <label>Description *</label>
      <textarea
        v-model="form.description"
        placeholder="Detailed project description"
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
          placeholder="Enter tag and click Add"
          class="form-input"
          @keyup.enter="addTag"
        />
        <button @click="addTag" type="button" class="btn-small">
          Add Tag
        </button>
      </div>
      <div class="tags-list">
        <span v-for="tag in form.tags" :key="tag" class="tag-badge">
          {{ tag }}
          <button @click="removeTag(tag)" type="button" class="tag-remove">
            ✕
          </button>
        </span>
      </div>
    </div>

    <!-- LinkedIn Embed URL -->
    <div class="form-group">
      <label>LinkedIn Embed URL</label>
      <div class="embed-input-wrapper">
        <input
          v-model="embedUrl"
          type="url"
          placeholder="Paste LinkedIn embed URL"
          class="form-input"
        />
        <button @click="addEmbed" type="button" class="btn-small">
          Add Embed
        </button>
      </div>

      <div v-if="form.components.length > 0" class="components-list">
        <strong>Embeds:</strong>
        <div
          v-for="(component, index) in form.components"
          :key="index"
          class="component-item"
        >
          <span>{{ component.type }} - Embed</span>
          <button @click="removeComponent(index)" type="button" class="btn-remove">
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Thumbnail Note -->
    <div class="form-note">
      📝 <strong>Thumbnail:</strong> Leave empty for now. You can add thumbnail URL manually
      when editing JSON.
    </div>

    <!-- Form Actions -->
    <div class="form-actions">
      <button
        @click="handleSubmit"
        type="button"
        class="btn btn-primary"
        :disabled="!isFormValid"
      >
        Save Project
      </button>
      <button @click="emit('cancel')" type="button" class="btn btn-secondary">
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.simple-form {
  max-width: 600px;
  margin: 0 auto;

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
}

.tag-input-wrapper,
.embed-input-wrapper {
  display: flex;
  gap: 8px;

  .form-input {
    flex: 1;
  }
}

.btn-small {
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

.tag-remove,
.btn-remove {
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

.components-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;

  strong {
    font-size: 13px;
  }
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

.form-note {
  padding: 12px;
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  border-radius: 4px;
  font-size: 13px;
  color: #1565c0;
  margin-bottom: 20px;
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
