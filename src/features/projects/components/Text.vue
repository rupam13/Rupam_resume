<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  title?: string;
  text?: string;
}

const props = defineProps<Props>();

const classes = computed(() => {
  return {
    text: true,
    "text-with-title": !!props.title,
  };
});
</script>

<template>
  <div :class="classes" v-if="props.title">
    <h3 class="text-title">{{ props.title }}</h3>
    <p class="text-content" v-html="props.text"></p>
  </div>
  <p v-else class="text" v-html="props.text"></p>
</template>

<style scoped lang="scss">
.text {
  grid-column: 1 / 13;
  line-height: var(--line-height-copy);
  width: 100%;
  font-size: var(--font-size-md);
  letter-spacing: 0.3px;
  text-align: center;

  @include mixins.mq("md") {
    font-size: var(--font-size-lg);
  }

  &-with-title {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    width: 100%;
    align-items: center;

    @include mixins.mq("md") {
      gap: var(--space-lg);
    }
  }

  &-title {
    font-size: var(--font-size-title-sm);
    font-weight: 700;
    line-height: var(--line-height-title);
    color: var(--color-text-400);
    letter-spacing: -0.5px;
    margin-bottom: var(--space-sm);
    width: 100%;
    text-align: center;

    @include mixins.mq("md") {
      font-size: var(--font-size-title-md);
    }
  }

  &-content {
    font-size: var(--font-size-md);
    line-height: 1.8;
    color: var(--color-text-300);
    width: 100%;
    text-align: center;

    @include mixins.mq("md") {
      font-size: var(--font-size-lg);
      line-height: 1.8;
    }
  }
}
</style>
