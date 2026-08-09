export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "copilot-studio"
  | "agentic-ai"
  | "ivr"
  | "servicenow"
  | "mcp"
  | "power-automate"
  | "azure-document-intelligence"
  | "human-in-the-loop"
  | "invoice-processing"
  | "kyc-automation"
  | "accounts-payable"
  | "n8n"
  | "power-bi"
  | "kpi-measurement"
  | "direct-line-api"
  | "handoff"
  | "time-tracking"
  | "python"
  | "rest-api"
  | "sql"
  | "hubspot"
  | "salesforce"
  | "slack"
  | "jira"
  | "github"
  | "azure-openai"
  | "claude"
  | "entra-id"
  | "clearbit"
  | "stripe"
  | "ga4"
  | "powershell"
  | "azure"
  | "accenture"
  | "continuous-improvement";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  "copilot-studio": "Copilot Studio",
  "agentic-ai": "Agentic AI",
  ivr: "IVR",
  servicenow: "ServiceNow",
  mcp: "MCP",
  "power-automate": "Power Automate",
  "azure-document-intelligence": "Azure AI Document Intelligence",
  "human-in-the-loop": "Human-in-the-Loop",
  "invoice-processing": "Invoice Processing",
  "kyc-automation": "KYC Automation",
  "accounts-payable": "Accounts Payable",
  n8n: "n8n",
  "power-bi": "Power BI",
  "kpi-measurement": "KPI Measurement",
  "direct-line-api": "Direct Line API",
  handoff: "Live Agent Handoff",
  "time-tracking": "Time Telemetry",
  python: "Python",
  "rest-api": "REST API",
  sql: "SQL",
  hubspot: "HubSpot",
  salesforce: "Salesforce",
  slack: "Slack",
  jira: "Jira",
  github: "GitHub",
  "azure-openai": "Azure OpenAI",
  claude: "Claude API",
  "entra-id": "Entra ID",
  clearbit: "Clearbit API",
  stripe: "Stripe API",
  ga4: "GA4 API",
  powershell: "PowerShell",
  azure: "Azure",
  accenture: "Accenture CI",
  "continuous-improvement": "Continuous Improvement",
} as const satisfies Record<TagVariant, string>;
