import type { ProjectContent } from "../../types";

export default {
  title: "Incident Management",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "incident", "itil"],
  description: "Comprehensive incident management solution following ITIL best practices. Ensures rapid resolution and minimal business impact.",
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
