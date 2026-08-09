import { ref, watch, computed } from "vue";
import { path, resolveAbsolutePath } from "./useRouteObserver";

export type Role = "servicenow" | "ai";

const currentRole = ref<Role>("servicenow");

export function useRole() {
  const updateRoleFromPath = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get("role");
    const currentPath = path.value.toLowerCase();

    // 1. Determine the active role
    if (roleParam === "ai" || currentPath.includes("/ai") || currentPath.includes("/ai_agent_developer")) {
      currentRole.value = "ai";
    } else if (roleParam === "servicenow" || currentPath.includes("/servicenow")) {
      currentRole.value = "servicenow";
    } else if (currentPath === "/") {
      // Default fallback when visiting the root path
      currentRole.value = "ai";
    }

    // 2. Perform URL path redirection/clean-ups
    if (typeof window !== "undefined") {
      if (currentPath === "/") {
        const targetPath = currentRole.value === "servicenow" ? "/servicenow" : "/ai";
        window.history.replaceState(null, "", resolveAbsolutePath(targetPath));
      } else if (roleParam) {
        // Strip the role query parameter and use path routing instead
        const url = new URL(window.location.href);
        url.searchParams.delete("role");
        window.history.replaceState(null, "", url.toString());
      }
    }
  };

  // Watch for path changes to update role
  watch(path, updateRoleFromPath, { immediate: true });

  const toggleRole = () => {
    const nextRole = currentRole.value === "servicenow" ? "ai" : "servicenow";
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", resolveAbsolutePath(`/${nextRole}`));
    }
  };

  const roleData = computed(() => {
    if (currentRole.value === "ai") {
      return {
        title: "AI Agent & Automation Specialist",
        intro: "AI & Automation Engineer building end-to-end intelligent autonomous workflows and enterprise agentic systems.<br />Specializing in real-world automation solutions including Accounts Payable, HR approval workflows with Human-in-the-Loop, automated KYC validation, and intelligent Invoice Processing integrated with enterprise platforms.",
        tagline: "Deploys autonomous AI agents and enterprise automation solutions for Accounts Payable, HR Human-in-the-Loop approvals, KYC, and Invoice Processing.",
        skills: [
          { name: "LLMs & Agentic Automation (Copilot Studio, n8n)" },
          { name: "Microsoft Copilot Studio" },
          { name: "Power Automate & Power BI" },
          { name: "RAG Pipelines & Semantic Search" },
          { name: "Python" },
          { name: "Vector DBs (Pinecone, Milvus, PGVector)" },
          { name: "AI-ServiceNow Integrations & Webhooks" },
          { name: "Prompt Engineering & Prompt Flow" },
        ],
        projects: ["ai-voice-agent", "powerbi-automation-kpi", "copilot-handoff-portal", "invoice-automation", "kyc-processing", "ai-project-2", "ai-project-3", "ai-project-4"],
      };
    }
    return {
      title: "ServiceNow Developer",
      intro: "ServiceNow Developer specializing in building scalable enterprise solutions and automated workflows.<br />Focused on optimizing business processes, custom application development, and delivering high-quality, user-centric portal experiences.",
      tagline: "Builds automated workflows and enterprise solutions that are efficient, reliable, and user-friendly.",
      skills: [
        { name: "ServiceNow ITSM & ITOM" },
        { name: "Flow Designer & Integration Hub" },
        { name: "Service Portal & Widget Dev" },
        { name: "JavaScript & Glide API" },
        { name: "Custom Applications & CSA" },
        { name: "REST / SOAP Integrations" },
        { name: "Automated Test Framework (ATF)" },
      ],
      projects: ["ticket-management", "workflow-automation", "incident-management"],
    };
  });

  return {
    currentRole,
    roleData,
    toggleRole,
  };
}
