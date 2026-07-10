import type { Props as ImageTextProps } from "./components/ImageText.vue";
import type { Props as TextProps } from "./components/Text.vue";
import type { Props as ListProps } from "./components/List.vue";
import type { Props as MediaProps } from "./components/Media.vue";
import type { Props as EmbedProps } from "./components/Embed.vue";

export interface CardInfo {
  title: string;
  icon: string;
  content: string[];
  teaser?: string;
}

export interface InfoCardsProps {
  cards: CardInfo[];
  variant?: "default" | "cartoon";
}

export interface SectionCardProps {
  title: string;
  icon?: string;
  subtitle?: string;
  content: Array<{ type: string; text?: string; items?: string[] }>;
}

export interface ProjectComponents {
  imageText: ImageTextProps;
  text: TextProps;
  list: ListProps;
  media: Omit<MediaProps, "index">;
  embed: Omit<EmbedProps, "index">;
  infoCards: InfoCardsProps;
}

export type ProjectComponent = {
  [K in keyof ProjectComponents]: {
    type: K;
    props: ProjectComponents[K];
  };
}[keyof ProjectComponents];

type ProjectComponentMap<K extends keyof ProjectComponents> = {
  type: K;
  props: ProjectComponents[K];
};

export type ProjectComponentProps = ProjectComponentMap<keyof ProjectComponents>;
