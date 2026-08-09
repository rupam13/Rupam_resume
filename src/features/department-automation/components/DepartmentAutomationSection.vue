<script setup lang="ts">
import { ref, computed } from "vue";
import { departmentsData, type Department } from "../data/departmentsData";
import Tag from "../../../components/Tag.vue";
import type { TagVariant } from "../../../components/tagVariants";

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
    <div class="dept-automation-container">
      <!-- Section Header -->
      <div class="dept-header">
        <div class="dept-header-badge">
          <span class="badge-dot"></span>
          <span>ENTERPRISE AUTOMATION & TIME TELEMETRY</span>
        </div>
        <h2 class="dept-title">Cross-Department Automation Opportunity Matrix</h2>
        <p class="dept-subtitle">
          Quantifiable time tracking, ROI measurements, and tech stack workflows across 10 core business departments.
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
  width: 100%;
  padding: 80px 24px;
  background-color: #121316;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.dept-automation-container {
  max-width: 1200px;
  margin: 0 auto;
}

.dept-header {
  text-align: center;
  margin-bottom: 40px;

  &-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: rgba(255, 109, 90, 0.12);
    border: 1px solid rgba(255, 109, 90, 0.3);
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #ff6d5a;
    letter-spacing: 0.08em;
    margin-bottom: 16px;

    .badge-dot {
      width: 8px;
      height: 8px;
      background-color: #ff6d5a;
      border-radius: 50%;
      box-shadow: 0 0 8px #ff6d5a;
    }
  }
}

.dept-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #a0a5b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dept-subtitle {
  font-size: 1rem;
  color: #9499a8;
  max-width: 680px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.dept-kpi-banner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 36px;
  backdrop-filter: blur(10px);

  .kpi-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .kpi-value {
      font-size: 1.6rem;
      font-weight: 800;
      color: #00b4d8;
    }

    .kpi-label {
      font-size: 0.75rem;
      color: #9499a8;
      font-weight: 600;
    }
  }

  .kpi-divider {
    width: 1px;
    height: 32px;
    background: rgba(255, 255, 255, 0.12);
  }
}

.dept-tabs-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 36px;
}

.dept-tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  color: #a0a5b5;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    transform: translateY(-2px);
  }

  &.dept-tab-active {
    background: #ff6d5a;
    color: #ffffff;
    border-color: #ff6d5a;
    box-shadow: 0 4px 14px rgba(255, 109, 90, 0.35);
  }

  .tab-icon {
    font-size: 1rem;
  }
}

.dept-content-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
}

.dept-info-header {
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .dept-info-title-group {
    display: flex;
    align-items: center;
    gap: 16px;

    .dept-main-icon {
      font-size: 2.2rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 12px;
      border-radius: 16px;
    }

    .dept-info-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 4px;
    }

    .dept-info-desc {
      font-size: 0.9rem;
      color: #9499a8;
    }
  }
}

.opportunities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}

.opp-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(255, 109, 90, 0.4);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 18px;

    .opp-card-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.4;
    }

    .opp-complexity-badge {
      font-size: 0.7rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 12px;
      white-space: nowrap;

      &.complexity-low {
        background: rgba(46, 204, 113, 0.15);
        color: #2ecc71;
        border: 1px solid rgba(46, 204, 113, 0.3);
      }

      &.complexity-medium {
        background: rgba(241, 196, 15, 0.15);
        color: #f1c40f;
        border: 1px solid rgba(241, 196, 15, 0.3);
      }

      &.complexity-high {
        background: rgba(231, 76, 60, 0.15);
        color: #e74c3c;
        border: 1px solid rgba(231, 76, 60, 0.3);
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
      font-size: 0.95rem;
      margin-top: 2px;
    }

    .block-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: #9499a8;
      display: block;
      margin-bottom: 2px;
    }

    .block-text {
      font-size: 0.85rem;
      color: #d1d5db;
      line-height: 1.45;
    }
  }
}

.time-tracking-widget {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 20px;

  .widget-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;

    .widget-icon {
      font-size: 0.85rem;
    }

    .widget-title {
      font-size: 0.68rem;
      font-weight: 800;
      color: #ff6d5a;
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
        color: #717684;
      }

      .metric-val {
        font-size: 0.8rem;
        font-weight: 700;

        &.legacy-val {
          color: #e74c3c;
          text-decoration: line-through;
        }

        &.auto-val {
          color: #2ecc71;
        }

        &.speedup-val {
          color: #00b4d8;
          font-size: 0.85rem;
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
      font-size: 0.72rem;
      color: #717684;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
  }

  .impact-pill {
    background: rgba(0, 180, 216, 0.12);
    border: 1px solid rgba(0, 180, 216, 0.3);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #00b4d8;
    white-space: nowrap;
  }
}
</style>
