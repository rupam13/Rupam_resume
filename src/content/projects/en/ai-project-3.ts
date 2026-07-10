import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Email Triage & Organization System",
  category: "ai",
  theme: "dark",
  tags: ["agentic-ai", "copilot-studio"],
  description:
    "Turn email chaos into organized efficiency. AI sorts 1,000s of emails instantly. 90% automation rate | Perfect routing | Zero misses.",
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
        text: "90% AUTO-SORTED | ZERO LOST EMAILS | 8 HOURS/WEEK SAVED",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nYour inbox receives hundreds of emails daily. Support tickets mixed with billing questions. Critical issues buried. You waste hours sorting before real work begins.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn intelligent email agent powered by NLP that reads incoming messages, understands context, categorizes into the right labels automatically, and routes to appropriate teams in real-time.",
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
          "90% of emails automatically sorted",
          "8 hours/week saved in manual categorization",
          "100% critical issues caught & routed",
          "Consistent categorization (no human bias)",
          "Faster first-response times across teams",
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
        text: "Email arrives → AI reads subject, sender, content → NLP engine analyzes intent → System understands category (Technical, Billing, Account, Product, General) → Email automatically labeled & routed → Team acts immediately.",
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
          "🧠 NLP Engine - Understands email intent & context",
          "📧 Real-time Processing - Categorizes as emails arrive",
          "🏷️ Smart Labels - Automatically applies correct tags",
          "🔄 Multi-department Routing - Routes to right teams",
          "📊 Analytics - Tracks categorization patterns",
          "⚡ High Accuracy - 90%+ categorization success",
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
          "Natural Language Processing (NLP)",
          "Machine Learning Classification",
          "Email API Integration",
          "Real-time Processing Engine",
          "Pattern Analysis & Learning",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nOperations Managers | Support Leaders | Business Analysts seeking to eliminate inbox chaos and improve team efficiency.",
      },
    },
  ],
} as const satisfies ProjectContent;
