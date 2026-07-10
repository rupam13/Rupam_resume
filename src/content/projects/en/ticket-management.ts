import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Ticket Management & Resolution Platform",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "node"],
  description: "Enterprise-grade ITSM solution built on ServiceNow platform featuring automated ticket routing, real-time SLA tracking, and intelligent workflow automation. Streamlines incident management across global teams with intelligent prioritization, automated escalation, and comprehensive audit trails for ITIL compliance.",
  components: [
    {
      type: "text",
      props: {
        text: "A comprehensive ServiceNow implementation for enterprise service management and incident tracking.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Automated ticket routing and assignment",
          "Real-time incident tracking and updates",
          "SLA management and reporting",
          "Integration with enterprise systems",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
