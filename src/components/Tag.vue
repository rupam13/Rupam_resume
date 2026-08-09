<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-copilot-studio {
      background-color: #0099b8;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(-1.2deg);
    }

    &-agentic-ai {
      background-color: #db0062;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(1deg);
    }

    &-ivr {
      background-color: #1aa34a;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(-1.5deg);
    }

    &-servicenow {
      background-color: #fcfbf9;
      color: #2d2a24;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(1.5deg);
    }

    &-mcp {
      background-color: #2d2a24;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(-0.8deg);
    }

    &-n8n {
      background-color: #ff6d5a;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(1.2deg);
    }

    &-power-bi {
      background-color: #f2c811;
      color: #2d2a24;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(-1deg);
    }

    &-kpi-measurement {
      background-color: #00b4d8;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(1.4deg);
    }

    &-direct-line-api {
      background-color: #7209b7;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(-1.5deg);
    }

    &-handoff {
      background-color: #4361ee;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(1deg);
    }

    &-time-tracking {
      background-color: #3a0ca3;
      color: #ffffff;
      border-color: #2d2a24;
      box-shadow: 2.5px 2.5px 0px #2d2a24;
      transform: rotate(-1.2deg);
    }
  }

  &-variant-copilot-studio,
  &-variant-agentic-ai,
  &-variant-ivr,
  &-variant-servicenow,
  &-variant-mcp,
  &-variant-n8n,
  &-variant-power-bi,
  &-variant-kpi-measurement,
  &-variant-direct-line-api,
  &-variant-handoff,
  &-variant-time-tracking {
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;

    &:hover {
      transform: scale(1.08) rotate(0deg);
      box-shadow: 4px 4px 0px #2d2a24;
    }
  }
}
</style>
