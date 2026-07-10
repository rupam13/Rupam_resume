import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Ticket Management & Resolution Platform",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "node"],
  description:
    "Eliminate ticket chaos with intelligent routing & automation. Support teams spend less time managing, more time solving. 85% SLA compliance | 40% faster resolution | Zero lost tickets.",
  components: [
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 THE TRANSFORMATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "85% SLA COMPLIANCE | 40% FASTER RESOLUTION | ZERO LOST TICKETS",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nSupport tickets pile up in your inbox. Some get lost. Critical issues wait in queue. Your best people spend hours on ticket management instead of solving problems.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn intelligent ServiceNow-based system that automatically routes tickets to the right team, prioritizes by urgency, tracks SLAs in real-time, and escalates when needed. Your team focuses on solving, not sorting.",
      },
    },
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 BUSINESS IMPACT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "85% SLA compliance rate",
          "40% faster resolution time",
          "60% reduction in manual routing",
          "Zero lost or forgotten tickets",
          "Real-time visibility across all support",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS",
      },
    },
    {
      type: "text",
      props: {
        text: "Ticket arrives → System analyzes content & priority → AI routes to best-fit team → SLA timer starts → Escalation rules activate if needed → Real-time tracking keeps everyone informed.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 KEY CAPABILITIES",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "🎯 Intelligent Routing - Tickets go to right person first",
          "⏱️ SLA Tracking - Real-time timer & alerts",
          "📈 Priority Engine - Critical issues float to top",
          "🔄 Auto-escalation - Issues escalate when stuck",
          "📊 Analytics - Trends, bottlenecks, team performance",
          "🔗 Enterprise Integration - Syncs across all systems",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "🛠️ TECHNOLOGY STACK",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "ServiceNow Platform",
          "Intelligent Routing Engine",
          "SLA Management System",
          "Real-time Analytics",
          "Enterprise API Integration",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nIT Service Managers | Support Team Leads | Operations Directors seeking to eliminate ticket chaos and improve team efficiency.",
      },
    },
  ],
} as const satisfies ProjectContent;
