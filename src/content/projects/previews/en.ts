import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Intelligent Voice Agent with Enterprise Integration",
    slug: "ai-voice-agent",
    thumbnail: "/Animate_this_image.mp4",
    description: "Enterprise-grade voice agent with agentic AI & ServiceNow integration",
    category: "ai",
  },
  {
    title: "Autonomous Appointment Booking Assistant",
    slug: "ai-project-2",
    thumbnail: "/videos/particles.mp4",
    description: "AI-powered healthcare scheduling with real-time notifications",
    category: "ai",
  },
  {
    title: "Intelligent Email Triage & Organization System",
    slug: "ai-project-3",
    thumbnail: "/videos/quibbo.mp4",
    description: "Autonomous email classification & organization across departments",
    category: "ai",
  },
  {
    title: "Enterprise Policy Intelligence Assistant",
    slug: "ai-project-4",
    thumbnail: "/videos/cubewar.mp4",
    description: "24/7 policy Q&A system for HR, Finance, IT & Compliance",
    category: "ai",
  },
  {
    title: "Intelligent Ticket Management & Resolution Platform",
    slug: "ticket-management",
    thumbnail: "https://via.placeholder.com/600x400/2e7d32/ffffff?text=🎫%20Ticket%20Mgmt",
    description: "ITSM solution with automated routing & SLA tracking",
    category: "servicenow",
  },
  {
    title: "Intelligent Business Process Automation Engine",
    slug: "workflow-automation",
    thumbnail: "https://via.placeholder.com/600x400/4caf50/ffffff?text=⚙️%20Workflows",
    description: "Workflow orchestration with intelligent conditional logic",
    category: "servicenow",
  },
  {
    title: "ITIL-Compliant Incident Lifecycle Management",
    slug: "incident-management",
    thumbnail: "https://via.placeholder.com/600x400/009688/ffffff?text=🚨%20Incidents",
    description: "Production incident management with MTTR optimization",
    category: "servicenow",
  },
] as const satisfies ProjectPreview[];
