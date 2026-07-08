import type { ProjectContent } from "../../types";

export default {
  title: "Workflow-Automatisierung",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "react"],
  description: "Erweiterte Workflow-Automatisierungsplattform mit ServiceNow. Optimiert Geschäftsprozesse und reduziert manuelle Eingriffe.",
  components: [
    {
      type: "text",
      props: {
        text: "Intelligente Workflow-Automatisierung für Enterprise-Operationen.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Prozessautomatisierung",
          "Business Rule Engine",
          "Integrations-Workflows",
          "Genehmigungsprozesse",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
