import type { ProjectContent } from "../../types";

export default {
  title: "Doctor Appointment Booking Agent",
  theme: "dark",
  category: "ai",
  tags: ["agentic-ai", "n8n", "gemini", "telegram"],
  description: "Von CPA zu APA: Aufbau eines agentengesteuerten KI-Arzterminbuchungssystems mit natürlicher Sprachverarbeitung",
  components: [
    {
      type: "text",
      props: {
        text: "🌀 Von CPA zu APA - Cognitive Process Automation → Agentic Process Automation",
      },
    },
    {
      type: "text",
      props: {
        text: "Im Laufe der Jahre ging es bei der Automatisierung um Regeln und Arbeitsabläufe. Jetzt betreten wir die Welt der APA – Agentic Process Automation 🚀\n\nHier kann KI nicht nur Regeln befolgen. Sie kann:\n✅ Abfragen in natürlicher Sprache verstehen\n✅ Frühere Gespräche & Kontext speichern\n✅ Autonom Entscheidungen treffen und Maßnahmen ergreifen\n✅ Mit mehreren Tools über Smart Nodes & MCP interagieren",
      },
    },
    {
      type: "text",
      props: {
        text: "🔹 Anwendungsfall der Woche 1: Doctor Appointment Booking Agent",
      },
    },
    {
      type: "text",
      props: {
        text: "Gebaut mit Agentic AI + Telegram + Google Calendar + Gemini AI\n\nDieser Agent kann:\n• Patientenabfragen wie \"Termin morgen um 17 Uhr buchen\" verstehen\n• Verfügbarkeit im Arztkanlender prüfen\n• Zeitfenster automatisch buchen\n• Frühere Gespräche & Termine speichern\n• Buchungsstatus sofort über Telegram weitergeben\n• Kalender blockieren, Bestätigungsmails und Erinnerungen senden\n\n💡 Ergebnis: Spart Zeit, vermeidet manuelle Planung und fühlt sich wie ein echtes Gespräch an.",
      },
    },
    {
      type: "text",
      props: {
        text: "🔹 Top AI Agent Anwendungsfälle in Arbeit:",
      },
    },
    {
      type: "list",
      props: {
        items: [
          "KI-Rechnungsverarbeitungs-Agent – Extrahiert Daten, aktualisiert Sheets, warnt Finanzteam",
          "KI-Wissensassistent – Beantwortet Fragen aus internen Dokumenten + Web",
          "Persönlicher Produktivitäts-Agent – Verwaltet TODOs, priorisiert und erinnert",
          "KI-Vertriebsagent – Recherchiert Leads, schreibt Ansprachen, plant Folgeaufgaben",
          "KI-Ticketing-Agent – Liest Support-Tickets, klassifiziert, schlägt Lösungen vor, aktualisiert CRM",
          "KI-Video-Story-Creator – Generiert automatisch Erklär- oder Storytelling-Videos",
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
  ],
} as const satisfies ProjectContent;
