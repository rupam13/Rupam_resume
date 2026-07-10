import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Voice Agent with Enterprise Integration",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "agentic-ai", "ivr", "servicenow", "mcp"],
  description:
    "Enterprise-grade voice agent powered by Microsoft Copilot Studio, featuring advanced agentic AI, IVR system integration, and ServiceNow MCP connectivity. Demonstrates autonomous decision-making, context awareness, and seamless enterprise system integration for next-generation customer and employee interactions.",
  components: [
    {
      type: "text",
      props: {
        text: "This project demonstrates a comprehensive AI voice agent implementation combining multiple enterprise technologies.",
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
        items: [
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
