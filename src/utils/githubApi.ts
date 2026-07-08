const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_OWNER = import.meta.env.VITE_GITHUB_OWNER;
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO;
const API_BASE = "https://api.github.com";

interface ProjectData {
  title: string;
  category: string;
  theme: "light" | "dark";
  tags: string[];
  description: string;
  components: any[];
  thumbnail?: string;
}

export const githubApi = {
  // Get all projects from GitHub
  async getAllProjects(): Promise<Record<string, ProjectData[]>> {
    try {
      const response = await fetch(
        `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/projects`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch projects");

      const dirs = await response.json();
      const projects: Record<string, ProjectData[]> = {};

      for (const dir of dirs) {
        if (dir.type === "dir") {
          const category = dir.name;
          const files = await fetch(
            `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/projects/${category}`,
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          ).then((r) => r.json());

          projects[category] = [];

          for (const file of files) {
            if (file.type === "file" && file.name.endsWith(".json")) {
              const content = await fetch(file.download_url).then((r) =>
                r.json()
              );
              projects[category].push(content);
            }
          }
        }
      }

      return projects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      return {};
    }
  },

  // Get single project
  async getProject(
    category: string,
    projectName: string
  ): Promise<ProjectData | null> {
    try {
      const response = await fetch(
        `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/projects/${category}/${projectName}.json`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) return null;

      const file = await response.json();
      const content = atob(file.content);
      return JSON.parse(content);
    } catch (error) {
      console.error("Error fetching project:", error);
      return null;
    }
  },

  // Create or update project
  async saveProject(
    category: string,
    projectName: string,
    data: ProjectData
  ): Promise<boolean> {
    try {
      const path = `projects/${category}/${projectName}.json`;
      const content = btoa(JSON.stringify(data, null, 2));

      // Check if file exists
      let sha = undefined;
      try {
        const response = await fetch(
          `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (response.ok) {
          const file = await response.json();
          sha = file.sha;
        }
      } catch {}

      const response = await fetch(
        `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
          },
          body: JSON.stringify({
            message: sha
              ? `Update project: ${projectName}`
              : `Add project: ${projectName}`,
            content,
            ...(sha && { sha }),
          }),
        }
      );

      return response.ok;
    } catch (error) {
      console.error("Error saving project:", error);
      return false;
    }
  },

  // Delete project
  async deleteProject(category: string, projectName: string): Promise<boolean> {
    try {
      const path = `projects/${category}/${projectName}.json`;

      // Get SHA first
      const response = await fetch(
        `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) return false;

      const file = await response.json();

      const deleteResponse = await fetch(
        `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
          },
          body: JSON.stringify({
            message: `Delete project: ${projectName}`,
            sha: file.sha,
          }),
        }
      );

      return deleteResponse.ok;
    } catch (error) {
      console.error("Error deleting project:", error);
      return false;
    }
  },

  // Upload image to GitHub
  async uploadImage(
    category: string,
    fileName: string,
    fileContent: string
  ): Promise<string | null> {
    try {
      const path = `images/${category}/${fileName}`;
      const response = await fetch(
        `${API_BASE}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
          },
          body: JSON.stringify({
            message: `Upload image: ${fileName}`,
            content: fileContent,
          }),
        }
      );

      if (!response.ok) return null;

      await response.json();
      return `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/${path}`;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  },
};
