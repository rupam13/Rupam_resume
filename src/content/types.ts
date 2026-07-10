import { projectIds } from "./projects/index";

import type { TagVariant } from "../components/tagVariants";
import type { ProjectComponent } from "../features/projects/types";

export type ProjectId = (typeof projectIds)[number];

export interface ProjectContent {
  title: string;
  theme: "light" | "dark";
  tags: TagVariant[];
  category?: string;
  description?: string;
  videoBorder?: boolean;
  live?: string;
  source?: string;
  components?: ProjectComponent[];
  heroEmbed?: {
    src: string;
    title?: string;
    height?: string;
    width?: string;
  };
}

export interface SkillContent {
  name: string;
  bullets: string[];
}

export interface Metric {
  label: string;
  value: number | string;
  max?: number;
}

export interface ProjectPreview {
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  category?: string;
  metrics?: Metric[];
}
