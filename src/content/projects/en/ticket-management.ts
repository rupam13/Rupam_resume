import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Ticket Management & Resolution Platform",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "node", "postgresql"],
  description:
    "Eliminate ticket chaos with intelligent routing & automation. Support teams spend less time managing, more time solving. 85% SLA compliance | 40% faster resolution | Zero lost tickets.",
  components: [
    {
      type: "text",
      props: {
        text: "🎯 THE CHALLENGE\nSupport tickets pile up in your inbox. Some get lost. Critical issues wait in queue behind routine requests. Your best people spend hours on ticket management instead of solving problems. SLAs are constantly missed.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if the system could understand each ticket, route it to the perfect person, and track everything automatically? No more lost tickets. No more SLA breaches. Just solved issues.",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn intelligent ServiceNow-based system that automatically routes tickets to the right team, prioritizes by urgency, tracks SLAs in real-time, and escalates when needed. Your team focuses on solving, not sorting.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 85% SLA compliance rate\n• 40% faster resolution time\n• 60% reduction in manual routing\n• Zero lost or forgotten tickets\n• Real-time visibility across all support",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nTicket arrives → System analyzes content & priority → AI routes to best-fit team → SLA timer starts → Escalation rules activate if needed → Real-time tracking keeps everyone informed.",
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
        text: "👥 IDEAL FOR\nIT Service Managers | Support Team Leads | Operations Directors who want to eliminate ticket chaos and improve team efficiency.",
      },
    },
  ],
} as const satisfies ProjectContent;
