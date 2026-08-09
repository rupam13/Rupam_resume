import type { ProjectContent } from "../../types";

export default {
  title: "Department-Wide Efficiency & FTE Capacity Telemetry Tracker",
  category: "ai",
  theme: "dark",
  tags: ["power-bi", "kpi-measurement", "time-tracking", "power-automate"],
  description:
    "Power BI & MS Forms operational analytics system built for Executive Management & HR Leadership. Tracks how process efficiency is created across Department Heads (via Automation, Standardization & Integration), measures FTE workload capacity reclaimed, and enables strategic workforce management.",
  components: [
    // Section 1: Overview & Workforce Telemetry
    {
      type: "text",
      props: {
        text: "📊 DEPARTMENT-WIDE EFFICIENCY & WORKFORCE CAPACITY TELEMETRY",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "👥",
            title: "FTE Capacity Reclaimed",
            teaser: "Human Resource Management Focus",
            content: [
              "Tracks staff workload capacity freed up across departments (Reclaimed FTEs)",
              "Helps HR & Executive Management analyze workforce utilization & headcount allocation",
              "100% focused on operational time savings and workload re-balancing (no dollar metrics)",
            ],
          },
          {
            icon: "⚙️",
            title: "Department Head Leaderboard",
            teaser: "Cross-departmental visibility",
            content: [
              "Department-level efficiency tracking (HR, Operations, IT, Finance, Marketing, Sales)",
              "Visual leaderboard comparing process handle-time reductions and SLA performance",
              "Enables leadership to identify top-performing units & operational bottlenecks",
            ],
          },
          {
            icon: "📋",
            title: "MS Forms Data Collection",
            teaser: "1-minute monthly submission",
            content: [
              "Department Heads submit monthly workflow improvements via a simple MS Form",
              "Captures process name, efficiency driver, legacy vs new handle time, and volume",
              "Automated data flow straight into Power BI dataset via Power Automate",
            ],
          },
        ],
      },
    },

    // Section 2: How Efficiency is Created & DAX Formulas
    {
      type: "text",
      props: {
        text: "🔍 HOW EFFICIENCY IS CREATED & ANALYZED BY MANAGEMENT",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "⚡",
            title: "Efficiency Creation Drivers",
            teaser: "Three core drivers tracked",
            content: [
              "Automation: Workflows offloaded to AI Agents, n8n, & RPA scripts",
              "Standardization: Process simplification & removing redundant manual approvals",
              "Integration: Real-time API data sync between web forms, CRM, & ERPs",
            ],
          },
          {
            icon: "🧮",
            title: "FTE & Handle-Time Formulas",
            teaser: "Calculated DAX metrics",
            content: [
              "Monthly_Hours_Saved = ((Legacy_AHT - Automated_AHT) * Volume) / 60",
              "FTE_Capacity_Reclaimed = Monthly_Hours_Saved / 160_Work_Hours",
              "Department_Efficiency_Gain_% = DIVIDE(Monthly_Hours_Saved, Legacy_Total_Hours)",
            ],
          },
          {
            icon: "📈",
            title: "Strategic HR Management",
            teaser: "Workforce decision making",
            content: [
              "Provides HR leadership with empirical data to re-assign reclaimed FTE capacity",
              "Highlights departments achieving 80%+ handle-time reduction",
              "Simplifies executive quarterly efficiency reviews into clear visual charts",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
