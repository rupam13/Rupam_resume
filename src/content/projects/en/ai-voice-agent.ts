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
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 THE TRANSFORMATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "60% CALL REDUCTION | 24/7 AVAILABILITY | 80% AUTO-RESOLVED",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nCustomers call but wait on hold for hours. Manual IVR frustrates users. Your support team drowns in repetitive calls.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn enterprise-grade voice agent that understands natural language, makes intelligent decisions, and seamlessly integrates with ServiceNow. Customers get instant help. Your team gets their time back.",
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
          "60% reduction in incoming call volume",
          "24/7 availability (no after-hours messages)",
          "80% of queries resolved on first contact",
          "Significant cost savings on support operations",
          "Higher customer satisfaction scores",
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
        text: "Customer calls → AI listens with natural language understanding → Accesses real-time data from ServiceNow → Makes intelligent decisions autonomously → Handles simple issues OR seamlessly transfers to human with full context.",
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
          "🎤 Natural Language Understanding - Understands context & intent",
          "🤖 Agentic AI - Autonomous decision-making & task execution",
          "📞 IVR Integration - Seamless phone system connectivity",
          "🔗 ServiceNow MCP - Real-time enterprise data access",
          "🌐 Multi-channel Support - Phone, chat, email unified",
          "📊 Real-time Analytics - Performance tracking & insights",
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
          "Microsoft Copilot Studio",
          "Agentic AI Framework",
          "IVR System Integration",
          "ServiceNow MCP",
          "Natural Language Processing",
        ],
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
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nCustomer Service Managers | IT Directors | Operations Leaders seeking to reduce support costs while dramatically improving customer satisfaction.",
      },
    },
  ],
} as const satisfies ProjectContent;
