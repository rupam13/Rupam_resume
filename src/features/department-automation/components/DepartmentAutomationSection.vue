<script setup lang="ts">
import { ref, computed } from "vue";
import { departmentsData, type Department } from "../data/departmentsData";
import Tag from "../../../components/Tag.vue";
import type { TagVariant } from "../../../components/tagVariants";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";

const activeDepartmentId = ref<string>("hr");

const activeDepartment = computed<Department>(() => {
  const found = departmentsData.find((d) => d.id === activeDepartmentId.value);
  return (found ?? departmentsData[0]) as Department;
});

const selectDepartment = (id: string) => {
  activeDepartmentId.value = id;
};

const mapTagToVariant = (tag: string): TagVariant => {
  const normalized = tag.toLowerCase();
  if (normalized.includes("n8n")) return "n8n";
  if (normalized.includes("power bi")) return "power-bi";
  if (normalized.includes("copilot")) return "copilot-studio";
  if (normalized.includes("servicenow")) return "servicenow";
  if (normalized.includes("power automate")) return "power-automate";
  if (normalized.includes("python")) return "javascript";
  if (normalized.includes("openai") || normalized.includes("claude") || normalized.includes("llm")) return "agentic-ai";
  return "mcp";
};
</script>

<template>
  <section class="dept-automation-section" id="automation-opportunities">
    <NotchSection class="dept-notch-start" />
    <NotchSection class="dept-notch-end" />

    <div class="dept-automation-container">
      <!-- Section Header -->
      <div class="dept-header">
        <div class="dept-title-wrapper">
          <Banner class="dept-title-banner" copy="AUTOMATION MATRIX" size="sm" animated />
          <h2 class="dept-title-copy">Cross-Department Automation Matrix</h2>
        </div>
        <p class="dept-subtitle">
          Explore possible automation opportunities, quantifiable time tracking telemetry, and tech stack workflows across all 10 business departments.
        </p>

        <!-- KPI Impact Banner -->
        <div class="dept-kpi-banner">
          <div class="kpi-card">
            <span class="kpi-value">10</span>
            <span class="kpi-label">Departments Covered</span>
          </div>
          <div class="kpi-divider"></div>
          <div class="kpi-card">
            <span class="kpi-value">90%+</span>
            <span class="kpi-label">Avg. Handle Time Saved</span>
          </div>
          <div class="kpi-divider"></div>
          <div class="kpi-card">
            <span class="kpi-value">1,450+</span>
            <span class="kpi-label">Est. Annual Hrs Reclaimed</span>
          </div>
        </div>
      </div>

      <!-- Department Selector Tabs -->
      <div class="dept-tabs-wrapper">
        <button
          v-for="dept in departmentsData"
          :key="dept.id"
          :class="['dept-tab-btn', { 'dept-tab-active': dept.id === activeDepartmentId }]"
          @click="selectDepartment(dept.id)"
        >
          <span class="tab-icon">{{ dept.icon }}</span>
          <span class="tab-name">{{ dept.name }}</span>
        </button>
      </div>

      <!-- Active Department Content -->
      <div class="dept-content-box" v-if="activeDepartment">
        <div class="dept-info-header">
          <div class="dept-info-title-group">
            <span class="dept-main-icon">{{ activeDepartment.icon }}</span>
            <div>
              <h3 class="dept-info-title">{{ activeDepartment.name }}</h3>
              <p class="dept-info-desc">{{ activeDepartment.description }}</p>
            </div>
          </div>
        </div>

        <!-- Opportunities Grid -->
        <div class="opportunities-grid">
          <div
            v-for="opp in activeDepartment.opportunities"
            :key="opp.id"
            class="opp-card"
          >
            <div class="opp-card-header">
              <h4 class="opp-card-title">{{ opp.title }}</h4>
              <span :class="['opp-complexity-badge', `complexity-${opp.complexity.toLowerCase()}`]">
                {{ opp.complexity }} Complexity
              </span>
            </div>

            <!-- Problem & Solution -->
            <div class="opp-body">
              <div class="opp-block problem-block">
                <span class="block-icon">❌</span>
                <div>
                  <span class="block-label">Legacy Challenge:</span>
                  <p class="block-text">{{ opp.problem }}</p>
                </div>
              </div>

              <div class="opp-block solution-block">
                <span class="block-icon">⚡</span>
                <div>
                  <span class="block-label">Automated Solution:</span>
                  <p class="block-text">{{ opp.solution }}</p>
                </div>
              </div>
            </div>

            <!-- Time Tracking Telemetry Widget -->
            <div class="time-tracking-widget">
              <div class="widget-header">
                <span class="widget-icon">⏱️</span>
                <span class="widget-title">TIME SAVINGS & HANDLE TIME TELEMETRY</span>
              </div>
              <div class="time-metrics-grid">
                <div class="metric-item">
                  <span class="metric-label">Legacy Handle Time:</span>
                  <span class="metric-val legacy-val">{{ opp.legacyHandleTime }}</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">Automated AI Time:</span>
                  <span class="metric-val auto-val">{{ opp.automatedHandleTime }}</span>
                </div>
                <div class="metric-item highlight-metric">
                  <span class="metric-label">Speedup Factor:</span>
                  <span class="metric-val speedup-val">🚀 {{ opp.speedupPercentage }}</span>
                </div>
              </div>
            </div>

            <!-- Tech Stack & Impact Footer -->
            <div class="opp-card-footer">
              <div class="tech-stack-group">
                <span class="footer-label">Tech Stack:</span>
                <div class="tags-container">
                  <Tag
                    v-for="tech in opp.techStack"
                    :key="tech"
                    :variant="mapTagToVariant(tech)"
                  />
                </div>
              </div>
              <div class="impact-pill">
                <span>⏱️ {{ opp.timeSaved }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.dept-automation-section {
  position: relative;
  width: 100%;
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}

.dept-notch {
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
    color: var(--color-beige-400);
    --icon-color: var(--color-beige-400);
  }
}

.dept-automation-container {
  max-width: 1200px;
  margin: 0 auto;
}

.dept-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
}

.dept-title-wrapper {
  position: relative;
  padding-top: var(--space-md);
  margin-bottom: 12px;

  .dept-title-copy {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);
    color: #2d2a24;

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  .dept-title-banner {
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

.dept-subtitle {
  font-size: 1.05rem;
  color: #4a463d;
  max-width: 680px;
  margin: 0 auto 32px;
  line-height: 1.6;
  font-weight: 600;
}

.dept-kpi-banner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: #fcfbf9;
  border: 2.5px solid #2d2a24;
  box-shadow: 4px 4px 0px #2d2a24;
  border-radius: var(--radius-lg);
  padding: 18px 40px;

  .kpi-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .kpi-value {
      font-size: 1.7rem;
      font-weight: 900;
      color: #2d2a24;
    }

    .kpi-label {
      font-size: 0.78rem;
      color: #635e53;
      font-weight: 700;
    }
  }

  .kpi-divider {
    width: 2px;
    height: 36px;
    background: #2d2a24;
  }
}

.dept-tabs-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 36px;
}

.dept-tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #fcfbf9;
  border: 2px solid #2d2a24;
  box-shadow: 2.5px 2.5px 0px #2d2a24;
  border-radius: 30px;
  color: #2d2a24;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 4px 4px 0px #2d2a24;
  }

  &.dept-tab-active {
    background: #ff6d5a;
    color: #ffffff;
    border-color: #2d2a24;
    box-shadow: 4px 4px 0px #2d2a24;
    transform: scale(1.05) rotate(1deg);
  }

  .tab-icon {
    font-size: 1.05rem;
  }
}

.dept-content-box {
  background: #fcfbf9;
  border: 2.5px solid #2d2a24;
  box-shadow: 6px 6px 0px #2d2a24;
  border-radius: var(--radius-lg);
  padding: 36px;
}

.dept-info-header {
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 2px dashed rgba(45, 42, 36, 0.15);

  .dept-info-title-group {
    display: flex;
    align-items: center;
    gap: 16px;

    .dept-main-icon {
      font-size: 2.4rem;
      background: var(--color-beige-300);
      border: 2px solid #2d2a24;
      padding: 12px;
      border-radius: var(--radius-md);
      box-shadow: 2.5px 2.5px 0px #2d2a24;
    }

    .dept-info-title {
      font-size: 1.6rem;
      font-weight: 900;
      color: #2d2a24;
      margin-bottom: 4px;
    }

    .dept-info-desc {
      font-size: 0.95rem;
      color: #4a463d;
      font-weight: 600;
    }
  }
}

.opportunities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}

.opp-card {
  background: #ffffff;
  border: 2.5px solid #2d2a24;
  box-shadow: 4px 4px 0px #2d2a24;
  border-radius: var(--radius-md);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 0px #2d2a24;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 18px;

    .opp-card-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #2d2a24;
      line-height: 1.35;
    }

    .opp-complexity-badge {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 4px 10px;
      border: 2px solid #2d2a24;
      border-radius: 12px;
      white-space: nowrap;
      box-shadow: 2px 2px 0px #2d2a24;

      &.complexity-low {
        background: #2ecc71;
        color: #ffffff;
      }

      &.complexity-medium {
        background: #f1c40f;
        color: #2d2a24;
      }

      &.complexity-high {
        background: #ff6d5a;
        color: #ffffff;
      }
    }
  }
}

.opp-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;

  .opp-block {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    .block-icon {
      font-size: 1rem;
      margin-top: 2px;
    }

    .block-label {
      font-size: 0.75rem;
      font-weight: 800;
      color: #635e53;
      display: block;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .block-text {
      font-size: 0.88rem;
      color: #2d2a24;
      line-height: 1.45;
      font-weight: 600;
    }
  }
}

.time-tracking-widget {
  background: var(--color-beige-100);
  border: 2px solid #2d2a24;
  box-shadow: 2.5px 2.5px 0px #2d2a24;
  border-radius: var(--radius-sm);
  padding: 14px;
  margin-bottom: 20px;

  .widget-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;

    .widget-icon {
      font-size: 0.88rem;
    }

    .widget-title {
      font-size: 0.7rem;
      font-weight: 900;
      color: #2d2a24;
      letter-spacing: 0.05em;
    }
  }

  .time-metrics-grid {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;

    .metric-item {
      display: flex;
      flex-direction: column;

      .metric-label {
        font-size: 0.68rem;
        color: #635e53;
        font-weight: 700;
      }

      .metric-val {
        font-size: 0.82rem;
        font-weight: 800;

        &.legacy-val {
          color: #c0392b;
          text-decoration: line-through;
        }

        &.auto-val {
          color: #27ae60;
        }

        &.speedup-val {
          color: #2980b9;
          font-size: 0.88rem;
        }
      }
    }
  }
}

.opp-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  .tech-stack-group {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    .footer-label {
      font-size: 0.75rem;
      color: #635e53;
      font-weight: 700;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
  }

  .impact-pill {
    background: #0099b8;
    border: 2px solid #2d2a24;
    box-shadow: 2px 2px 0px #2d2a24;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 800;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>
