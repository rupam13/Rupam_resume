import type { ProjectContent } from "../../types";

export default {
  title: "Enterprise Power BI Process Efficiency Tracker & KPI Rating Engine",
  category: "ai",
  theme: "dark",
  tags: ["power-bi", "kpi-measurement", "time-tracking", "accenture", "continuous-improvement"],
  description:
    "Executive Power BI dashboard measuring process efficiency generation, automated KPI performance ratings (A+ to C), SLA compliance metrics, and FTE capacity gains across HR, Operations, IT, and Finance. Recognized with an Enterprise SPOT Award in partnership with Accenture.",
  components: [
    // Section 1: Overview
    {
      type: "text",
      props: {
        text: "⚡ EFFICIENCY CREATION TELEMETRY & AUTOMATED PERFORMANCE RATINGS",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "⭐",
            title: "Automated KPI Performance Ratings",
            teaser: "Dynamic A+ to C Ratings Engine",
            content: [
              "Evaluates team & process performance dynamically across 10+ KPIs",
              "Assigns A+ (Optimal >95%), A (High 85-95%), B (Moderate), C (Needs Action)",
              "Drill-down views for managers to spot operational bottlenecks",
            ],
          },
          {
            icon: "🏆",
            title: "Enterprise SPOT Award & Accenture CI",
            teaser: "Award-winning CI Initiative",
            content: [
              "Awarded by leadership for Continuous Improvement (CI) excellence",
              "Co-designed KPI measurement templates with Accenture teams",
              "Tracked efficiency creation across 1,500+ reclaimed hours per year",
            ],
          },
          {
            icon: "⏱️",
            title: "Efficiency Creation Metrics",
            teaser: "Quantifiable handle time reduction",
            content: [
              "Measures Pre vs Post Automation Handle Times (AHT)",
              "Live SLA breach warning alerts & capacity utilization",
              "Automated FTE time savings calculation across all teams",
            ],
          },
        ],
      },
    },

    // Section 2: Technical Architecture & DAX Metrics
    {
      type: "text",
      props: {
        text: "🛠️ DAX RATING MODEL & EFFICIENCY TRACKING ENGINE",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "🧮",
            title: "DAX Rating & Efficiency Measures",
            teaser: "Calculated performance formulas",
            content: [
              "Efficiency_Rating = SWITCH(TRUE(), Efficiency_Gain >= 0.90, 'A+', Efficiency_Gain >= 0.75, 'A', 'B')",
              "Time_Reclaimed_Hours = SUM(Legacy_AHT - Automated_AHT)",
              "KPI_Performance_Score = CALCULATE(AVERAGE(SLA_Compliance_Score) * Volume_Weight)",
            ],
          },
          {
            icon: "⚙️",
            title: "Cross-Departmental KPI Tracking",
            teaser: "Use cases evaluated",
            content: [
              "HR Employee Request SLA & Rating Tracking",
              "Vendor PO Processing Speed & Bottleneck Analysis",
              "IT Support Ticket Resolution Performance Rating",
            ],
          },
          {
            icon: "🛠️",
            title: "Technology Stack",
            teaser: "Analytics & Automation Stack",
            content: [
              "Power BI Desktop & Power BI Service",
              "DAX Language & Data Modeling",
              "Power Query & Power Automate Hooks",
              "SharePoint & Azure SQL Warehouse",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
