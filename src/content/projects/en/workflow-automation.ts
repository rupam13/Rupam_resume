import type { ProjectContent } from "../../types";

export default {
  title: "Workflow Automation",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "react"],
  description: "Advanced workflow automation platform using ServiceNow. Streamlines business processes and reduces manual interventions.",
  components: [
    {
      type: "text",
      props: {
        text: "Intelligent workflow automation for enterprise operations.",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Process automation",
          "Business rule engine",
          "Integration workflows",
          "Approval processes",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
