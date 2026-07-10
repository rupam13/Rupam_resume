import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Ticket Management & Resolution Platform",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "node"],
  description:
    "Eliminate ticket chaos with intelligent routing & automation. Support teams spend less time managing, more time solving. 85% SLA compliance | 40% faster resolution | Zero lost tickets.",
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
            teaser: "Manual sorting & SLA violations",
            content: [
              "Tickets pile up and get lost in inbox",
              "Critical issues wait too long in queues",
              "Repetitive sorting wastes engineering time",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "ServiceNow Routing Hub",
            content: [
              "Auto-routing based on category & expertise",
              "Urgency prioritization & SLA tracking",
              "Built-in escalations & notifications",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Efficiency that pays off",
            content: [
              "85% SLA compliance rate reached",
              "40% reduction in resolution times",
              "60% reduction in manual dispatching",
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
            icon: "🎯",
            title: "Intelligent Routing",
            teaser: "Right team, first time",
            content: [
              "Classifies content automatically",
              "Analyzes developer workload & skill",
              "Assigns tickets without delay",
            ],
          },
          {
            icon: "⏱️",
            title: "SLA & Alerts",
            teaser: "SLA management",
            content: [
              "Real-time countdown timers",
              "Escalation rules if SLA is breached",
              "Push notifications for hot issues",
            ],
          },
          {
            icon: "📊",
            title: "Analytics Hub",
            teaser: "System oversight",
            content: [
              "Tracks bottlenecks and team load",
              "Generates performance reports",
              "Integrates with enterprise systems",
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
              "New support ticket is submitted",
              "Platform routes ticket & starts SLA timer",
              "Developers resolve and close ticket",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Robust foundation",
            content: [
              "ServiceNow Platform Integration",
              "Intelligent Routing Engine",
              "Enterprise REST/SOAP APIs",
            ],
          },
          {
            icon: "👥",
            title: "Ideal For",
            teaser: "Who this helps",
            content: [
              "IT Service Managers",
              "Support Team Leads",
              "Operations Directors",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
