<script setup lang="ts">
import Link from "../../../components/Link.vue";
import Notch from "../../../components/Notch.vue";
import ArrowRightLong from "../../../components/icons/ArrowRightLong.vue";
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonRound from "../../../components/ButtonRound.vue";
import { t } from "../../../i18n/utils/translate";
import Plus from "../../../components/icons/Plus.vue";

import type { ProjectPreview } from "../../../content/types";

const tlRef = ref<gsap.core.Timeline | null>(null);
const wrapperRef = ref<HTMLDivElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);

const props = defineProps<{
  preview?: ProjectPreview;
}>();

onMounted(async () => {
  if (!wrapperRef.value || ScrollTrigger.isInViewport(wrapperRef.value)) {
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.value,
      start: "top bottom",
    },
  });
  tl.fromTo(wrapperRef.value, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  tl.fromTo(imageRef.value, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);

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
  <Link
    class="preview-card children-unclickable"
    :to="props.preview.category ? `/${props.preview.category}/project/${props.preview.slug}` : `/project/${props.preview.slug}`"
    :aria-label="t('switch-to-project', { project: props.preview.title })"
    data-cursor="arrow"
    data-sound="click"
    data-hoversound="hover"
    v-if="props.preview"
  >
    <div class="preview-card-top" ref="wrapperRef">
      <div class="preview-card-image-wrapper">
        <div class="preview-card-image-container">
          <img :src="props.preview.thumbnail" :alt="props.preview.title" class="preview-card-image" ref="imageRef" />
        </div>
      </div>
      <div class="preview-card-overlay">
        <div class="preview-card-edge">
          <ButtonRound class="preview-card-button" variant="accent" renderAs="div">
            <ArrowRightLong class="preview-card-button-arrow" />
          </ButtonRound>
        </div>
        <Notch class="preview-card-notch preview-card-notch-left" />
        <Notch class="preview-card-notch preview-card-notch-right" />
      </div>
    </div>
    <div class="preview-card-content">
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ props.preview.title }}</h3>
        <p class="preview-card-description">{{ props.preview.description }}</p>
      </div>
      <div class="preview-card-metrics" v-if="props.preview.metrics && props.preview.metrics.length > 0">
        <div class="metrics-grid">
          <div class="metric-item" v-for="(metric, index) in props.preview.metrics" :key="index">
            <div class="metric-label">{{ metric.label }}</div>
            <div v-if="typeof metric.value === 'number' && metric.max" class="metric-bar-container">
              <div class="metric-bar">
                <div class="metric-bar-fill" :style="{ width: `${(metric.value / metric.max) * 100}%` }"></div>
              </div>
              <div class="metric-value">{{ metric.value }}%</div>
            </div>
            <div v-else class="metric-value-text">{{ metric.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </Link>

  <Link
    v-else
    class="preview-card preview-card-add-project children-unclickable"
    data-cursor="arrow-external"
    data-hoversound="hover"
    external
    href="https://github.com/rupam13/Rupam_resume/tree/main/public/data"
    title="Add a new project to GitHub - Copy project.sample.json and customize it"
  >
    <div class="preview-card-top preview-card-top-empty">
      <div class="preview-card-github-badge">GitHub</div>
      <Plus class="preview-card-top-empty-icon" />
    </div>
    <div class="preview-card-content">
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ t("start-a-new-project") }}</h3>
        <p class="preview-card-description-add">Edit on GitHub → Add your project JSON</p>
      </div>
    </div>
  </Link>
</template>

<style scoped lang="scss">
@keyframes borderGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3), inset 0 0 20px rgba(102, 126, 234, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.5), inset 0 0 30px rgba(102, 126, 234, 0.15);
  }
}

@keyframes progressFill {
  from {
    width: 0 !important;
  }
}

.preview-card {
  --hover: 0;
  position: relative;
  border-radius: var(--radius-xl);
  z-index: var(--z-index-layout);
  border: 2px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(10px);
  animation: borderGlow 3s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease-in-out;
  }

  @include mixins.hover {
    &:hover {
      --hover: 1;

      &::after {
        opacity: 1;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding-top: var(--space-xs);
  }

  &-overlay {
    @include mixins.hover {
      display: none;
    }
  }

  &-notch {
    position: absolute;
    color: var(--color-beige-400);
    --icon-color: var(--color-beige-400);
    transform: scale(-1) rotate(90deg);
    height: var(--radius-lg);

    &-left {
      bottom: 0;
      right: 50px;
    }

    &-right {
      bottom: 50px;
      right: 0;
    }
  }

  &-edge {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-beige-400);
    padding-left: 6px;
    padding-top: 6px;
    border-radius: 32px 0 0 0;
    padding-right: 1px;
    padding-bottom: 1px;
  }

  &-button {
    &-arrow {
      transition: transform 0.1s ease-in-out;
      width: 100%;
      transform: rotate(calc(var(--hover) * -45deg));
    }
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-container {
      transition: transform 0.1s ease-in-out;
      transform: scale(calc(1 + var(--hover) * 0.02));
      aspect-ratio: 1/1;
    }

    &-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: var(--color-beige-500);
    }
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;

    &-empty {
      border: 4px dashed var(--color-grayscale-500);
      border-radius: var(--radius-lg);
      background-color: var(--color-grayscale-400);
      display: flex;
      align-items: center;
      justify-content: center;

      &-icon {
        width: var(--icon-size-lg);
        color: var(--color-text-300);
        --icon-color: var(--color-text-300);
        --stroke-width: 4px;
      }
    }
  }

  &-copys {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;
    color: var(--color-text-400);
  }

  &-description {
    font-size: var(--font-size-md);
    color: var(--color-text-300);
    font-weight: 500;
  }

  &-metrics {
    margin-top: var(--space-md);
    padding: var(--space-md);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%);
    border-radius: var(--radius-md);
    border: 1.5px solid rgba(102, 126, 234, 0.35);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  &-add-project {
    .preview-card-top-empty {
      border-color: var(--color-accent-400);
      background-color: rgba(102, 126, 234, 0.1);

      @include mixins.hover {
        border-color: var(--color-accent-300);
        background-color: rgba(102, 126, 234, 0.2);
      }
    }

    .preview-card-github-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      z-index: 10;
    }

    .preview-card-description-add {
      color: var(--color-accent-400);
      font-size: var(--font-size-sm);
    }
  }
}

.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.metric-label {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-text-300);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  text-shadow: 0 1px 2px rgba(102, 126, 234, 0.1);
}

.metric-bar-container {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.metric-bar {
  flex: 1;
  height: 8px;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 4px;
  overflow: hidden;
  border: 1.5px solid rgba(102, 126, 234, 0.25);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.metric-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 3px;
  animation: progressFill 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.3);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.metric-value {
  font-size: var(--font-size-sm);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-width: 38px;
  text-align: right;
  letter-spacing: 0.5px;
}

.metric-value-text {
  font-size: var(--font-size-sm);
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
