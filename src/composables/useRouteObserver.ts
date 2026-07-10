import { ref, computed, onMounted, onUnmounted } from "vue";
import { isTransitioning } from "./useProjectTransition";

// -----------------------------------------------------------------------------
// GLOBAL REACTIVE PATH (with Base URL handling)
// -----------------------------------------------------------------------------

export function getRelativePath(absolutePath: string): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") return absolutePath;

  if (absolutePath.startsWith(base)) {
    return absolutePath.slice(base.length - 1);
  }

  const baseWithoutTrailing = base.endsWith("/") ? base.slice(0, -1) : base;
  if (absolutePath === baseWithoutTrailing) {
    return "/";
  }

  return absolutePath;
}

export function resolveAbsolutePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") return path;

  const formattedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  return `${formattedBase}${formattedPath}`;
}

export const path = ref(typeof window !== "undefined" ? getRelativePath(window.location.pathname) : "/");

// -----------------------------------------------------------------------------
// COMPUTED HELPERS
// -----------------------------------------------------------------------------

export const isProjectRoute = (path: string) => {
  return path.match(/\/([a-z-]+)\/project\/([^/]+)$/) || path.match(/\/project\/([^/]+)$/);
};

export const projectCategory = computed(() => {
  const categoryMatch = path.value.match(/\/([a-z-]+)\/project\/([^/]+)$/);
  return categoryMatch ? categoryMatch[1] : null;
});

export const projectId = computed(() => {
  const categoryMatch = path.value.match(/\/([a-z-]+)\/project\/([^/]+)$/);
  if (categoryMatch) return categoryMatch[2];

  const legacyMatch = path.value.match(/\/project\/([^/]+)$/);
  return legacyMatch ? legacyMatch[1] : null;
});

export const projectVisible = computed(() => {
  return projectId.value !== null && !isTransitioning.value;
});

export const recentProject = ref<string | null>(null);

export const recentProjectId = computed(() => {
  if (projectId.value) {
    recentProject.value = projectId.value;
  }
  return recentProject.value;
});

// -----------------------------------------------------------------------------
// HISTORY PATCH (safe & minimal)
// -----------------------------------------------------------------------------

let historyPatched = false;

function patchHistory() {
  if (historyPatched || typeof window === "undefined") return;
  historyPatched = true;

  const wrap = (key: "pushState" | "replaceState") => {
    const original = history[key];
    history[key] = function (...args) {
      // @ts-ignore
      original.apply(this, args);

      // IMPORTANT FIX: delay events to avoid reactivity collisions
      queueMicrotask(() => {
        window.dispatchEvent(new Event("route-change"));
      });
    };
  };

  wrap("pushState");
  wrap("replaceState");
}

// -----------------------------------------------------------------------------
// COMPOSABLE
// -----------------------------------------------------------------------------

export function useRouteObserver() {
  const update = () => {
    const newPath = window.location.pathname;
    const relPath = getRelativePath(newPath);
    if (relPath !== path.value) {
      path.value = relPath;
    }
  };
  onMounted(() => {
    patchHistory();
    update();

    window.addEventListener("popstate", update);
    window.addEventListener("route-change", update);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", update);
    window.removeEventListener("route-change", update);
  });

  return {
    path,
    projectId,
    recentProjectId,
  };
}
