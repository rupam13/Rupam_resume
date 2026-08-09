import type { ProjectContent } from "../../types";

export default {
  title: "Copilot Studio Live Agent Handoff & Time Telemetry Portal",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "direct-line-api", "handoff", "servicenow", "time-tracking"],
  description:
    "Seamless real-time escalation bridge connecting Microsoft Copilot Studio with ServiceNow Advanced Work Assignment (AWA). Eliminates queue wait times, preserves 100% transcript context, and tracks handle time savings.",
  components: [
    // Section 1: Core Overview
    {
      type: "text",
      props: {
        text: "🎧 EXECUTIVE OVERVIEW & HANDOFF ARCHITECTURE",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "🔄",
            title: "Direct Line Integration",
            teaser: "Event-driven escalation",
            content: [
              "Subscribes to Direct Line WebSockets API",
              "Captures handoff.initiate activity payload",
              "Extracts full multi-turn conversation transcript",
            ],
          },
          {
            icon: "⚡",
            title: "Sub-Second Routing",
            teaser: "Instant Agent Workspace AWA",
            content: [
              "Routes directly to active human agent queue",
              "Pre-fills ServiceNow interaction & incident record",
              "Zero customer re-explaining or repeated questions",
            ],
          },
          {
            icon: "⏱️",
            title: "Time Telemetry Engine",
            teaser: "Quantifiable speedup metrics",
            content: [
              "Reduces Average Handle Time (AHT) by 12 mins/ticket",
              "Eliminates 100% of initial queue wait times",
              "Live SLA monitoring & escalation alerts",
            ],
          },
        ],
      },
    },

    // Section 2: Technical Breakdown
    {
      type: "text",
      props: {
        text: "⚡ TECHNICAL WORKFLOW & TIME SAVINGS",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "🧠",
            title: "Context Parsing",
            teaser: "Deep state extraction",
            content: [
              "Extracts user identity, sentiment & intent",
              "Parses bot topic variables into ServiceNow fields",
              "Generates formatted HTML transcript preview",
            ],
          },
          {
            icon: "⏱️",
            title: "Legacy vs Automated Time",
            teaser: "18.5m -> 2.1m handle time",
            content: [
              "Legacy Manual Handoff: 18.5 mins per ticket",
              "AI Automated Handoff: 2.1 mins per ticket",
              "Annual Reclaimed Capacity: 1,450+ hours",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Enterprise ecosystem",
            content: [
              "Microsoft Copilot Studio Direct Line",
              "ServiceNow Advanced Work Assignment (AWA)",
              "Node.js / Python DirectLine Bridge",
              "REST & Table API Integration",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
