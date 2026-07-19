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
        title: "AI Agent Specialist",
        intro: "AI Engineer specializing in Large Language Models (LLMs), LangChain, and Multi-Agent Orchestration (CrewAI, LangGraph).<br />Focused on building intelligent autonomous agents, cognitive search pipelines, and integrating AI workflows directly with enterprise platforms like ServiceNow.",
        tagline: "Designs and deploys intelligent autonomous agent systems, cognitive pipelines, and custom AI copilots to automate complex enterprise reasoning.",
        skills: [
          { name: "LLMs & Multi-Agent Frameworks (CrewAI, LangGraph)" },
          { name: "Microsoft Applied Skills: Create agents in Microsoft Copilot Studio" },
          { name: "RAG Pipelines & Semantic Search" },
          { name: "Python, TypeScript & FastAPI" },
          { name: "Vector DBs (Pinecone, Milvus, PGVector)" },
          { name: "AI-ServiceNow Integrations & Webhooks" },
          { name: "Prompt Engineering & Prompt Flow" },
        ],
        projects: ["ai-voice-agent", "ai-project-2", "ai-project-3", "ai-project-4"],
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
