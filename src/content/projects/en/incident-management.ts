import type { ProjectContent } from "../../types";

export default {
  title: "ITIL-Compliant Incident Lifecycle Management",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "node", "postgresql"],
  description:
    "Stop chaotic incident response. ITIL-compliant system brings order to crisis. 75% MTTR reduction | Automated escalation | Zero dropped issues.",
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
            teaser: "Downtime panic & chaos",
            content: [
              "Production is down with no clear owner",
              "Critical details lost in noisy chat threads",
              "Same recurring incidents repeat",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "ITIL Lifecycle Control",
            content: [
              "ITIL 4 structured lifecycle tracking",
              "Automated priority & severity triage",
              "Embedded Root Cause Analysis (RCA)",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Efficiency that pays off",
            content: [
              "75% reduction in MTTR recovery time",
              "100% incident traceability & logs",
              "Zero dropped or forgotten crisis issues",
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
            icon: "🚨",
            title: "Smart Triage",
            teaser: "Instant classification",
            content: [
              "Determines severity & impact instantly",
              "Alerts on-call engineers automatically",
              "Spawns communication bridges",
            ],
          },
          {
            icon: "📞",
            title: "Escalation Logic",
            teaser: "Targeted alerts",
            content: [
              "Notifies tier-2/3 responders on delay",
              "Updates status pages automatically",
              "Triggers structured escalation flows",
            ],
          },
          {
            icon: "🔍",
            title: "RCA Framework",
            teaser: "Learn and prevent",
            content: [
              "Requires post-mortem document logging",
              "Identifies root database or code bugs",
              "Links incident history to target assets",
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
              "Incident detected & priority assigned",
              "Auto-alert notifies primary responder",
              "RCA triggers post-incident learning",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Robust foundation",
            content: [
              "ServiceNow Incident Console",
              "Incident Analytics Engine",
              "Communication Hub & On-Call Sync",
            ],
          },
          {
            icon: "👥",
            title: "Ideal For",
            teaser: "Who this helps",
            content: [
              "Incident & Crisis Managers",
              "On-Call Site Reliability Engineers",
              "IT Service Operations Directors",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
