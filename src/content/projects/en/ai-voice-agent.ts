import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Voice Agent with Enterprise Integration",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "agentic-ai", "ivr", "servicenow", "mcp"],
  heroEmbed: {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7476264755083632641?compact=1",
    title: "AI-Powered Voice Agent LinkedIn Post",
  },
  description:
    "Transform customer support from reactive to proactive with AI that understands context, handles complexity, and integrates with your enterprise systems. 60% reduction in call volume | 24/7 availability | 80% first-contact resolution.",
  components: [
    // Hero section
    {
      type: "text",
      props: {
        text: "🎯 INTELLIGENT VOICE AGENT",
      },
    },
    {
      type: "text",
      props: {
        text: "Enterprise-grade AI that transforms customer support operations. Get instant answers, reduce costs, and empower your team with autonomous intelligence.",
      },
    },

    // Key metrics showcase
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            title: "Key Metrics",
            icon: "📊",
            teaser: "See the jaw-dropping performance numbers! 📈",
            content: [
              "60% call volume reduction",
              "24/7 continuous availability",
              "80% first-contact resolution",
              "Sub-1 second response time",
            ],
          },
          {
            title: "Core Features",
            icon: "⚡",
            teaser: "What makes this intelligent agent tick? ⚡",
            content: [
              "Natural language understanding",
              "Autonomous decision-making",
              "Real-time system integration",
              "Multi-channel support",
            ],
          },
          {
            title: "Enterprise Ready",
            icon: "🏢",
            teaser: "Built for high-stakes enterprise scale! 🏢",
            content: [
              "ServiceNow integration",
              "Advanced security",
              "Compliance certified",
              "Scalable architecture",
            ],
          },
        ],
      },
    },

    // Divider
    {
      type: "text",
      props: {
        text: "",
      },
    },

    // Problem & Solution
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            title: "The Problem",
            icon: "😞",
            teaser: "Customer support queues are totally broken! 😞",
            content: [
              "Customers wait on hold for hours",
              "Manual IVR systems fail to resolve",
              "80% of support time on repetitive work",
              "Revenue lost to customer abandonment",
            ],
          },
          {
            title: "The Solution",
            icon: "✨",
            teaser: "Say hello to your new 24/7 AI agent! ✨",
            content: [
              "AI that understands context",
              "Autonomous intelligent decisions",
              "Seamless enterprise integration",
              "Instant personalized resolution",
            ],
          },
          {
            title: "The Outcome",
            icon: "🎯",
            teaser: "Happy customers and happy human support teams! 🎯",
            content: [
              "Immediate customer satisfaction",
              "Support teams focus on strategy",
              "ROI measurable in weeks",
              "Enterprise-grade reliability",
            ],
          },
        ],
      },
    },

    // Divider
    {
      type: "text",
      props: {
        text: "",
      },
    },

    // Technical deep dive
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            title: "How It Works",
            icon: "⚙️",
            teaser: "The step-by-step user call journey! ⚙️",
            content: [
              "Incoming call → Natural language understanding",
              "Real-time data access to customer history",
              "Intelligent autonomous decision making",
              "Instant resolution or smart handoff",
              "Complete context transfer if needed",
            ],
          },
          {
            title: "Capabilities",
            icon: "🚀",
            teaser: "Superpowers of our conversational AI! 🚀",
            content: [
              "NLU engine with sentiment analysis",
              "Autonomous decision-making with guardrails",
              "Real-time ServiceNow integration",
              "Multi-channel support (phone, chat, email)",
              "Real-time analytics dashboard",
              "Custom workflow integration",
            ],
          },
          {
            title: "Technology",
            icon: "🛠️",
            teaser: "The stack powering the automation! 🛠️",
            content: [
              "Microsoft Copilot Studio",
              "Agentic AI Framework",
              "GPT-4 powered NLP",
              "ServiceNow MCP",
              "IVR System integration",
              "Real-time analytics engine",
            ],
          },
        ],
      },
    },

  ],
} as const satisfies ProjectContent;
