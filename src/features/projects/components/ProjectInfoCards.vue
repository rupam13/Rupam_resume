<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { projectId } from "../../../composables/useRouteObserver";

interface CardInfo {
  title: string;
  icon: string;
  content: string[];
  teaser?: string;
}

const props = defineProps<{
  cards: CardInfo[];
  variant?: "default" | "cartoon";
}>();

const currentCardIndex = ref(0);

const getDisplayCards = computed(() => {
  if (props.cards.length <= 3) return props.cards;

  const cards: typeof props.cards = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentCardIndex.value + i) % props.cards.length;
    const card = props.cards[index];
    if (card) {
      cards.push(card);
    }
  }
  return cards;
});

const rotateCards = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % props.cards.length;
};

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  // Rotate cards every hour (3600000ms)
  intervalId = setInterval(rotateCards, 3600000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

// Cartoon-style checking
const isCartoon = computed(() => {
  return props.variant === "cartoon" || projectId.value === "ai-voice-agent";
});

// Keep track of flipped state for each displayed card index
const flippedCards = ref<Record<number, boolean>>({});

const toggleFlip = (index: number) => {
  flippedCards.value[index] = !flippedCards.value[index];
};

// Reset flips when cards rotate or change
watch(getDisplayCards, () => {
  flippedCards.value = {};
});

// Dynamic neon outline and glow colors for cartoon variant
const getCardStyle = (index: number) => {
  if (!isCartoon.value) return {};

  const colors = [
    { border: "#00f0ff", bg: "rgba(0, 240, 255, 0.04)", shadow: "#005f66" }, // Neon Cyan
    { border: "#ff007f", bg: "rgba(255, 0, 127, 0.04)", shadow: "#660033" }, // Neon Pink
    { border: "#00ff66", bg: "rgba(0, 255, 102, 0.04)", shadow: "#006629" }, // Neon Green
  ];

  const fallback = { border: "#00f0ff", bg: "rgba(0, 240, 255, 0.04)", shadow: "#005f66" };
  const color = colors[index % colors.length] || fallback;

  return {
    "--neon-color": color.border,
    "--neon-bg": color.bg,
    "--neon-shadow": color.shadow,
  };
};
</script>

<template>
  <div class="project-info-cards" :class="{ 'theme-cartoon': isCartoon }">
    <div class="cards-container">
      <div
        v-for="(card, index) in getDisplayCards"
        v-show="card"
        :key="`${card?.title}-${index}`"
        class="info-card-wrapper"
        :class="{ 'is-flipped': flippedCards[index] }"
        @click="toggleFlip(index)"
      >
        <div class="info-card-inner">
          <!-- CARD FRONT -->
          <div class="info-card card-front" :style="getCardStyle(index)">
            <div class="card-header">
              <div class="card-icon-badge">
                <span class="card-icon">{{ card?.icon }}</span>
              </div>
              <h3 class="card-title">{{ card?.title }}</h3>
            </div>
            <div class="card-divider"></div>
            <div class="card-body-front">
              <p class="card-teaser">
                {{ card?.teaser || "Click to flip and reveal details! 🔄" }}
              </p>
            </div>
            <div class="card-footer-badge">
              <span class="flip-hint-badge">Reveal Details ➜</span>
            </div>
          </div>

          <!-- CARD BACK -->
          <div class="info-card card-back" :style="getCardStyle(index)">
            <div class="card-header">
              <div class="card-icon-badge">
                <span class="card-icon">{{ card?.icon }}</span>
              </div>
              <h3 class="card-title">{{ card?.title }}</h3>
            </div>
            <div class="card-divider"></div>
            <div class="card-content">
              <ul class="card-list">
                <li v-for="(item, itemIndex) in card?.content" :key="`${item}-${itemIndex}`" class="card-item">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="card-footer-badge">
              <span class="flip-hint-badge flip-back-badge">↩ Back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rotation-indicator" v-if="props.cards.length > 3">
      <span class="indicator-text">Cards rotate every hour</span>
      <div class="indicator-dots">
        <div
          v-for="(_, index) in props.cards"
          :key="`dot-${index}`"
          class="indicator-dot"
          :class="{ active: index === currentCardIndex }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes cardBorderGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3), inset 0 0 20px rgba(102, 126, 234, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.5), inset 0 0 30px rgba(102, 126, 234, 0.15);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes badgePulse {
  0%, 100% {
    transform: rotate(-2deg) scale(1);
  }
  50% {
    transform: rotate(-1deg) scale(1.03);
  }
}

.project-info-cards {
  grid-column: 1 / 13;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  align-items: center;
  justify-content: center;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  width: 100%;

  @include mixins.mq("md") {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }

  @include mixins.mq("lg") {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
  }
}

/* 3D FLIP CONTAINER SETUP */
.info-card-wrapper {
  perspective: 1200px;
  width: 100%;
  height: 330px;
  cursor: pointer;
  animation: slideIn 0.6s ease-out;

  @include mixins.mq("md") {
    height: 310px;
  }

  @include mixins.mq("lg") {
    height: 290px;
  }

  /* Support for height in cases of wrapping text */
  @media (max-width: 480px) {
    height: 350px;
  }

  --rotation: 0deg;

  &.is-flipped {
    --rotation: 180deg;
  }
}

.info-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  transform: rotateY(var(--rotation));
}

.info-card-wrapper:hover {
  .info-card-inner {
    transform: translateY(-8px) rotateY(var(--rotation));
  }
}

/* BASE CARD STYLING */
.info-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  backdrop-filter: blur(10px);
  animation: cardBorderGlow 3s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.card-front {
  z-index: 2;
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.card-icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  line-height: 1;
  min-width: 42px;
  height: 42px;
  filter: drop-shadow(0 2px 4px rgba(102, 126, 234, 0.2));
}

.card-title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-text-400);
  line-height: 1.3;
  margin: 0;
  text-align: left;
}

.card-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.3) 50%,
    transparent 100%);
  margin-bottom: var(--space-md);
}

.card-body-front {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--space-sm);
}

.card-teaser {
  font-size: var(--font-size-md);
  color: var(--color-text-300);
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
  text-align: center;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.card-item {
  font-size: var(--font-size-sm);
  color: var(--color-text-300);
  font-weight: 500;
  line-height: 1.45;
  padding-left: var(--space-md);
  position: relative;
  text-align: left;

  &::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: rgba(102, 126, 234, 0.6);
    font-weight: 700;
  }
}

.card-footer-badge {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  padding-top: var(--space-sm);
}

.flip-hint-badge {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.4);
  padding: var(--space-xxs) var(--space-xs);
  border-radius: var(--radius-sm);
  background: rgba(102, 126, 234, 0.05);
  transition: all 0.2s ease;
}

/* CARTOON NE-BRUTALIST STYLING OVERRIDES */
.theme-cartoon {
  .info-card-wrapper {
    height: 360px;

    @include mixins.mq("md") {
      height: 330px;
    }

    @include mixins.mq("lg") {
      height: 310px;
    }

    @media (max-width: 480px) {
      height: 390px;
    }
  }

  .info-card {
    background: #0d0d12;
    border: 3.5px solid var(--neon-color);
    box-shadow: 7px 7px 0px 0px #000;
    border-radius: 20px;
    animation: none; /* remove glow animation */
    
    // Custom neon background glow inside card
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 50%, var(--neon-bg) 0%, transparent 80%);
      opacity: 0.8;
      pointer-events: none;
      z-index: 1;
      border-radius: 16px;
    }
  }

  .card-header, .card-divider, .card-body-front, .card-content, .card-footer-badge {
    z-index: 2; /* place above the background glow */
  }

  .card-icon-badge {
    border: 2.5px solid var(--neon-color);
    background: #161622;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    box-shadow: 2px 2px 0px #000;
    font-size: 26px;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #ffffff;
    text-shadow: 1px 1px 0px #000;
  }

  .card-divider {
    height: 3px;
    background: repeating-linear-gradient(
      45deg,
      var(--neon-color),
      var(--neon-color) 6px,
      transparent 6px,
      transparent 12px
    );
    opacity: 0.85;
    border: none;
  }

  .card-teaser {
    font-size: 1.05rem;
    color: #e2e2ec;
    font-weight: 700;
    line-height: 1.5;
    font-style: normal;
    text-shadow: 1px 1px 0px #000;
  }

  .card-item {
    font-size: var(--font-size-sm);
    color: #e2e2ec;
    font-weight: 600;
    line-height: 1.5;
    padding-left: 20px;
    text-shadow: 0.5px 0.5px 0px #000;

    &::before {
      content: "⚡";
      font-size: 10px;
      color: var(--neon-color);
      left: 0;
      top: 1px;
    }
  }

  .flip-hint-badge {
    background-color: var(--neon-color);
    color: #000000;
    font-weight: 900;
    font-size: 0.72rem;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 6px;
    border: 2.5px solid #000000;
    display: inline-block;
    box-shadow: 2.5px 2.5px 0px #000000;
    animation: badgePulse 2s ease-in-out infinite;
    letter-spacing: 0.05em;

    &.flip-back-badge {
      background-color: #1a1a24;
      color: var(--neon-color);
      border-color: var(--neon-color);
      box-shadow: 2px 2px 0px #000000;
      animation: none;
    }
  }

  .info-card-wrapper:hover {
    .info-card {
      box-shadow: 10px 10px 0px 0px #000;
    }
  }
}

.rotation-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.indicator-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-300);
  font-weight: 500;
  opacity: 0.7;
}

.indicator-dots {
  display: flex;
  gap: var(--space-xs);
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  &.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    width: 12px;
    border-radius: 2px;
  }
}
</style>
