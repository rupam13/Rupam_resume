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
  | "n8n";

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
} as const satisfies Record<TagVariant, string>;
