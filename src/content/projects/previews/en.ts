import thumbnailAiVoiceAgent from "../../../assets/thumbnails/ai-voice-agent.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "AI-Powered Voice Agent",
    slug: "ai-voice-agent",
    thumbnail: thumbnailAiVoiceAgent,
    description: "Intelligent voice agent with Copilot Studio & ServiceNow",
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
    title: "Ticket Management System",
    slug: "ticket-management",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/ticket.png",
    description: "Enterprise ticket management system",
    category: "servicenow",
  },
  {
    title: "Workflow Automation",
    slug: "workflow-automation",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/workflow.png",
    description: "Advanced workflow automation platform",
    category: "servicenow",
  },
  {
    title: "Incident Management",
    slug: "incident-management",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/incident.png",
    description: "Comprehensive incident management solution",
    category: "servicenow",
  },
] as const satisfies ProjectPreview[];
