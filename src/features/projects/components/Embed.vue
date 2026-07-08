<script setup lang="ts">
import { computed, ref, onMounted, watchEffect } from "vue";
import gsap from "gsap";

const wrapperRef = ref<HTMLDivElement | null>(null);
const embedRef = ref<HTMLDivElement | null>(null);

export interface Props {
  src: string;
  height?: number | string;
  width?: number | string;
  title?: string;
  caption?: string;
  index: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: "399",
  width: "504",
});

const wrapperClasses = computed(() => {
  return {
    "project-embed": true,
  };
});

const containerStyle = computed(() => ({
  maxWidth: typeof props.width === "number" ? `${props.width}px` : props.width,
}));

watchEffect(async (onInvalidate) => {
  if (!wrapperRef.value) {
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.value,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reset",
    },
  });
  tl.fromTo(embedRef.value, { scale: 0.8, opacity: 0.8 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power1.out" }, 0);

  onInvalidate(() => {
    tl.kill();
    gsap.set(embedRef.value, { scale: 1, opacity: 1 });
  });
});

onMounted(async () => {
  // Load LinkedIn script if embed is from LinkedIn
  if (props.src.includes("linkedin.com")) {
    // Remove any existing LinkedIn scripts to avoid duplicates
    const existingScript = document.querySelector('script[src*="linkedin.com"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/in.js";
      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = `lang: en_US`;
      document.body.appendChild(script);
    }
  }
});
</script>

<template>
  <div :class="wrapperClasses" ref="wrapperRef">
    <div class="project-embed-content" :style="containerStyle" ref="embedRef">
      <iframe
        :src="props.src"
        :height="props.height"
        :width="props.width"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        :title="props.title || 'Embedded content'"
        class="project-embed-iframe"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-embed {
  width: 100%;
  height: auto;
  grid-column: 1 / 13;
  justify-self: center;
  position: relative;
  display: flex;
  justify-content: center;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
  }

  &-content {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: var(--color-background-300);
  }

  &-iframe {
    width: 100%;
    min-height: 400px;
    display: block;
    border: none;
  }
}
</style>
