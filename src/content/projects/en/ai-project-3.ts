import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Email Triage & Organization System",
  category: "ai",
  theme: "dark",
  tags: ["agentic-ai", "copilot-studio"],
  heroEmbed: {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7365669102746599424?compact=1",
    title: "Intelligent Email Triage & Organization System LinkedIn Post",
  },
  description:
    "Turn email chaos into organized efficiency. AI sorts 1,000s of emails instantly. 90% automation rate | Perfect routing | Zero misses.",
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
            teaser: "Inbox chaos & delayed replies",
            content: [
              "Drowning in hundreds of emails daily",
              "Critical issues buried in general inbox",
              "Hours wasted sorting support vs billing",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "Intelligent Triage Engine",
            content: [
              "Pulsing AI reading sender, subject, body",
              "Categorizes into precise smart labels",
              "Routes instantly to the right departments",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Efficiency that pays off",
            content: [
              "90% of emails automatically sorted",
              "8 hours/week saved in manual sorting",
              "100% of critical issues caught & routed",
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
            icon: "🧠",
            title: "Intent & Context",
            teaser: "Beyond simple keywords",
            content: [
              "NLP engine analyzes content meaning",
              "Understands sentiment & urgency",
              "Applies labels & tags automatically",
            ],
          },
          {
            icon: "🔄",
            title: "Smart Routing",
            teaser: "Real-time routing logic",
            content: [
              "Routes to Technical, Billing, Sales",
              "Integrates with existing ticketing",
              "Triggers automatic initial replies",
            ],
          },
          {
            icon: "📊",
            title: "Analytics & Scale",
            teaser: "Operational oversight",
            content: [
              "Tracks inbox trends & bottlenecking",
              "Maintains 90%+ classification success",
              "Scales to process thousands of emails",
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
              "Email arrives in enterprise inbox",
              "AI analyzes intent, category & urgency",
              "Message is labeled and routed to team",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Robust foundation",
            content: [
              "Natural Language Processing (NLP)",
              "ML Text Classification Models",
              "Email API Integrations (Outlook/Gmail)",
            ],
          },
          {
            icon: "👥",
            title: "Ideal For",
            teaser: "Who this helps",
            content: [
              "Operations Managers",
              "Support Team Leaders",
              "Business Analysts seeking inbox sanity",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
