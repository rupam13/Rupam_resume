<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

interface CardInfo {
  title: string;
  icon: string;
  content: string[];
}

const props = defineProps<{
  cards: CardInfo[];
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
</script>

<template>
  <div class="project-info-cards">
    <div class="cards-container">
      <div
        v-for="(card, index) in getDisplayCards"
        v-show="card"
        :key="`${card?.title}-${index}`"
        class="info-card"
      >
        <div class="card-header">
          <div class="card-icon">{{ card?.icon }}</div>
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

.project-info-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
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

.info-card {
  position: relative;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  backdrop-filter: blur(10px);
  animation: cardBorderGlow 3s ease-in-out infinite, slideIn 0.6s ease-out;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  @include mixins.hover {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 48px rgba(102, 126, 234, 0.25);
      border-color: rgba(102, 126, 234, 0.5);
    }
  }
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.card-icon {
  font-size: 28px;
  line-height: 1;
  min-width: 40px;
  filter: drop-shadow(0 2px 4px rgba(102, 126, 234, 0.2));
}

.card-title {
  font-size: var(--font-size-title-xs);
  font-weight: 700;
  color: var(--color-text-400);
  line-height: 1.3;
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
  gap: var(--space-sm);
}

.card-item {
  font-size: var(--font-size-sm);
  color: var(--color-text-300);
  font-weight: 500;
  line-height: 1.5;
  padding-left: var(--space-md);
  position: relative;

  &::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: rgba(102, 126, 234, 0.6);
    font-weight: 700;
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
