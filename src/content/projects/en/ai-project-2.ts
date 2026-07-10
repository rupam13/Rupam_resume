import type { ProjectContent } from "../../types";

export default {
  title: "Autonomous Appointment Booking Assistant",
  category: "ai",
  theme: "dark",
  tags: ["agentic-ai", "copilot-studio"],
  description:
    "Stop losing patients to scheduling friction. AI handles bookings 24/7 while patients enjoy natural conversations. 70% reduction in no-shows | Instant confirmations | Zero manual work.",
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
        text: "70% NO-SHOW REDUCTION | 90% AUTO-BOOKED | 24/7 AVAILABLE",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nPatients call but get voicemail. They forget confirmation details. Your staff spends hours on repetitive scheduling. Patients go to competitors.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn AI scheduling assistant that understands patient needs, checks real-time availability, sends instant confirmations, and syncs with your calendar. Patients get 24/7 access. Your team gets their time back.",
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
          "70% reduction in no-shows",
          "90% of bookings handled automatically",
          "24/7 availability (never miss a booking)",
          "5 hours/day saved per staff member",
          "Instant patient confirmation & reminders",
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
        text: "Patient initiates conversation → AI understands medical needs & preferred times → System checks real-time availability → AI confirms appointment instantly → Calendar & reminder systems update automatically.",
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
          "🤖 NLP Engine - Understands patient intent & medical context",
          "📅 Calendar Integration - Real-time availability checking",
          "💬 Multi-channel - Phone, SMS, web chat support",
          "📧 Auto-confirmation - Instant SMS & email reminders",
          "🔐 HIPAA Compliant - Secure healthcare data handling",
          "📊 Analytics - No-show predictions & patterns",
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
          "Natural Language Processing",
          "Calendar Integration APIs",
          "SMS/Email Automation",
          "Healthcare Compliance (HIPAA)",
          "Real-time Analytics Engine",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nHealthcare Administrators | Clinic Managers | Patient Coordinators seeking to reduce scheduling headaches and improve patient experience.",
      },
    },
  ],
} as const satisfies ProjectContent;
