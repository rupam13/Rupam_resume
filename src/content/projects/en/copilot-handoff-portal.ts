import type { ProjectContent } from "../../types";

export default {
  title: "Human-in-the-Loop Approval System — Copilot Studio & n8n",
  category: "ai",
  theme: "dark",
  tags: ["copilot-studio", "n8n", "human-in-the-loop", "power-automate", "power-bi"],
  description:
    "Enterprise approval automation built with Microsoft Copilot Studio and n8n. Any request raised via chat or form is automatically routed to the right approver — manager gets notified, reviews, approves or rejects, and the system logs the outcome. Zero manual follow-up needed.",
  components: [
    // Section 1: What This System Does
    {
      type: "text",
      props: {
        text: "✅ WHAT IS HUMAN-IN-THE-LOOP APPROVAL?",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "🤖",
            title: "Copilot Studio — Request Intake",
            teaser: "Employee raises request via chat",
            content: [
              "Employee chats with Copilot Studio bot to raise a request (leave, access, purchase, exception)",
              "Bot collects all required details — requestor name, type, reason, supporting info",
              "Triggers the n8n approval workflow automatically on submission",
            ],
          },
          {
            icon: "🔄",
            title: "n8n — Approval Routing Engine",
            teaser: "Smart routing to the right approver",
            content: [
              "n8n workflow receives the request payload from Copilot Studio",
              "Identifies the correct approver based on department, request type, or hierarchy",
              "Sends approval notification to manager via Teams, Email, or both",
            ],
          },
          {
            icon: "👤",
            title: "Human Approver — Review & Decide",
            teaser: "Manager approves or rejects with one click",
            content: [
              "Approver receives a structured notification with full request context",
              "One-click Approve / Reject directly from Teams message or email",
              "Optional: add comments or escalate to next level approver",
            ],
          },
        ],
      },
    },

    // Section 2: How the Workflow Runs
    {
      type: "text",
      props: {
        text: "⚙️ HOW THE APPROVAL WORKFLOW RUNS END-TO-END",
      },
    },
    {
      type: "infoCards",
      props: {
        variant: "cartoon",
        cards: [
          {
            icon: "📋",
            title: "Step 1 — Request Captured",
            teaser: "Structured intake via Copilot bot",
            content: [
              "Employee submits request through Copilot Studio conversational bot",
              "All fields validated before triggering workflow — no incomplete requests",
              "Request ID auto-generated for tracking and audit trail",
            ],
          },
          {
            icon: "📩",
            title: "Step 2 — Approver Notified",
            teaser: "Instant notification with full context",
            content: [
              "n8n sends Teams Adaptive Card or email with request summary",
              "Approver sees: who raised it, what they need, and why",
              "Reminder auto-sent if no response within configured SLA hours",
            ],
          },
          {
            icon: "✅",
            title: "Step 3 — Decision Logged & Actioned",
            teaser: "Outcome recorded and requestor notified",
            content: [
              "Approve → n8n triggers next action (access provisioned, leave recorded, etc.)",
              "Reject → requestor notified instantly with reason via Copilot bot reply",
              "All decisions logged in SharePoint / Excel / database for audit",
            ],
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
