import type { ProjectContent } from "../../types";

export default {
  title: "ITIL-Compliant Incident Lifecycle Management",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "node", "postgresql"],
  description: "Production-grade incident management solution adhering to ITIL 4 best practices. Orchestrates end-to-end incident lifecycle from detection through resolution with intelligent severity assessment, automated escalation policies, and comprehensive root cause analysis. Minimizes mean time to recovery (MTTR) and ensures business continuity.",
  components: [
    {
      type: "text",
      props: {
        text: "Enterprise incident management following ITIL standards.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Incident classification",
          "Priority management",
          "Response procedures",
          "Resolution tracking",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
