import type { ProjectContent } from "../../types";

export default {
  title: "Ticket Management System",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "node"],
  description: "Enterprise ticket management system with automated workflows and real-time incident tracking. Handles SLA management and integrates with enterprise systems.",
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
