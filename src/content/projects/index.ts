import type { Locale } from "../../i18n/types";

export const projectIds = ["ai-voice-agent", "efficiency-tracker-kpi", "copilot-handoff-portal", "invoice-automation", "kyc-processing", "ai-project-2", "ai-project-3", "ai-project-4", "ticket-management", "workflow-automation", "incident-management"];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

export const projectModules = {
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
} as const satisfies Record<Locale, Record<string, any>>;
