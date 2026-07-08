export interface ProjectData {
  title: string;
  slug: string;
  category: string;
  theme: "light" | "dark";
  tags: string[];
  description: string;
  thumbnail: string;
  linkedinEmbed?: string;
  live?: string;
  components: any[];
}

export interface ProjectsData {
  projects: ProjectData[];
}

const CATEGORIES = ["servicenow", "ai", "general"];

// Cache for loaded projects
const projectCache: Record<string, ProjectData[]> = {};

export async function loadProjects(category: string): Promise<ProjectData[]> {
  // Return from cache if already loaded
  if (projectCache[category]) {
    return projectCache[category];
  }

  try {
    const response = await fetch(`/data/projects-${category}.json`);
    if (!response.ok) {
      console.error(`Failed to load projects for ${category}:`, response.status);
      return [];
    }

    const data: ProjectsData = await response.json();
    projectCache[category] = data.projects;
    return data.projects;
  } catch (error) {
    console.error(`Error loading projects for ${category}:`, error);
    return [];
  }
}

export async function loadAllProjects(): Promise<Record<string, ProjectData[]>> {
  const allProjects: Record<string, ProjectData[]> = {};

  for (const category of CATEGORIES) {
    allProjects[category] = await loadProjects(category);
  }

  return allProjects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  // Try all categories
  for (const category of CATEGORIES) {
    const projects = await loadProjects(category);
    const project = projects.find((p) => p.slug === slug);
    if (project) {
      return project;
    }
  }

  return null;
}

export async function getProjectsByCategory(category: string): Promise<ProjectData[]> {
  return loadProjects(category);
}

// Clear cache (useful for testing or manual refresh)
export function clearProjectCache(): void {
  Object.keys(projectCache).forEach((key) => delete projectCache[key]);
}
