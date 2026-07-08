import type { ProjectContent } from "../../types";

export default {
  title: "KI-gestützter Sprachagent",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "agentic-ai", "ivr", "servicenow", "mcp"],
  description:
    "Entwickelt einen intelligenten Sprachagenten mit Microsoft Copilot Studio mit fortgeschrittenen Agentic-AI-Funktionen, IVR-Integration und ServiceNow-MCP-Konnektivität für nahtlose Unternehmensautomation.",
  components: [
    {
      type: "text",
      props: {
        text: "Dieses Projekt demonstriert eine umfassende Implementierung eines KI-Sprachagenten, der mehrere Unternehmenstechnologien kombiniert.",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7476264755083632641?compact=1",
        height: "399",
        width: "504",
        title: "KI-gestützter Sprachagent LinkedIn-Post",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Microsoft Copilot Studio für die Orchestrierung von Sprachagenten",
          "Agentic AI für autonome Entscheidungsfindung und Aufgabenausführung",
          "IVR-Systemintegration (Interactive Voice Response)",
          "ServiceNow-MCP für Enterprise-Service-Management",
          "Multi-Channel-Kommunikationsunterstützung",
          "Echtzeit-Sprachverarbeitung und natürliches Sprachverständnis",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
