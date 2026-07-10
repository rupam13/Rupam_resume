import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Email Triage & Organization System",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "copilot-studio"],
  description:
    "Turn email chaos into organized efficiency. AI sorts 1,000s of emails instantly. 90% automation rate | Perfect routing | Zero misses.",
  components: [
    {
      type: "text",
      props: {
        text: "🎯 THE CHALLENGE\nYour inbox receives hundreds of emails daily. Support tickets mixed with billing questions. Account issues buried in general inquiries. You waste hours sorting before work even begins. Critical issues get missed.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if an AI could read and understand every email, instantly categorize it, and route it to the right team? No missed messages. No manual sorting. Just organized inbox.",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn intelligent email agent powered by NLP that reads incoming messages, understands context and intent, categorizes into the right labels automatically, and routes to appropriate teams in real-time.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 90% of emails automatically sorted\n• 8 hours/week saved in manual categorization\n• 100% critical issues caught & routed\n• Consistent categorization (no human bias)\n• Faster first-response times across teams",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nEmail arrives → AI reads subject, sender, content → NLP engine analyzes intent → System understands category (Technical, Billing, Account, Product, General) → Email automatically labeled & routed → Team acts immediately.",
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
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7365669102746599424?compact=1",
        height: "399",
        width: "504",
        title: "Email Triage & Categorization Agent - LinkedIn Post",
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nOperations Managers | Support Leaders | Business Analysts who want to eliminate inbox chaos and improve team efficiency.",
      },
    },
  ],
} as const satisfies ProjectContent;
