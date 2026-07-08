import type { ProjectContent } from "../../types";

export default {
  title: "Ticket Management System",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "itsm", "automation"],
  description: "Enterprise-Ticketmanagementsystem mit automatisierten Arbeitsabläufen und Echtzeit-Incident-Tracking. Verwaltet SLA und integriert sich mit Unternehmenssystemen.",
  components: [
    {
      type: "text",
      props: {
        text: "Eine umfassende ServiceNow-Implementierung für Enterprise Service Management und Incident Tracking.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Automatisierte Ticket-Weiterleitung und -Zuweisung",
          "Echtzeit-Incident-Tracking und Updates",
          "SLA-Management und Berichterstattung",
          "Integration mit Unternehmenssystemen",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
