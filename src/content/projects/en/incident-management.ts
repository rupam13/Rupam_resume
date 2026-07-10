import type { ProjectContent } from "../../types";

export default {
  title: "ITIL-Compliant Incident Lifecycle Management",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "node", "postgresql"],
  description:
    "Stop chaotic incident response. ITIL-compliant system brings order to crisis. 75% MTTR reduction | Automated escalation | Zero dropped issues.",
  components: [
    {
      type: "text",
      props: {
        text: "🎯 THE CHALLENGE\nProduction is down. Your team is scrambling. Who's on it? Is it being escalated? What's the status? Critical details get lost in Slack. Follow-ups fall through cracks. Root causes are never analyzed. The same incidents happen again.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if incidents could follow a structured, proven process? Every issue tracked. Escalations automatic. Root causes analyzed. And the next incident prevented.",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn ITIL 4-compliant incident management system that orchestrates the entire lifecycle: detection → assessment → escalation → resolution → learning. Every incident is documented, tracked, and analyzed.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 75% reduction in MTTR (Mean Time To Recovery)\n• 100% incident traceability\n• Automated escalation (no lost issues)\n• Comprehensive root cause analysis\n• Prevents repeat incidents",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nIncident detected → System assesses severity → Automatic escalation based on impact → On-call team mobilized → Real-time communication & updates → Resolution tracked → Root cause analysis triggered → Preventive actions documented.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "🚨 Smart Classification - Automatic severity & priority",
          "📞 Auto-escalation - Right people notified instantly",
          "📊 Real-time Dashboard - Visibility across all incidents",
          "📝 Structured Communication - No info gets lost",
          "🔍 RCA (Root Cause Analysis) - Learn to prevent repeats",
          "📈 Compliance & Audit - Full ITIL compliance trail",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nIncident Managers | On-Call Engineers | IT Directors who want to transform chaos into order and dramatically reduce downtime.",
      },
    },
  ],
} as const satisfies ProjectContent;
