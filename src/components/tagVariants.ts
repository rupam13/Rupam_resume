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
  | "mcp";

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
} as const satisfies Record<TagVariant, string>;
