import type { ProjectContent } from "../../types";

export default {
  title: "Incident Management",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "node", "postgresql"],
  description: "Umfassende Incident-Management-Lösung nach ITIL Best Practices. Gewährleistet schnelle Behebung und minimale Auswirkungen auf das Geschäft.",
  components: [
    {
      type: "text",
      props: {
        text: "Enterprise Incident Management nach ITIL Standards.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Incident-Klassifizierung",
          "Prioritätsverwaltung",
          "Reaktionsverfahren",
          "Auflösungs-Tracking",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
