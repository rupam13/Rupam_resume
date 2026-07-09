import type { ProjectContent } from "../../types";

export default {
  title: "AI Project 3",
  theme: "dark",
  category: "ai",
  tags: ["copilot-studio", "agentic-ai"],
  description: "AI project with LinkedIn embed - Project 3",
  components: [
    {
      type: "text",
      props: {
        text: "AI Project 3 - LinkedIn Post Below",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7365669102746599424?compact=1",
        height: "399",
        width: "504",
        title: "LinkedIn Post",
      },
    },
  ],
} as const satisfies ProjectContent;
