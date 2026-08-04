import type { ProjectContent } from "../../types";

export default {
  title: "Enterprise Invoice & Accounts Payable Automation",
  category: "ai",
  theme: "dark",
  tags: ["power-automate", "azure-document-intelligence", "human-in-the-loop", "invoice-processing", "accounts-payable"],
  description:
    "Automated end-to-end Invoice & Accounts Payable processing using Power Automate, prebuilt Azure AI Document Intelligence model, and Human-in-the-Loop (HITL) approval workflows. 85% processing time saved | 99% extraction accuracy | Zero manual entry.",
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
            teaser: "Manual AP Bottlenecks",
            content: [
              "Hours spent manually typing invoice data into ERPs",
              "Delayed vendor payments & lost early-payment discounts",
              "High risk of human data entry & calculation errors",
            ],
          },
          {
            icon: "✅",
            title: "The Solution",
            teaser: "Intelligent Power Automate Pipeline",
            content: [
              "Prebuilt Azure AI Document Intelligence model for invoice parsing",
              "Power Automate automated extraction & field validation",
              "Human-in-the-Loop (HITL) approvals via Adaptive Cards",
            ],
          },
          {
            icon: "📈",
            title: "Business Impact",
            teaser: "Rapid ROI & Accuracy",
            content: [
              "85% reduction in total invoice processing cycle time",
              "99% accurate line-item and total extraction",
              "100% audit trail and approval transparency",
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
            icon: "📄",
            title: "Azure Prebuilt AI",
            teaser: "Zero-training model",
            content: [
              "Extracts Vendor, Invoice Date, Total Amount & Tax",
              "Parses complex line-item tables automatically",
              "Handles PDFs, scans, and multi-page invoices",
            ],
          },
          {
            icon: "🔄",
            title: "Power Automate",
            teaser: "Seamless cloud flow",
            content: [
              "Triggers automatically on incoming email invoices",
              "Validates vendor records & math cross-checks",
              "Posts structured data into backend ERP/AP systems",
            ],
          },
          {
            icon: "👤",
            title: "Human-in-the-Loop",
            teaser: "HITL Control & Oversight",
            content: [
              "Low-confidence extractions routed for human review",
              "Teams Adaptive Cards for instant one-click approvals",
              "Configurable threshold limits for manager sign-off",
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
            teaser: "Automated end-to-end flow",
            content: [
              "Invoice received via Email / Folder trigger",
              "Azure AI prebuilt model extracts all key fields",
              "Rule check: High confidence auto-approved, edge cases sent to HITL",
              "Approved payload posted to AP database/ERP",
            ],
          },
          {
            icon: "🛠️",
            title: "Tech Stack",
            teaser: "Enterprise AI Stack",
            content: [
              "Power Automate (Cloud Flows)",
              "Azure AI Document Intelligence (Invoice Model)",
              "Microsoft Teams Adaptive Cards (HITL)",
              "SharePoint / Dataverse / ERP Connector",
            ],
          },
          {
            icon: "👥",
            title: "Target Use Cases",
            teaser: "Who this powers",
            content: [
              "Accounts Payable & Finance Operations",
              "Procurement & Vendor Management",
              "Enterprise teams eliminating paper invoice processing",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
