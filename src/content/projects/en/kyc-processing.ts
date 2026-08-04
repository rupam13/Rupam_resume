import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent KYC & Identity Document Verification",
  category: "ai",
  theme: "dark",
  tags: ["power-automate", "azure-document-intelligence", "human-in-the-loop", "kyc-automation"],
  description:
    "Automated Identity Document verification and Customer Onboarding (KYC) using Power Automate, prebuilt Azure AI Document Intelligence ID model, and Human-in-the-Loop (HITL) compliance verification. 90% faster onboarding | 99.5% ID parsing accuracy | Secure & compliant.",
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
            teaser: "Onboarding Friction",
            content: [
              "Manual verification of PAN cards, passports & driver's licenses",
              "Customer onboarding delays & dropped applications",
              "Compliance risks & error-prone manual document checks",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "Automated KYC Verification",
            content: [
              "Azure AI prebuilt ID model parses identity documents instantly",
              "Power Automate runs expiration & authenticity rule checks",
              "Human-in-the-Loop (HITL) review flow for flagged documents",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Fast & Secure Onboarding",
            content: [
              "90% reduction in customer onboarding verification time",
              "99.5% ID field extraction accuracy",
              "Full AML/KYC audit trail & enterprise data security",
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
            icon: "🪪",
            title: "Prebuilt ID Model",
            teaser: "PAN & Global ID Support",
            content: [
              "Extracts Name, DOB, ID Number, Expiration & Address",
              "Supports PAN cards, Passports, Driver's Licenses, and National IDs",
              "Automated document type & orientation detection",
            ],
          },
          {
            icon: "⚡",
            title: "Power Automate Flow",
            teaser: "Automated Verification",
            content: [
              "Instant extraction triggered on document upload",
              "Validates expiration dates & mandatory identity fields",
              "Syncs verified customer data directly to CRM / Core Banking",
            ],
          },
          {
            icon: "🛡️",
            title: "Human-in-the-Loop",
            teaser: "Compliance Guardrails",
            content: [
              "Flagged / expired / low-confidence IDs routed to compliance officers",
              "Interactive review cards for quick manual decisioning",
              "Encrypted document storage adhering to strict privacy laws",
            ],
          },
        ],
      },
    },

    // Section 3: Architecture & Tech Stack
    {
      type: "text",
      props: {
        text: "🛠️ ARCHITECTURE & TECH STACK",
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
            teaser: "Step-by-step KYC Pipeline",
            content: [
              "User submits identity document photo/scan",
              "Azure AI prebuilt ID model extracts identity data",
              "Validation logic checks document status & expiration",
              "HITL trigger for compliance review if flagged; clean IDs auto-verified",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Enterprise Cloud AI",
            content: [
              "Power Automate (Cloud Flows)",
              "Azure AI Document Intelligence (Prebuilt ID Model)",
              "Microsoft Teams / Outlook Approvals (HITL)",
              "Dataverse / Azure Blob Secure Storage",
            ],
          },
          {
            icon: "👥",
            title: "Target Use Cases",
            teaser: "Who this powers",
            content: [
              "Compliance & Risk Operations",
              "Digital Customer Onboarding",
              "Financial & Legal Services requiring KYC compliance",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
