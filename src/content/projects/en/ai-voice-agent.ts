import voiceAgentThumbnail from "../../../assets/images/projects/ai-voice-agent/thumbnail.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "AI-Powered Voice Agent",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "agentic-ai", "ivr", "servicenow", "mcp"],
  description:
    "Built an intelligent voice agent using Microsoft Copilot Studio with advanced agentic AI capabilities, IVR integration, and ServiceNow MCP connectivity for seamless enterprise automation.",
  components: [
    {
      type: "text",
      props: {
        copy: "This project demonstrates a comprehensive AI voice agent implementation combining multiple enterprise technologies.",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7476264755083632641?compact=1",
        height: "399",
        width: "504",
        title: "AI-Powered Voice Agent LinkedIn Post",
      },
    },
    {
      type: "list",
      props: {
        bullets: [
          "Microsoft Copilot Studio for voice agent orchestration",
          "Agentic AI for autonomous decision-making and task execution",
          "IVR (Interactive Voice Response) system integration",
          "ServiceNow MCP for enterprise service management",
          "Multi-channel communication support",
          "Real-time voice processing and natural language understanding",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
