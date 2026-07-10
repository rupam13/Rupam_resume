<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  title: string;
  icon?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const cardRef = ref<HTMLDivElement | null>(null);
const tlRef = ref<gsap.core.Timeline | null>(null);

onMounted(() => {
  if (!cardRef.value) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cardRef.value,
      start: "top 80%",
    },
  });

  tl.fromTo(
    cardRef.value,
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out" },
    0
  );

  tlRef.value = tl;
});

onUnmounted(() => {
  if (tlRef.value) {
    tlRef.value.kill();
    tlRef.value = null;
  }
});
</script>

<template>
  <div ref="cardRef" class="section-card">
    <div class="section-card-header">
      <div v-if="props.icon" class="section-card-icon">{{ props.icon }}</div>
      <div class="section-card-title-wrapper">
        <h2 class="section-card-title">{{ props.title }}</h2>
        <p v-if="props.subtitle" class="section-card-subtitle">{{ props.subtitle }}</p>
      </div>
    </div>
    <div class="section-card-divider"></div>
    <div class="section-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes sectionBorderGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3), inset 0 0 20px rgba(102, 126, 234, 0.08);
  }
  50% {
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.5), inset 0 0 30px rgba(102, 126, 234, 0.12);
  }
}

.section-card {
  position: relative;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  backdrop-filter: blur(10px);
  animation: sectionBorderGlow 4s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  transition: all 0.3s ease;

  @include mixins.hover {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 48px rgba(102, 126, 234, 0.25);
      border-color: rgba(102, 126, 234, 0.5);
    }
  }
}

.section-card-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.section-card-icon {
  font-size: 32px;
  line-height: 1;
  min-width: 48px;
  filter: drop-shadow(0 2px 8px rgba(102, 126, 234, 0.2));
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.section-card-title-wrapper {
  flex: 1;
}

.section-card-title {
  font-size: var(--font-size-title-lg);
  font-weight: 800;
  color: var(--color-text-400);
  line-height: 1.3;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-card-subtitle {
  font-size: var(--font-size-md);
  color: var(--color-text-300);
  margin: var(--space-xs) 0 0 0;
  font-weight: 500;
}

.section-card-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.4) 50%,
    transparent 100%);
  margin-bottom: var(--space-lg);
}

.section-card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
</style>
