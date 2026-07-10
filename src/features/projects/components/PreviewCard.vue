<script setup lang="ts">
import Link from "../../../components/Link.vue";
import Notch from "../../../components/Notch.vue";
import ArrowRightLong from "../../../components/icons/ArrowRightLong.vue";
import gsap from "gsap";
import { onMounted, onUnmounted, ref, computed } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonRound from "../../../components/ButtonRound.vue";
import { t } from "../../../i18n/utils/translate";
import Plus from "../../../components/icons/Plus.vue";

import type { ProjectPreview } from "../../../content/types";

const tlRef = ref<gsap.core.Timeline | null>(null);
const wrapperRef = ref<HTMLDivElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);
const iframeRef = ref<HTMLIFrameElement | null>(null);

const props = defineProps<{
  preview?: ProjectPreview;
}>();

const isVideoThumbnail = computed(() => {
  return props.preview?.thumbnail?.includes("gemini.google");
});

const handleMouseEnter = () => {
  if (iframeRef.value && isVideoThumbnail.value) {
    const src = iframeRef.value.src;
    iframeRef.value.src = src + "?autoplay=1&mute=0";
  }
};

const handleMouseLeave = () => {
  if (iframeRef.value && isVideoThumbnail.value) {
    iframeRef.value.src = props.preview!.thumbnail;
  }
};

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
    <div class="preview-card-top" ref="wrapperRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="preview-card-image-wrapper">
        <div class="preview-card-image-container">
          <img v-if="!isVideoThumbnail" :src="props.preview.thumbnail" :alt="props.preview.title" class="preview-card-image" ref="imageRef" />
          <iframe v-else :src="props.preview.thumbnail" :alt="props.preview.title" class="preview-card-video" ref="iframeRef" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
.preview-card {
  --hover: 0;
  position: relative;
  border-radius: var(--radius-xl);
  z-index: var(--z-index-layout);

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background-color: var(--color-grayscale-400);
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
      aspect-ratio: 16/9;
    }

    &-wrapper {
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: var(--color-beige-500);
    }
  }

  &-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;

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
</style>
