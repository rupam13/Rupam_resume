import type { ProjectContent } from "../../types";

export default {
  title: "Intelligent Business Process Automation Engine",
  theme: "dark",
  category: "servicenow",
  tags: ["servicenow", "javascript", "react"],
  description:
    "Transform manual processes into automated workflows. Remove bottlenecks and accelerate business operations. 70% cycle time reduction | 90% cost savings | Enterprise-grade reliability.",
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
        text: "70% CYCLE TIME REDUCTION | 90% COST SAVINGS | INSTANT APPROVALS",
      },
    },
    {
      type: "text",
      props: {
        text: "❌ THE PROBLEM\nYour business processes are stuck in the past: email chains, manual approvals, repeated data entry, hand-offs between departments. A simple request takes weeks.",
      },
    },
    {
      type: "text",
      props: {
        text: "✅ THE SOLUTION\nAn intelligent workflow engine that automates complex business processes. It handles conditional logic, parallel paths, approval routing, and system integrations—all orchestrated seamlessly across departments.",
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
          "70% reduction in process cycle time",
          "90% cost savings on manual operations",
          "100% consistency (no human variation)",
          "Instant approvals (no waiting)",
          "Better compliance & audit trails",
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
        text: "Process triggered → System evaluates conditions → Intelligent routing directs work → Parallel tasks execute simultaneously → Approvals happen automatically → All systems sync instantly → Process completes in hours, not weeks.",
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
          "⚙️ Flow Designer - Build complex workflows visually",
          "🧠 Intelligent Routing - Smart conditional logic",
          "🔄 Parallel Execution - Multiple tasks simultaneously",
          "✅ Smart Approvals - Conditional, dynamic routing",
          "🔗 System Integration - Syncs data across platforms",
          "📊 Analytics - Process metrics & bottleneck detection",
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
          "ServiceNow Flow Designer",
          "Workflow Orchestration Engine",
          "Smart Business Rules",
          "System Integration APIs",
          "Real-time Analytics",
        ],
      },
    },
    {
      type: "text",
      props: {
        text: "👥 IDEAL FOR\nProcess Managers | Business Analysts | Operations Directors seeking to eliminate manual work and accelerate business operations.",
      },
    },
  ],
} as const satisfies ProjectContent;
