import type { ProjectContent } from "../../types";

export default {
  title: "Autonomous Appointment Booking Assistant",
  category: "ai",
  theme: "dark",
  tags: ["agentic-ai", "copilot-studio"],
  heroEmbed: {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7368910590255255552?compact=1",
    title: "Autonomous Appointment Booking Assistant LinkedIn Post",
  },
  description:
    "Stop losing patients to scheduling friction. AI handles bookings 24/7 while patients enjoy natural conversations. 70% reduction in no-shows | Instant confirmations | Zero manual work.",
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
            teaser: "Voicemail loops & missed bookings",
            content: [
              "Patients calling after hours get voicemail",
              "No-shows and appointment memory lapses",
              "Staff spending hours on phone tag",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "24/7 Intelligent Booking AI",
            content: [
              "Conversational natural-language scheduler",
              "Direct integration with calendar systems",
              "Instant SMS/email confirmations",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Efficiency that pays off",
            content: [
              "70% reduction in client no-shows",
              "90% of bookings handled automatically",
              "5 hours/day saved per staff member",
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
            icon: "🤖",
            title: "Natural Language",
            teaser: "Empathetic conversation",
            content: [
              "Understands user intent & medical context",
              "Multi-channel support (Phone, SMS, Web)",
              "Real-time query handling & routing",
            ],
          },
          {
            icon: "📅",
            title: "Calendar Sync",
            teaser: "Instant booking logic",
            content: [
              "Checks live availability instantly",
              "Schedules & updates calendars",
              "Sends automated reminders & follow-ups",
            ],
          },
          {
            icon: "🔐",
            title: "Compliance & Data",
            teaser: "Enterprise reliability",
            content: [
              "HIPAA-compliant data handling",
              "Secure patient data encryption",
              "Full activity analytics & reports",
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
              "Patient initiates booking request",
              "AI analyzes preferred times & schedule",
              "Database confirms and logs appointment",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Robust foundation",
            content: [
              "Natural Language Processing Engine",
              "Calendar Integration APIs",
              "SMS/Email Automation Hub & HIPAA Vault",
            ],
          },
          {
            icon: "👥",
            title: "Ideal For",
            teaser: "Who this helps",
            content: [
              "Clinic Managers & Admins",
              "Patient Coordinators",
              "Teams seeking zero scheduling friction",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
