import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Business Process Automation Engine",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "react"],
  description:
    "Transform manual processes into automated workflows. Remove bottlenecks and accelerate business operations. 70% cycle time reduction | 90% cost savings | Enterprise-grade reliability.",
  components: [
    // Section 1: The Transformation
    {
      type: "text",
      props: {
        text: "🎯 THE TRANSFORMATION",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "❌",
            title: "The Problem",
            teaser: "Legacy manual operations",
            content: [
              "Messy email chains and approval delays",
              "Repetitive data entry across systems",
              "Slow hand-offs between departments",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "Intelligent Workflow Engine",
            content: [
              "ServiceNow Flow Designer visual orchestration",
              "Smart parallel execution & logic",
              "Seamless API connections between apps",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Efficiency that pays off",
            content: [
              "70% reduction in cycle times",
              "90% cost savings on manual operations",
              "100% process consistency and audits",
            ],
          },
        ],
      },
    },

    // Section 2: Key Capabilities
    {
      type: "text",
      props: {
        text: "⚡ KEY CAPABILITIES",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "⚙️",
            title: "Flow Designer",
            teaser: "Visual orchestration",
            content: [
              "Build complex steps visually",
              "Define conditional branch paths",
              "Set parallel department actions",
            ],
          },
          {
            icon: "🔄",
            title: "Smart Approvals",
            teaser: "Eliminate bottlenecks",
            content: [
              "Dynamic approval group routing",
              "Automated escalation reminders",
              "Conditional multi-stage sign-offs",
            ],
          },
          {
            icon: "🔗",
            title: "Integration Hub",
            teaser: "Connected ecosystem",
            content: [
              "Sync data instantly across databases",
              "Custom webhook & API adapters",
              "Performance analytics dashboard",
            ],
          },
        ],
      },
    },

    // Section 3: Architecture & Use
    {
      type: "text",
      props: {
        text: "🛠️ ARCHITECTURE & USE",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "⚙️",
            title: "How It Works",
            teaser: "Step-by-step workflow",
            content: [
              "Workflow triggers via forms or APIs",
              "Parallel tasks execute simultaneously",
              "Approvals and integrations finalize",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Robust foundation",
            content: [
              "ServiceNow Flow Designer",
              "ServiceNow Integration Hub",
              "Custom REST/JSON Adapters",
            ],
          },
          {
            icon: "👥",
            title: "Ideal For",
            teaser: "Who this helps",
            content: [
              "Process Managers & Admins",
              "Business Analysts",
              "Operations Directors",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
