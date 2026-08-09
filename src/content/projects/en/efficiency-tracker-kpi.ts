import type { ProjectContent } from "../../types";

export default {
  title: "Cross-Department Efficiency Tracker & Power BI Savings Dashboard",
  category: "ai",
  theme: "dark",
  tags: ["power-bi", "kpi-measurement", "time-tracking", "power-automate"],
  description:
    "Simple enterprise KPI tracking system. Collects monthly process efficiency data across departments via Microsoft Forms, analyzes handle-time reductions in Power BI, and calculates total hours & cost savings achieved.",
  components: [
    // Section 1: Overview & Data Collection
    {
      type: "text",
      props: {
        text: "📊 SIMPLE CROSS-DEPARTMENT EFFICIENCY & SAVINGS TRACKER",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "📋",
            title: "MS Forms Data Collection",
            teaser: "1-minute department submission",
            content: [
              "Department leads submit workflow improvements via a simple MS Form",
              "Captures process name, legacy time, automated time, and monthly volume",
              "Automated data flow straight into Power BI dataset via Power Automate",
            ],
          },
          {
            icon: "📈",
            title: "Power BI Savings Dashboard",
            teaser: "Live KPI & ROI visualization",
            content: [
              "Calculates total hours saved = (Legacy Time - New Time) * Volume",
              "Displays cost savings ($) & FTE capacity reclaimed per department",
              "Visual department ranking charts (HR, Operations, IT, Finance, Sales)",
            ],
          },
          {
            icon: "💰",
            title: "Clear Business Savings",
            teaser: "1,200+ hours saved annually",
            content: [
              "Over $90,000 in annual operational cost savings demonstrated",
              "Eliminated manual Excel spreadsheet consolidation",
              "Easy 30-second interview story for leadership presentations",
            ],
          },
        ],
      },
    },

    // Section 2: Simple Workflow & Formula
    {
      type: "text",
      props: {
        text: "🛠️ HOW THE TRACKER WORKS (SIMPLE 3-STEP PIPELINE)",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "1️⃣",
            title: "Step 1: Form Submission",
            teaser: "MS Forms input",
            content: [
              "Team enters: Process Name, Old Time (mins), New Time (mins), Monthly Volume",
              "Example: HR Onboarding (Old: 45m ➔ New: 5m, 100 hires/mo)",
            ],
          },
          {
            icon: "2️⃣",
            title: "Step 2: Power BI Analysis",
            teaser: "Automated calculation",
            content: [
              "Hours Saved = ((Old Time - New Time) * Volume) / 60",
              "Financial Savings = Hours Saved * Hourly Rate",
            ],
          },
          {
            icon: "3️⃣",
            title: "Step 3: Executive Reporting",
            teaser: "Clear visual dashboard",
            content: [
              "Shows total hours saved across all 10 departments",
              "Highlights top 3 efficiency wins of the quarter",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
