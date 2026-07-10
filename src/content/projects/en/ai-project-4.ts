import type { ProjectContent } from "../../types";

export default {
  title: "Enterprise Policy Intelligence Assistant",
  category: "ai",
  theme: "dark",
  tags: ["agentic-ai", "copilot-studio"],
  heroEmbed: {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7362766749315817472?compact=1",
    title: "Policy Q&A Agent - LinkedIn Post",
  },
  description:
    "Stop policy confusion with instant answers. Employees get 24/7 access to company policies. 95% query resolution | Multi-department support | Compliance guaranteed.",
  components: [
    // Section 1: The Transformation
    {
      type: "text",
      props: {
        text: "🎯 THE TRANSFORMATION",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "❌",
            title: "The Problem",
            teaser: "Policy confusion & buried PDFs",
            content: [
              "Employees asking HR the same questions",
              "Official documents buried in shared folders",
              "HR teams drowning in repetitive tasks",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "Enterprise Policy Brain",
            content: [
              "NLP Q&A bot trained on policy documents",
              "Replies instantly with exact document sources",
              "Available 24/7 on Slack, Teams, and web",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Efficiency that pays off",
            content: [
              "95% of questions resolved instantly",
              "80% reduction in HR support tickets",
              "100% compliance via source-backed citations",
            ],
          },
        ],
      },
    },

    // Section 2: Key Capabilities
    {
      type: "text",
      props: {
        text: "⚡ KEY CAPABILITIES",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "📚",
            title: "RAG & LLM Engine",
            teaser: "Smart retrieval system",
            content: [
              "Searches policy docs via Vector Database",
              "Understands semantic context of queries",
              "Generates natural conversational answers",
            ],
          },
          {
            icon: "💬",
            title: "Multi-Channel",
            teaser: "Where employees work",
            content: [
              "Direct integration with Slack & MS Teams",
              "Web chat widget for internal portal",
              "Email response automation",
            ],
          },
          {
            icon: "📊",
            title: "Audit & Analytics",
            teaser: "Compliance control",
            content: [
              "Tracks search trends & policy gaps",
              "Every answer cites exact document & page",
              "Secure access roles & permission controls",
            ],
          },
        ],
      },
    },

    // Section 3: Architecture & Use
    {
      type: "text",
      props: {
        text: "🛠️ ARCHITECTURE & USE",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "⚙️",
            title: "How It Works",
            teaser: "Step-by-step workflow",
            content: [
              "Employee asks a policy question",
              "Vector DB retrieves matching policy sections",
              "LLM compiles answer citing official sources",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Robust foundation",
            content: [
              "Large Language Models (LLMs)",
              "Retrieval Augmented Generation (RAG)",
              "Vector Databases & Semantic Search",
            ],
          },
          {
            icon: "👥",
            title: "Ideal For",
            teaser: "Who this helps",
            content: [
              "HR & People Managers",
              "Compliance & Audit Officers",
              "IT & Operations Directors",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
