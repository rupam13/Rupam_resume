<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import ProjectHero from "./ProjectHero.vue";
import ProjectComponent from "./ProjectComponent.vue";
import Link from "../../../components/Link.vue";
import NextProject from "./NextProject.vue";
import { locale } from "../../../i18n/store";
import { previews } from "../../../content/projects/previews";
import { ref, computed, watch, onMounted } from "vue";

import type { ProjectContent, ProjectPreview } from "../../../content/types";

const { content, projectId } = defineProps<{
  content: ProjectContent;
  projectId: string;
}>();

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const loadPreviews = async () => {
  // Load from TypeScript preview modules
  const module = await previews[locale.value as keyof typeof previews]();
  loadedPreviews.value = module.default;
};

const nextProject = computed(() => {
  const previewsList = loadedPreviews.value;
  if (!previewsList) return null;

  const currentIndex = previewsList.findIndex((p) => p.slug === projectId);
  if (currentIndex === -1) return null;

  const nextIndex = (currentIndex + 1) % previewsList.length;

  return previewsList[nextIndex];
});

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <Layout class="project-content">
    <ProjectHero :content="content" :projectId="projectId" />
    <div class="project-content-components">
      <div
        v-for="(component, index) in content.components"
        :key="`${component.type}-${index}`"
        class="grid project-content-grid"
      >
        <ProjectComponent :type="component.type" :props="component.props" :index="index" />
      </div>
    </div>
    <div class="grid project-content-next-project-grid">
      <Link
        v-if="nextProject"
        :to="nextProject.category ? `/${nextProject.category}/project/${nextProject.slug}` : `/project/${nextProject.slug}`"
        replace
        class="project-content-next-project"
        data-cursor="arrow"
        data-sound="click"
      >
        <NextProject :project="nextProject" />
      </Link>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.project-content {
  color: var(--color-text-400);

  &-grid {
    row-gap: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      row-gap: var(--space-lg);
      grid-column: 2 / 12;
    }

    @include mixins.mq("lg") {
      row-gap: var(--space-xxl);
      grid-column: 3 / 11;
    }

    @include mixins.mq("xl") {
      grid-column: 4 / 10;
    }
  }

  &-next-project {
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 3 / 11;
    }

    @include mixins.mq("lg") {
      grid-column: 4 / 10;
    }

    @include mixins.mq("xl") {
      grid-column: 5 / 9;
    }

    &-grid {
      padding: 0 var(--space-outer);
      padding-top: var(--space-xl);
      padding-bottom: var(--space-xxxl);
    }
  }

  &-components {
    padding: var(--space-lg) var(--space-outer);
    background-color: var(--color-background-400);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xxl);
    gap: var(--space-lg);

    @include mixins.mq("md") {
      padding: var(--space-xxl) var(--space-outer);
      gap: var(--space-xxl);
    }

    @include mixins.mq("lg") {
      gap: var(--space-xxxl);
    }
  }
}
</style>
