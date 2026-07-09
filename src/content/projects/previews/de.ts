import thumbnailAiVoiceAgent from "../../../assets/thumbnails/ai-voice-agent.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "KI-gestützter Sprachagent",
    slug: "ai-voice-agent",
    thumbnail: thumbnailAiVoiceAgent,
    description: "Intelligenter Sprachagent mit Copilot Studio & ServiceNow",
    category: "ai",
  },
  {
    title: "AI Project 2",
    slug: "ai-project-2",
    thumbnail: thumbnailAiVoiceAgent,
    description: "AI project with LinkedIn embed",
    category: "ai",
  },
  {
    title: "AI Project 3",
    slug: "ai-project-3",
    thumbnail: thumbnailAiVoiceAgent,
    description: "AI project with LinkedIn embed",
    category: "ai",
  },
  {
    title: "AI Project 4",
    slug: "ai-project-4",
    thumbnail: thumbnailAiVoiceAgent,
    description: "AI project with LinkedIn embed",
    category: "ai",
  },
  {
    title: "Ticket-Management-System",
    slug: "ticket-management",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/ticket.png",
    description: "Enterprise-Ticketmanagementsystem",
    category: "servicenow",
  },
  {
    title: "Workflow-Automatisierung",
    slug: "workflow-automation",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/workflow.png",
    description: "Erweiterte Workflow-Automatisierungsplattform",
    category: "servicenow",
  },
  {
    title: "Incident Management",
    slug: "incident-management",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/incident.png",
    description: "Umfassende Incident-Management-Lösung",
    category: "servicenow",
  },
] as const satisfies ProjectPreview[];
