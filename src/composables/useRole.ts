import { ref, watch, computed } from "vue";
import { path } from "./useRouteObserver";

export type Role = "servicenow" | "ai";

const currentRole = ref<Role>("servicenow");

export function useRole() {
  const updateRoleFromPath = () => {
    // Detect role from path: /Rupam_resume/ai or /Rupam_resume/servicenow
    // Also support query params for easier testing: ?role=ai
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get("role");

    if (roleParam === "ai" || path.value.includes("/ai")) {
      currentRole.value = "ai";
    } else if (roleParam === "servicenow" || path.value.includes("/servicenow")) {
      currentRole.value = "servicenow";
    }
  };

  // Watch for path changes to update role
  watch(path, updateRoleFromPath, { immediate: true });

  const toggleRole = () => {
    currentRole.value = currentRole.value === "servicenow" ? "ai" : "servicenow";
    // Update URL without reloading to reflect change
    const url = new URL(window.location.href);
    url.searchParams.set("role", currentRole.value);
    window.history.pushState({}, "", url.toString());
  };

  const roleData = computed(() => {
    if (currentRole.value === "ai") {
      return {
        title: "AI Agent Developer",
        intro: "AI Engineer specializing in Large Language Models (LLMs), LangChain, and autonomous agent architectures.<br />Focused on building intelligent systems that automate complex reasoning and deliver cutting-edge AI solutions.",
        tagline: "Builds intelligent autonomous agents and LLM-powered systems that solve complex problems.",
        skills: [
          { name: "LLMs (OpenAI, Gemini, Claude)" },
          { name: "LangChain & CrewAI" },
          { name: "Python & Fast API" },
          { name: "Vector DBs (Pinecone, Milvus)" },
          { name: "Prompt Engineering & RAG" },
        ],
        projects: ["particles", "cubewar", "quibbo"], // Placeholder AI projects
      };
    }
    return {
      title: "ServiceNow Developer",
      intro: "ServiceNow Developer specializing in building scalable enterprise solutions and automated workflows.<br />Focused on optimizing business processes and delivering high-quality, user-centric experiences within the ServiceNow ecosystem.",
      tagline: "Builds automated workflows and enterprise solutions that are efficient, reliable, and user-friendly.",
      skills: [
        { name: "ServiceNow ITSM & ITOM" },
        { name: "Flow Designer & Integration Hub" },
        { name: "Service Portal & Widget Dev" },
        { name: "JavaScript & Glide API" },
        { name: "Custom Applications & CSA" },
      ],
      projects: ["pokedex", "sharkie", "streakon"], // Placeholder ServiceNow projects
    };
  });

  return {
    currentRole,
    roleData,
    toggleRole,
  };
}
