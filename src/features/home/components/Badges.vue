<script setup lang="ts">
import { computed } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { resolveAbsolutePath } from "../../../composables/useRouteObserver";
import { useRole } from "../../../composables/useRole";

interface BadgeItem {
  title: string;
  description: string;
  image: string;
}

const { currentRole } = useRole();

const badges = computed<BadgeItem[]>(() => {
  return [
    {
      title: "Microsoft Copilot Studio",
      description: "Credentials in conversational AI design, generative answers, custom actions, and multi-agent systems orchestration.",
      image: resolveAbsolutePath("/images/badges/microsoft_copilot.jpg"),
    },
    {
      title: "ServiceNow Certified Administrator",
      description: "Certified System Administrator (CSA) credential covering platform configuration, schema definition, flow design, and admin governance.",
      image: resolveAbsolutePath("/images/badges/servicenow_csa.jpg"),
    },
    {
      title: "Lean Six Sigma White Belt",
      description: "Quality management and process improvement certification covering DMAIC methodology, lean standards, and operational efficiency.",
      image: resolveAbsolutePath("/images/badges/six_sigma_white_belt.jpg"),
    },
    {
      title: "Copilot Studio Agent Academy - Recruit",
      description: "Official credential badge for completing the Microsoft Copilot Studio Agent Academy Recruit level.",
      image: resolveAbsolutePath("/images/badges/agent_academy_recruit.jfif"),
    },
    {
      title: "Badge Bandit",
      description: "Specialized milestone achievement badge earned in Microsoft Copilot Studio Agent Academy training.",
      image: resolveAbsolutePath("/images/badges/badge_bandit.png"),
    },
  ];
});
</script>

<template>
  <div class="badges" v-if="currentRole === 'ai'">
    <NotchSection class="badges-notch-start" />
    <NotchSection class="badges-notch-end" />
    <div class="grid">
      <div class="badges-title">
        <Banner class="badges-title-banner" copy="CREDENTIALS" size="sm" animated />
        <h2 class="badges-title-copy">Badges & Achievements</h2>
      </div>
    </div>
    <div class="grid">
      <div class="badges-cards">
        <div class="badge-card" v-for="badge in badges" :key="badge.title">
          <div class="badge-card-top">
            <div class="badge-card-image-wrapper">
              <div class="badge-card-image-container">
                <img :src="badge.image" :alt="badge.title" class="badge-card-image" />
              </div>
            </div>
          </div>
          <div class="badge-card-content">
            <h3 class="badge-card-title">{{ badge.title }}</h3>
            <p class="badge-card-description">{{ badge.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.badges {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  min-height: calc(var(--lvh) * 60 + var(--radius-xxl));
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-cards {
    max-width: 100%;
    flex: 1;
    grid-column: 1 / span 12;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("md") {
      grid-column: 1 / span 12;
    }

    @include mixins.mq("lg") {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-column: 3 / span 8;
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
}

.badge-card {
  position: relative;
  border-radius: var(--radius-xl);
  z-index: var(--z-index-layout);
  border: 2px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.25);
    border-color: rgba(102, 126, 234, 0.6);

    .badge-card-image {
      transform: scale(1.04);
    }
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    background: #0d0f12; // deep dark background for hologram style badges to pop
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid rgba(102, 126, 234, 0.2);
  }

  &-image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &-image-container {
    width: 100%;
    height: 100%;
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    flex-grow: 1;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 239, 230, 0.9) 100%);
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 800;
    color: var(--color-text-400);
  }

  &-description {
    font-size: var(--font-size-md);
    color: var(--color-text-300);
    font-weight: 500;
    line-height: 1.45;
  }
}
</style>
