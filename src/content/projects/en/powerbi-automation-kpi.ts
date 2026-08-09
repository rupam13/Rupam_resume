import type { ProjectContent } from "../../types";

export default {
  title: "Enterprise Power BI Automation ROI & KPI Telemetry Dashboard",
  category: "ai",
  theme: "dark",
  tags: ["power-bi", "kpi-measurement", "time-tracking", "n8n", "servicenow"],
  description:
    "Executive-ready Power BI dashboard & real-time KPI measurement system. Measures quantifiable ROI, time reclaimed per workflow, process bottleneck elimination, and automated SLA compliance telemetry.",
  components: [
    // Section 1: Overview
    {
      type: "text",
      props: {
        text: "📊 EXECUTIVE POWER BI TELEMETRY & ROI MEASUREMENT",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "📈",
            title: "Real-time Telemetry",
            teaser: "Automated data pipelines",
            content: [
              "Extracts execution logs from n8n & ServiceNow",
              "DAX measures calculating live operational ROI",
              "Automated 5-minute schedule refresh",
            ],
          },
          {
            icon: "⏱️",
            title: "Time Tracking Dashboard",
            teaser: "1,250+ hours saved annually",
            content: [
              "Tracks Pre vs Post Automation Handle Times",
              "Calculates department-level hours reclaimed",
              "Live SLA breach prevention telemetry",
            ],
          },
          {
            icon: "💰",
            title: "Financial Impact",
            teaser: "$120K annual cost avoidance",
            content: [
              "Direct FTE capacity savings calculation",
              "Zero manual error audit penalties",
              "Executive leadership drill-down views",
            ],
          },
        ],
      },
    },

    // Section 2: Technical Architecture
    {
      type: "text",
      props: {
        text: "🛠️ DAX MODELING & TIME TRACKING ENGINE",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "🧮",
            title: "Advanced DAX Measures",
            teaser: "Complex KPI logic",
            content: [
              "TimeReclaimed_Hours = SUM(Legacy_AHT - Auto_AHT)",
              "Automation_Adoption_Rate = DIVIDE(Auto_Tasks, Total_Tasks)",
              "ROI_Financial_Value = TimeReclaimed_Hours * Blended_FTE_Rate",
            ],
          },
          {
            icon: "⏱️",
            title: "Time Tracking Breakdown",
            teaser: "Departmental speedups",
            content: [
              "HR Onboarding: 45m -> 4m (91% time saved)",
              "Invoice Processing: 15m -> 1.5m (90% time saved)",
              "IT Ticket Triage: 12m -> 30s (95% time saved)",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Analytics stack",
            content: [
              "Power BI Desktop & Service",
              "DAX Language & Data Modeling",
              "n8n Webhook Data Collectors",
              "Azure SQL / Data Lake Warehouse",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
