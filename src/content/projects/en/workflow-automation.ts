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
        text: "🎯 THE CHALLENGE\nYour business processes are stuck in the past: email chains, manual approvals, repeated data entry, hand-offs between departments. A simple request takes weeks. Your teams are stuck in busy work instead of strategic work.",
      },
    },
    {
      type: "text",
      props: {
        text: "💡 THE INSIGHT\nWhat if complex processes could run automatically? Approvals could flow intelligently. Data could sync seamlessly. And your team could focus on what matters.",
      },
    },
    {
      type: "text",
      props: {
        text: "✨ THE SOLUTION\nAn intelligent workflow engine that automates complex business processes. It handles conditional logic, parallel paths, approval routing, and system integrations—all orchestrated seamlessly across departments.",
      },
    },
    {
      type: "text",
      props: {
        text: "📊 THE IMPACT\n• 70% reduction in process cycle time\n• 90% cost savings on manual operations\n• 100% consistency (no human variation)\n• Instant approvals (no waiting)\n• Better compliance & audit trails",
      },
    },
    {
      type: "text",
      props: {
        text: "🔧 HOW IT WORKS\nProcess triggered → System evaluates conditions → Intelligent routing directs work → Parallel tasks execute simultaneously → Approvals happen automatically → All systems sync instantly → Process completes in hours, not weeks.",
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
        text: "👥 IDEAL FOR\nProcess Managers | Business Analysts | Operations Directors who want to eliminate manual work and accelerate business operations.",
      },
    },
  ],
} as const satisfies ProjectContent;
