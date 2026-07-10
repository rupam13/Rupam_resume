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
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 THE TRANSFORMATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "75% MTTR REDUCTION | 100% INCIDENT TRACKING | ZERO DROPPED ISSUES",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nProduction is down. Your team is scrambling. Who's on it? Is it escalated? Critical details lost in Slack. Follow-ups fall through cracks. Same incidents happen again.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn ITIL 4-compliant incident management system that orchestrates the entire lifecycle: detection → assessment → escalation → resolution → learning. Every incident is documented, tracked, and analyzed.",
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
          "75% reduction in MTTR (Mean Time To Recovery)",
          "100% incident traceability",
          "Automated escalation (no lost issues)",
          "Comprehensive root cause analysis",
          "Prevents repeat incidents",
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
        text: "Incident detected → System assesses severity → Automatic escalation based on impact → On-call team mobilized → Real-time communication & updates → Resolution tracked → Root cause analysis triggered → Preventive actions documented.",
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
        text: "🛠️ TECHNOLOGY STACK",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "ServiceNow Platform",
          "ITIL Framework Implementation",
          "Incident Analytics Engine",
          "Real-time Communication Hub",
          "Root Cause Analysis System",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nIncident Managers | On-Call Engineers | IT Directors seeking to transform chaos into order and dramatically reduce downtime.",
      },
    },
  ],
} as const satisfies ProjectContent;
