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
        text: "INTELLIGENT VOICE AGENT\nNext Generation AI Communication System",
      },
    },
    {
      type: "text",
      props: {
        text: "Enterprise-grade voice agent powered by advanced AI. Transform support operations with autonomous decision-making, real-time integration, and customer-first automation.",
      },
    },
    {
      type: "infoCards",
      props: {
        cards: [
          {
            title: "Key Metrics",
            icon: "📊",
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
            content: [
              "ServiceNow integration",
              "Advanced security",
              "Compliance certified",
              "Scalable architecture",
            ],
          },
          {
            title: "Business Impact",
            icon: "💰",
            content: [
              "Reduce support costs significantly",
              "Improve customer satisfaction",
              "Empower support teams",
              "Drive revenue growth",
            ],
          },
        ],
      },
    },
    {
      type: "infoCards",
      props: {
        cards: [
          {
            title: "Performance",
            icon: "📊",
            content: [
              "60% call reduction",
              "24/7 availability",
              "80% first-contact resolution",
              "Sub-1 second response",
            ],
          },
          {
            title: "Intelligence",
            icon: "🧠",
            content: [
              "Natural language processing",
              "Context understanding",
              "Autonomous decisions",
              "Continuous learning",
            ],
          },
          {
            title: "Integration",
            icon: "🔗",
            content: [
              "ServiceNow native",
              "IVR compatible",
              "Multi-channel support",
              "Real-time sync",
            ],
          },
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "KEY PERFORMANCE METRICS",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "60% Reduction in Call Volume - Intelligent routing and automation eliminate queue bottlenecks",
          "24/7 Continuous Availability - Always-on support means never missing customer interactions",
          "80% First-Contact Resolution - Smart decisions reduce unnecessary transfers and callbacks",
          "Sub-1 Second Response Time - Instant engagement without frustrating delays",
          "Enterprise System Integration - Seamless ServiceNow, CRM, and backend connectivity",
        ],
      },
    },
    {
      type: "infoCards",
      props: {
        cards: [
          {
            title: "The Challenge",
            icon: "⚠️",
            content: [
              "Long hold times frustrate customers",
              "Manual IVR systems fail to resolve issues",
              "Support teams spend 80% on repetitive work",
              "Lost revenue from customer abandonment",
            ],
          },
          {
            title: "The Solution",
            icon: "✨",
            content: [
              "AI understands natural language",
              "Autonomous intelligent decisions",
              "Seamless system integration",
              "Instant personalized resolution",
            ],
          },
          {
            title: "The Impact",
            icon: "🎯",
            content: [
              "Customers get immediate help",
              "Support teams focus on strategy",
              "Measurable ROI in weeks",
              "Enterprise-grade reliability",
            ],
          },
        ],
      },
    },
    {
      type: "infoCards",
      props: {
        cards: [
          {
            title: "How It Works",
            icon: "⚙️",
            content: [
              "Incoming call detected",
              "Natural language understanding",
              "Real-time data access",
              "Intelligent decision making",
              "Instant resolution or handoff",
              "Complete context transfer",
            ],
          },
          {
            title: "Core Capabilities",
            icon: "⚡",
            content: [
              "NLU engine with sentiment analysis",
              "Autonomous decision-making",
              "Real-time ServiceNow integration",
              "Multi-channel support",
              "Real-time analytics",
              "Custom workflow integration",
            ],
          },
          {
            title: "Technology Stack",
            icon: "🛠️",
            content: [
              "Microsoft Copilot Studio",
              "Agentic AI Framework",
              "GPT-4 language understanding",
              "ServiceNow MCP",
              "IVR System integration",
              "Real-time analytics engine",
            ],
          },
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
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
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "IDEAL FOR\n\nCustomer Service Directors | IT Operations Leaders | Enterprise Support Managers seeking to reduce support costs by 60% while dramatically improving customer satisfaction and employee productivity.",
      },
    },
    {
      type: "text",
      props: {
        text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      },
    },
    {
      type: "text",
      props: {
        text: "READY TO TRANSFORM YOUR SUPPORT OPERATIONS?\n\nSchedule a demo to see the Voice Agent in action. Discover how enterprise teams are cutting support costs and increasing customer satisfaction scores.",
      },
    },
  ],
} as const satisfies ProjectContent;
