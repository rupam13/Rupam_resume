<script setup lang="ts">
import { computed, ref } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import Link from "../../../components/Link.vue";
import { resolveAbsolutePath } from "../../../composables/useRouteObserver";
import { useRole } from "../../../composables/useRole";

interface BadgeItem {
  title: string;
  description: string;
  image: string;
  credentialUrl?: string;
  proofImage?: string;
}

const { currentRole } = useRole();
const activeModalImage = ref<string | null>(null);

const openModal = (image?: string) => {
  if (image) {
    activeModalImage.value = image;
  }
};

const closeModal = () => {
  activeModalImage.value = null;
};

const badges = computed<BadgeItem[]>(() => {
  if (currentRole.value === "servicenow") {
    return [
      {
        title: "ServiceNow CIS - Data Foundation",
        description: "Certified Implementation Specialist - Data Foundation (CIS-DF) credential covering ServiceNow data architecture, discovery, and schema management.",
        image: resolveAbsolutePath("/images/badges/servicenow_cis_df.jpg"),
      },
      {
        title: "ServiceNow Certified System Administrator (CSA)",
        description: "Certified System Administrator credential demonstrating expertise in configuring, managing, and maintaining ServiceNow platforms.",
        image: resolveAbsolutePath("/images/badges/servicenow_csa.jpg"),
      },
    ];
  }
  return [
    {
      title: "Microsoft Applied Skills: Create agents in Microsoft Copilot Studio",
      description: "Microsoft Applied Skills: Create agents in Microsoft Copilot Studio. Covers conversational design, generative answers, and action workflows.",
      image: resolveAbsolutePath("/images/badges/microsoft_copilot.jpg"),
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-in/rupamwadibhasme-6938/5BB13013A0C50C81?sharingId=8BE7A19FADEA5C70",
    },
    {
      title: "ServiceNow CIS - Data Foundation",
      description: "Certified Implementation Specialist - Data Foundation (CIS-DF) credential covering ServiceNow data architecture, discovery, and schema management.",
      image: resolveAbsolutePath("/images/badges/servicenow_cis_df.jpg"),
    },
    {
      title: "Agent Academy - Learn MCP Specialist",
      description: "Earned for completing the Copilot Studio Agent Academy Special Ops mission: Microsoft Learn MCP Server.",
      image: resolveAbsolutePath("/images/badges/agent_academy_mcp.jpg"),
      credentialUrl: "https://globalai.community/badges/96970e56-65d3-4b56-b01e-a455782bc577",
    },
    {
      title: "Cowork Collective - Audit Ace",
      description: "Earners of this badge have successfully completed the following Cowork Collective mission from Copilot Studio Agent Academy: 🔒 The Compliance Packet",
      image: resolveAbsolutePath("/images/badges/cowork_collective_audit_ace.jpg"),
      credentialUrl: "https://globalai.community/badges/6978b635-b3d4-4402-8893-df6257b71776",
    },
    {
      title: "Copilot Studio Agent Academy - Recruit",
      description: "Official credential badge for completing the Microsoft Copilot Studio Agent Academy Recruit level.",
      image: resolveAbsolutePath("/images/badges/agent_academy_recruit.jfif"),
      credentialUrl: "https://globalai.community/badges/02926c49-5333-4248-b704-d16c6c7f4aa0",
    },
    {
      title: "Enterprise SPOT Award - Continuous Improvement & Automation",
      description: "Recognized by leadership for exceptional performance in Continuous Improvement (CI), driving key initiatives including efficiency trackers, HR use cases, GBS site creation, and KPI template design with Accenture.",
      image: resolveAbsolutePath("/images/badges/spoat_award_1st.png"),
      proofImage: resolveAbsolutePath("/images/badges/spot_award_1_proof.png"),
    },
    {
      title: "Enterprise SPOT Award - ISO 9001 QMS Certification",
      description: "Recognized for exceptional ownership and contribution to Magnit India's successful ISO 9001 Certification journey as Process Champion documenting, standardizing, and strengthening QMS business processes.",
      image: resolveAbsolutePath("/images/badges/spoat_award_2nd.png"),
      proofImage: resolveAbsolutePath("/images/badges/spot_award_2_proof.png"),
    },
    {
      title: "Badge Bandit",
      description: "Specialized milestone achievement badge earned in Microsoft Copilot Studio Agent Academy training.",
      image: resolveAbsolutePath("/images/badges/badge_bandit.png"),
      credentialUrl: "https://globalai.community/badges/8ce995a3-2f4f-4243-b0cd-c516288f4723",
    },
  ];
});
</script>

<template>
  <div class="badges">
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
        <component
          :is="badge.credentialUrl ? Link : 'div'"
          class="badge-card"
          v-for="badge in badges"
          :key="badge.title"
          v-bind="badge.credentialUrl ? { href: badge.credentialUrl, external: true, target: '_blank', 'data-cursor': 'arrow-external', 'data-hoversound': 'hover' } : { onClick: () => openModal(badge.proofImage) }"
        >
          <div class="badge-card-top">
            <div class="badge-card-image-wrapper">
              <div class="badge-card-image-container">
                <img :src="badge.image" :alt="badge.title" class="badge-card-image" />
              </div>
            </div>

            <!-- Hover Popover Preview for Leadership Proof -->
            <div v-if="badge.proofImage" class="proof-popover" @click.stop="openModal(badge.proofImage)">
              <div class="proof-popover-tag">💬 Hover / Click to view Jivesh Govil's recognition comment</div>
              <div class="proof-popover-card">
                <img :src="badge.proofImage" alt="Jivesh Govil Recognition Comment" class="proof-popover-img" />
              </div>
            </div>
          </div>

          <div class="badge-card-content">
            <h3 class="badge-card-title">{{ badge.title }}</h3>
            <p class="badge-card-description">{{ badge.description }}</p>
            <div class="badge-card-footer">
              <span v-if="badge.credentialUrl" class="verify-hint-badge">Verify Credential ➜</span>
              <button v-else-if="badge.proofImage" @click.stop="openModal(badge.proofImage)" class="verify-hint-badge proof-button">
                💬 View Leadership Comment ➜
              </button>
            </div>
          </div>
        </component>
      </div>
    </div>

    <!-- Full-screen Lightbox Modal for Leadership Recognition Screenshot -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="activeModalImage" class="proof-modal-overlay" @click="closeModal">
          <div class="proof-modal-content" @click.stop>
            <button class="proof-modal-close" @click="closeModal" aria-label="Close modal">✕</button>
            <div class="proof-modal-header">
              <h3>💬 Official Leadership Recognition — Jivesh Govil</h3>
              <p>Continuous Improvement & Quality Management Leadership Award</p>
            </div>
            <div class="proof-modal-body">
              <img :src="activeModalImage" alt="Jivesh Govil Recognition Comment Screenshot" class="proof-modal-image" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
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
  text-decoration: none;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
  display: flex;
  flex-direction: column;
  overflow: visible;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.35);
    border-color: rgba(102, 126, 234, 0.8);

    .badge-card-image {
      transform: scale(1.04);
    }

    .verify-hint-badge {
      background: #667eea;
      color: #ffffff;
      border-color: #667eea;
      box-shadow: 0 0 12px rgba(102, 126, 234, 0.5);
    }

    .proof-popover-card {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateY(0);
    }
  }

  &-top {
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    background: #0d0f12;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid rgba(102, 126, 234, 0.2);
    border-top-left-radius: var(--radius-xl);
    border-top-right-radius: var(--radius-xl);
    overflow: hidden;
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
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 239, 230, 0.95) 100%);
    border-bottom-left-radius: var(--radius-xl);
    border-bottom-right-radius: var(--radius-xl);
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

  &-footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    padding-top: var(--space-xs);
  }
}

/* Hover Popover Preview */
.proof-popover {
  position: absolute;
  inset: 0;
  z-index: 10;

  &-tag {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    background: rgba(13, 15, 18, 0.85);
    color: #ffd700;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 6px;
    text-align: center;
    border: 1px solid rgba(255, 215, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 12;
  }

  &-card {
    position: absolute;
    inset: 0;
    background: #0d0f12;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.95) translateY(10px);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  &-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.verify-hint-badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.4);
  padding: var(--space-xxs) var(--space-xs);
  border-radius: var(--radius-sm);
  background: rgba(102, 126, 234, 0.05);
  transition: all 0.25s ease;
  letter-spacing: 0.5px;
}

.proof-button {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff !important;
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.5) !important;
  }
}

/* Full-Screen Lightbox Modal Styles */
.proof-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
}

.proof-modal-content {
  position: relative;
  background: #0d0f12;
  border: 2px solid rgba(102, 126, 234, 0.5);
  border-radius: var(--radius-xl);
  width: 90vw;
  max-width: 850px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  overflow: hidden;
}

.proof-modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 900;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 20;

  &:hover {
    background: rgba(239, 68, 68, 0.9);
    transform: scale(1.1);
  }
}

.proof-modal-header {
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);

  h3 {
    font-size: 1.1rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 4px;
  }
}

.proof-modal-body {
  padding: var(--space-md);
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d0f12;
}

.proof-modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
