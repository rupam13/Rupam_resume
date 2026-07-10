import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Intelligent Voice Agent with Enterprise Integration",
    slug: "ai-voice-agent",
    thumbnail: "https://share.gemini.google/Il6yOCwQI5Cd",
    description: "Enterprise-grade voice agent with agentic AI & ServiceNow integration",
    category: "ai",
  },
  {
    title: "Autonomous Appointment Booking Assistant",
    slug: "ai-project-2",
    thumbnail: "https://via.placeholder.com/600x400/764ba2/ffffff?text=📅%20Appointments",
    description: "AI-powered healthcare scheduling with real-time notifications",
    category: "ai",
  },
  {
    title: "Intelligent Email Triage & Organization System",
    slug: "ai-project-3",
    thumbnail: "https://via.placeholder.com/600x400/00bcd4/ffffff?text=📧%20Email%20Triage",
    description: "Autonomous email classification & organization across departments",
    category: "ai",
  },
  {
    title: "Enterprise Policy Intelligence Assistant",
    slug: "ai-project-4",
    thumbnail: "https://via.placeholder.com/600x400/3f51b5/ffffff?text=📚%20Policy%20Q%26A",
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
