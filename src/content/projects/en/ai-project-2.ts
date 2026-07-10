import type { ProjectContent } from "../../types";

export default {
  title: "Autonomous Appointment Booking Assistant",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "copilot-studio"],
  description:
    "Stop losing patients to scheduling friction. AI handles bookings 24/7 while patients enjoy natural conversations. 70% reduction in no-shows | Instant confirmations | Zero manual work.",
  components: [
    {
      type: "text",
      props: {
        text: "🎯 THE CHALLENGE\nPatients call to book appointments but get voicemail. They forget confirmation details. Your staff spends hours on repetitive scheduling. Patients go to competitors who make it easier.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if patients could book appointments through natural conversation—anytime, anywhere? No phone tag. No forgotten details. Just instant confirmation.",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn AI scheduling assistant that understands patient needs, checks real-time availability, sends instant confirmations via SMS/email, and syncs directly with your calendar system. Patients get 24/7 access. Your team gets their time back.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 70% reduction in no-shows\n• 90% of bookings handled automatically\n• 24/7 availability (no lost business)\n• 5 hours/day saved per staff member\n• Instant patient confirmation",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nPatient initiates conversation (phone, SMS, or web). AI understands their medical needs and preferred times. System checks real-time calendar availability. AI confirms appointment instantly. Calendar and reminder systems update automatically.",
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
      type: "embed",
      props: {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7368910590255255552?compact=1",
        height: "399",
        width: "504",
        title: "Doctor Appointment Booking Agent - LinkedIn Post",
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nHealthcare Administrators | Clinic Managers | Patient Coordinators who want to reduce scheduling headaches and improve patient experience.",
      },
    },
  ],
} as const satisfies ProjectContent;
