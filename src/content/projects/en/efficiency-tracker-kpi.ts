import type { ProjectContent } from "../../types";

export default {
  title: "Department Head Efficiency & Headcount Optimization Governance Tracker",
  category: "ai",
  theme: "dark",
  tags: ["power-bi", "kpi-measurement", "time-tracking", "power-automate"],
  description:
    "Power BI & MS Forms executive governance dashboard. Built for Senior Management to see 'who is doing what' across Department Heads—tracking how efficiency is created via Headcount/FTE Optimization, Workflow Automation, and Operational Process Standardization.",
  components: [
    // Section 1: Managerial Transparency ("Who is Doing What")
    {
      type: "text",
      props: {
        text: "👁️ MANAGERIAL TRANSPARENCY & WORKFORCE GOVERNANCE ('WHO IS DOING WHAT')",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "👔",
            title: "Department Head Accountability",
            teaser: "Full visibility into 'Who is Doing What'",
            content: [
              "Tracks specific efficiency initiatives logged by each Department Head (HR, Ops, IT, Finance, Sales)",
              "Provides Executive Management with 100% visibility into manager-level contributions",
              "Eliminates operational blind spots by linking efficiency outcomes directly to department leaders",
            ],
          },
          {
            icon: "👥",
            title: "Headcount & FTE Optimization",
            teaser: "Workforce capacity reduction & re-allocation",
            content: [
              "Tracks FTE capacity freed up and headcount optimization per department",
              "Helps Senior Management & HR analyze staffing dependency and rebalance team allocations",
              "100% focused on human resource management & organizational productivity",
            ],
          },
          {
            icon: "🤖",
            title: "Automation & Operational Drivers",
            teaser: "How efficiency is created",
            content: [
              "Automation: Offloading manual tasks to AI Agents, n8n, & RPA scripts",
              "Process Elimination: Removing unnecessary approval loops & redundant forms",
              "Integration: Auto-syncing cross-platform data between web forms, CRM, & ERPs",
            ],
          },
        ],
      },
    },

    // Section 2: Management Analysis & Intake Pipeline
    {
      type: "text",
      props: {
        text: "📋 HOW MANAGEMENT ANALYZES DEPARTMENT-HEAD INITIATIVES",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "📋",
            title: "MS Forms Intake Engine",
            teaser: "Simple monthly reporting",
            content: [
              "Department Heads log monthly initiatives: Manager Name, Department, Efficiency Type & FTE Impact",
              "Categorizes driver: Headcount Optimization vs Automation vs Process Standardization",
              "Power Automate streams submissions directly into Power BI dataset",
            ],
          },
          {
            icon: "📊",
            title: "Executive Governance Dashboard",
            teaser: "Management analytics view",
            content: [
              "Visual department head leaderboard ranking efficiency created per manager",
              "Filterable by Efficiency Type (Headcount Reduction, Automation, Process Change)",
              "Single-screen executive overview for quarterly leadership review meetings",
            ],
          },
          {
            icon: "🎯",
            title: "Strategic Workforce Action",
            teaser: "Resource re-deployment",
            content: [
              "Enables Senior Leadership to redeploy freed headcount capacity to strategic growth areas",
              "Identifies department heads driving proactive operational innovation",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
