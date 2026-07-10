import type { ProjectContent } from "../../types";

export default {
  title: "Email Triage & Categorization Agent",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "copilot-studio"],
  description: "Week 2 APA Journey: Building an Intelligent Email Triage Agent that automatically categorizes and labels incoming emails using AI",
  components: [
    {
      type: "text",
      props: {
        text: "🌀 From CPA to APA – Week 2 (Cognitive Process Automation → Agentic Process Automation)",
      },
    },
    {
      type: "text",
      props: {
        text: "Last week, I shared how APA (Agentic Process Automation) is shifting automation from rigid rules to autonomous AI agents.\n👉 In Week 1, my demo was a Doctor Appointment Booking Agent that handled scheduling seamlessly via AI + Google Calendar + Telegram.\n\nNow in Week 2, I explored another powerful use case: Email Triage & Categorization Agent",
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
        text: "Instead of manually sorting through endless emails, this AI agent can:\n✅ Read subject, sender, and body of incoming emails\n✅ Understand the context (billing, account access, product queries, technical support, general)\n✅ Categorize them into the right Gmail label automatically",
      },
    },
    {
      type: "text",
      props: {
        text: "⚡️ Example Scenarios:",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Technical Support → \"App keeps crashing after update\" → Label: Technical_Support",
          "Billing → \"Invoice not received for last month\" → Label: Billing",
          "Account Access → \"Password reset not working\" → Label: Account_Access",
          "Product Inquiry → \"Details on premium plan features\" → Label: Product_Info",
          "General Query → \"Thanks for resolving my issue quickly\" → Label: General",
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
          "Saves hours of manual sorting 📧",
          "Ensures consistent & accurate classification 🏷️",
          "Acts in real-time → triaging as emails arrive ⏱️",
          "Integrates seamlessly into Gmail workflows",
          "Like having a smart assistant who never gets tired of organizing your inbox",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "The APA journey continues—one real-world agent at a time! 🚀",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7365669102746599424?compact=1",
        height: "399",
        width: "504",
        title: "Email Triage & Categorization Agent - LinkedIn Post",
      },
    },
  ],
} as const satisfies ProjectContent;
