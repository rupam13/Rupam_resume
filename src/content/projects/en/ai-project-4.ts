import type { ProjectContent } from "../../types";

export default {
  title: "Policy Q&A Agent",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "copilot-studio"],
  description: "Week 3 APA Journey: Building an Enterprise Policy Q&A Agent that provides instant answers to employee policy questions across all departments",
  components: [
    {
      type: "text",
      props: {
        text: "🌀 From CPA to APA – Week 3 (Cognitive Process Automation → Agentic Process Automation)",
      },
    },
    {
      type: "text",
      props: {
        text: "In the last two weeks, I shared how APA (Agentic Process Automation) is shifting automation from rigid rules to autonomous AI agents.\n\n👉 Week 1: Doctor Appointment Booking Agent (AI + Google Calendar + Telegram)\n👉 Week 2: Email Triage & Categorization Agent (AI-driven inbox management)\n\nNow in Week 3, I explored a powerful enterprise use case: Policy Q&A Agent",
      },
    },
    {
      type: "text",
      props: {
        text: "💼 What does this Agent do?",
      },
    },
    {
      type: "text",
      props: {
        text: "Instead of digging through long PDFs or waiting for manual replies, employees can simply ask a question and instantly get:\n✅ Clear, structured answers directly from company policy documents\n✅ Quick responses via Telegram bot\n✅ Bold formatting of key terms for better readability",
      },
    },
    {
      type: "text",
      props: {
        text: "⚡️ Example Scenarios by Department:",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "HR → \"What's the maternity leave duration?\"",
          "Admin → \"Where is the Bengaluru office located?\"",
          "Finance → \"What is the travel reimbursement policy?\"",
          "IT → \"What's the password reset process?\"",
          "Compliance/Legal → \"What's our data retention guideline?\"",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "✨ Why it matters?",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "📂 Centralized access → one agent for all departments",
          "🤝 Reduces dependency on manual HR/IT/Admin teams",
          "⚡ Provides answers 24/7 → no delays",
          "🔗 Integrates with Telegram, Slack, Teams, or any channel",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "The APA journey continues—one real-world agent at a time, with a scope that scales across every department. 🚀",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7362766749315817472?compact=1",
        height: "399",
        width: "504",
        title: "Policy Q&A Agent - LinkedIn Post",
      },
    },
  ],
} as const satisfies ProjectContent;
