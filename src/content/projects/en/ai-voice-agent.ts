import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Voice Agent with Enterprise Integration",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "agentic-ai", "ivr", "servicenow", "mcp"],
  description:
    "Transform customer support from reactive to proactive with AI that understands context, handles complexity, and integrates with your enterprise systems. 60% reduction in call volume | 24/7 availability | 80% first-contact resolution.",
  components: [
    {
      type: "text",
      props: {
        text: "🎯 THE CHALLENGE\nCustomers wait on hold for hours. Manual IVR systems frustrate users. Your support team is drowning in repetitive calls that could be handled instantly.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if customers could have natural conversations with an AI that understands context, handles complex requests intelligently, and routes difficult issues to humans when needed—all integrated with your existing ServiceNow system?",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn enterprise-grade voice agent powered by Microsoft Copilot Studio. It learns from every interaction, makes autonomous decisions, and seamlessly integrates with your entire IT ecosystem.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 60% reduction in incoming call volume\n• 24/7 availability (no more after-hours messages)\n• 80% of queries resolved on first contact\n• Significant cost savings on support operations",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nThe system handles customer calls using natural language understanding, accesses real-time data from ServiceNow, makes intelligent decisions using agentic AI, and seamlessly transfers complex issues to human agents with full context.",
      },
    },
    {
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7476264755083632641?compact=1",
        height: "399",
        width: "504",
        title: "AI-Powered Voice Agent LinkedIn Post",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "🎤 Microsoft Copilot Studio - Voice orchestration engine",
          "🤖 Agentic AI - Autonomous decision-making & task execution",
          "📞 IVR Integration - Seamless phone system connectivity",
          "🔗 ServiceNow MCP - Real-time enterprise data access",
          "🌐 Multi-channel Support - Phone, chat, email integration",
          "🎯 Natural Language Understanding - Context-aware responses",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nCustomer Service Managers | IT Directors | Operations Leaders who want to reduce support costs while improving customer satisfaction.",
      },
    },
  ],
} as const satisfies ProjectContent;
