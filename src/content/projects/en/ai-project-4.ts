import type { ProjectContent } from "../../types";

export default {
  title: "Enterprise Policy Intelligence Assistant",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "copilot-studio"],
  description:
    "Stop policy confusion with instant answers. Employees get 24/7 access to company policies. 95% query resolution | Multi-department support | Compliance guaranteed.",
  components: [
    {
      type: "text",
      props: {
        text: "🎯 THE CHALLENGE\nEmployees constantly ask HR: \"What's the leave policy?\" Finance: \"Travel reimbursement limit?\" IT: \"Password requirements?\" Your HR team is drowning in the same questions repeatedly. Policy documents are buried in PDFs nobody reads.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if employees could ask policy questions and get instant, accurate answers 24/7? No more waiting for HR responses. No more PDF hunting. Just ask and know.",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn AI assistant trained on all company policies that understands questions in natural language and returns clear, accurate answers from policy documents. Available via Slack, Teams, or chat—wherever your employees work.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 95% of policy questions answered instantly\n• 80% reduction in HR support tickets\n• 24/7 availability (no after-hours waiting)\n• 100% compliance (answers from official documents)\n• Multi-department coverage (HR, Finance, IT, Compliance)",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nEmployee asks question → AI searches policy database → System extracts relevant policy section → Answer is generated with source reference → Employee gets instant, verified answer.",
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
        text: "👥 IDEAL FOR\nHR Managers | Compliance Officers | IT Directors who want to scale policy knowledge across the organization without scaling headcount.",
      },
    },
  ],
} as const satisfies ProjectContent;
