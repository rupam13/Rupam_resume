import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Business Process Automation Engine",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "react"],
  description: "Sophisticated workflow orchestration platform leveraging ServiceNow Flow Designer and integration APIs. Automates complex business processes across departments with intelligent conditional logic, parallel execution paths, and dynamic approval routing. Reduces process cycle time by up to 70% while ensuring governance and compliance.",
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
