import type { ProjectContent } from "../../types";

export default {
  title: "Autonomous Appointment Booking Assistant",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "copilot-studio"],
  description: "AI-powered healthcare solution enabling patients to book appointments through natural language conversations. Integrates with Google Calendar and Telegram for real-time scheduling, confirmation, and reminders. Demonstrates CPA to APA evolution through autonomous decision-making and multi-channel communication.",
  components: [
    {
      type: "text",
      props: {
        text: "🌀 From CPA to APA - Cognitive Process Automation → Agentic Process Automation",
      },
    },
    {
      type: "text",
      props: {
        text: "Over the years, automation was all about rules and workflows. But now we are stepping into the world of APA – Agentic Process Automation 🚀\n\nHere, AI doesn't just follow rules. It can:\n✅ Understand queries in natural language\n✅ Remember past conversations & context\n✅ Take decisions and actions autonomously\n✅ Interact with multiple tools via smart nodes & MCP",
      },
    },
    {
      type: "text",
      props: {
        text: "🔹 Week 1 Use Case: Doctor Appointment Booking Agent",
      },
    },
    {
      type: "text",
      props: {
        text: "Built using Agentic AI + Telegram + Google Calendar + Gemini AI\n\nThis agent can:\n• Understand patient queries like 'Book an appointment tomorrow at 5 PM'\n• Check the doctor's calendar availability\n• Book the slot automatically\n• Remember past conversations & appointments\n• Share booking status instantly via Telegram\n• Block the calendar, send confirmation emails, and reminders\n\n💡 Result: It saves time, avoids manual scheduling, and feels like talking to a real assistant.",
      },
    },
    {
      type: "text",
      props: {
        text: "🔹 Top AI Agent Use Cases in Progress:",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "AI Invoice Processing Agent – Extracts data, updates sheets, and alerts finance",
          "AI Knowledge Assistant – Answers queries from internal docs + web",
          "Personal Productivity Agent – Manages to-dos, prioritizes, and reminds",
          "AI Sales Agent – Researches leads, drafts outreach, and schedules follow-ups",
          "AI Ticket Handling Agent – Reads support tickets, classifies, suggests solutions, and updates CRM",
          "AI Video Story Creator – Generates short explainer or storytelling videos automatically",
        ],
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7368910590255255552?compact=1",
        height: "399",
        width: "504",
        title: "Doctor Appointment Booking Agent - LinkedIn Post",
      },
    },
  ],
} as const satisfies ProjectContent;
