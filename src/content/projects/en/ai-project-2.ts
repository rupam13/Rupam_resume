import type { ProjectContent } from "../../types";

export default {
  title: "AI Project 2",
  theme: "dark",
  category: "ai",
  tags: ["copilot-studio", "agentic-ai"],
  description: "AI project with LinkedIn embed - Project 2",
  components: [
    {
      type: "text",
      props: {
        text: "AI Project 2 - LinkedIn Post Below",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7368910590255255552?compact=1",
        height: "399",
        width: "504",
        title: "LinkedIn Post",
      },
    },
  ],
} as const satisfies ProjectContent;
