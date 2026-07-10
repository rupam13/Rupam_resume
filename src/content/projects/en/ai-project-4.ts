import type { ProjectContent } from "../../types";

export default {
  title: "Enterprise Policy Intelligence Assistant",
  category: "ai",
  theme: "dark",
  tags: ["agentic-ai", "copilot-studio"],
  description:
    "Stop policy confusion with instant answers. Employees get 24/7 access to company policies. 95% query resolution | Multi-department support | Compliance guaranteed.",
  components: [
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 THE TRANSFORMATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "95% INSTANT ANSWERS | 24/7 AVAILABLE | 80% LESS HR TICKETS",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nEmployees constantly ask HR the same questions. Policy documents are buried in PDFs. Your HR team is drowning. Compliance gaps emerge from missing information.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn AI assistant trained on all company policies that understands questions in natural language and returns clear, accurate answers from policy documents. Available 24/7 via Slack, Teams, or chat.",
      },
    },
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 BUSINESS IMPACT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "95% of policy questions answered instantly",
          "80% reduction in HR support tickets",
          "24/7 availability (no after-hours waiting)",
          "100% compliance (answers from official documents)",
          "Multi-department coverage (HR, Finance, IT, Compliance)",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS",
      },
    },
    {
      type: "text",
      props: {
        text: "Employee asks question → AI searches policy database → System extracts relevant policy section → Answer is generated with source reference → Employee gets instant, verified answer.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 KEY CAPABILITIES",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "📚 RAG System - Retrieves from policy documents",
          "🧠 LLM Powered - Understands complex questions",
          "📄 Vector Database - Fast, accurate policy search",
          "💬 Multi-channel - Slack, Teams, email, web chat",
          "🔐 Source-backed - Every answer cites the policy",
          "📊 Analytics - Tracks trending questions & gaps",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "🛠️ TECHNOLOGY STACK",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "Large Language Model (LLM)",
          "Retrieval Augmented Generation (RAG)",
          "Vector Database",
          "Natural Language Understanding",
          "Policy Management System",
        ],
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
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nHR Managers | Compliance Officers | IT Directors seeking to scale policy knowledge across the organization without scaling headcount.",
      },
    },
  ],
} as const satisfies ProjectContent;
