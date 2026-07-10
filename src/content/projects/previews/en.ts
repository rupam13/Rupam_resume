import thumbnailAiVoiceAgent from "../../../assets/thumbnails/ai-voice-agent.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Intelligent Voice Agent with Enterprise Integration",
    slug: "ai-voice-agent",
    thumbnail: thumbnailAiVoiceAgent,
    description: "Enterprise-grade voice agent with agentic AI & ServiceNow integration",
    category: "ai",
  },
  {
    title: "Autonomous Appointment Booking Assistant",
    slug: "ai-project-2",
    thumbnail: thumbnailAiVoiceAgent,
    description: "AI-powered healthcare scheduling with real-time notifications",
    category: "ai",
  },
  {
    title: "Intelligent Email Triage & Organization System",
    slug: "ai-project-3",
    thumbnail: thumbnailAiVoiceAgent,
    description: "Autonomous email classification & organization across departments",
    category: "ai",
  },
  {
    title: "Enterprise Policy Intelligence Assistant",
    slug: "ai-project-4",
    thumbnail: thumbnailAiVoiceAgent,
    description: "24/7 policy Q&A system for HR, Finance, IT & Compliance",
    category: "ai",
  },
  {
    title: "Intelligent Ticket Management & Resolution Platform",
    slug: "ticket-management",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/ticket.png",
    description: "ITSM solution with automated routing & SLA tracking",
    category: "servicenow",
  },
  {
    title: "Intelligent Business Process Automation Engine",
    slug: "workflow-automation",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/workflow.png",
    description: "Workflow orchestration with intelligent conditional logic",
    category: "servicenow",
  },
  {
    title: "ITIL-Compliant Incident Lifecycle Management",
    slug: "incident-management",
    thumbnail: "https://raw.githubusercontent.com/rupam13/rupam-projects-data/main/images/servicenow/incident.png",
    description: "Production incident management with MTTR optimization",
    category: "servicenow",
  },
] as const satisfies ProjectPreview[];
