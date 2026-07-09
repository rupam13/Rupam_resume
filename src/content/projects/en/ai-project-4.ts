import type { ProjectContent } from "../../types";

export default {
  title: "AI Project 4",
  theme: "dark",
  category: "ai",
  tags: ["copilot-studio", "agentic-ai"],
  description: "AI project with LinkedIn embed",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7362766749315817472?compact=1",
        height: "399",
        width: "504",
        title: "LinkedIn Post",
      },
    },
  ],
} as const satisfies ProjectContent;
