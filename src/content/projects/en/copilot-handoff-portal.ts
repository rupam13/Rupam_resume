import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Human-in-the-Loop Approval System",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "human-in-the-loop", "power-automate", "power-bi"],
  description:
    "End-to-end approval automation built entirely in Microsoft Copilot Studio. Requests flow from employee chat → Teams/Outlook approval → Manager confirmation → SharePoint List storage with timestamp logging to calculate approval turnaround time at every handoff stage.",
  components: [
    // Section 1: How Request Flows
    {
      type: "text",
      props: {
        text: "📋 HOW THE APPROVAL REQUEST FLOWS — STEP BY STEP",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "🤖",
            title: "Step 1 — Employee Raises Request via Copilot Studio",
            teaser: "Conversational intake — no forms needed",
            content: [
              "Employee chats with Copilot Studio bot to raise any approval request (leave, access, exception, purchase)",
              "Bot collects: Employee Name, Department, Request Type, Reason, and supporting details",
              "All inputs validated before triggering workflow — incomplete requests are rejected at intake",
              "Timestamp 1 logged: Request Raised Time (T1)",
            ],
          },
          {
            icon: "📩",
            title: "Step 2 — Approver Notified via Teams & Outlook",
            teaser: "Dual-channel notification to approver",
            content: [
              "Power Automate (triggered by Copilot Studio) sends Adaptive Card to approver's Microsoft Teams",
              "Simultaneously sends a structured Outlook email with full request summary",
              "Adaptive Card has inline Approve / Reject buttons — no need to open any portal",
              "Timestamp 2 logged: Notification Sent Time (T2) — used to calculate response SLA",
            ],
          },
          {
            icon: "✅",
            title: "Step 3 — Approver Decision + Manager Confirmation",
            teaser: "Two-level approval: approver + manager",
            content: [
              "Approver clicks Approve or Reject directly in Teams or Outlook",
              "If Approved → Manager receives a separate Teams confirmation request for final sign-off",
              "Manager adds confirmation note and submits — this triggers the final action",
              "Timestamp 3 logged: Manager Confirmation Time (T3)",
            ],
          },
        ],
      },
    },

    // Section 2: SharePoint Storage & Time Interval Tracking
    {
      type: "text",
      props: {
        text: "🕐 SHAREPOINT DATA STORAGE & APPROVAL TIME INTERVAL TRACKING",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "📂",
            title: "SharePoint List — Central Data Store",
            teaser: "Every approval stored with full audit trail",
            content: [
              "Once approved, Power Automate writes a new row to SharePoint List automatically",
              "Columns stored: Employee, Department, Request Type, Approver, Manager, Decision, Comments",
              "T1 (Raised), T2 (Notified), T3 (Manager Confirmed) — all timestamps stored per record",
              "SharePoint acts as the single source of truth — accessible to HR and management",
            ],
          },
          {
            icon: "⏱️",
            title: "Time Interval Calculation at Each Handoff",
            teaser: "Measures how long each stage took",
            content: [
              "T2 − T1 = Time taken to notify approver after request raised",
              "T3 − T2 = Time taken by approver to respond (approver SLA)",
              "T3 − T1 = Total end-to-end approval turnaround time",
              "Calculated columns in SharePoint List surface these intervals automatically",
            ],
          },
          {
            icon: "📊",
            title: "Management Visibility — Approval Analytics",
            teaser: "Who is slow? Which requests take longest?",
            content: [
              "Power BI connected to SharePoint List shows average approval time per department",
              "Identifies bottlenecks — which approvers or request types take the most time",
              "Management can track SLA compliance across all approval types in real time",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
