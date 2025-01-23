export interface Action {
  username: string;
  content: string;
  embeds: Partial<Embed>[];
}

export interface Embed {
  title?: string;
  description?: string;
  url?: string;
  image?: Image;
  color?: string;
}

export interface Image {
  url: string;
}

export enum Type {
  CONTENT = "CONTENT",
  EMBED = "EMBED",
  FILE = "FILE",
  POLL = "POLL",
}

export interface Config {
  webhookUrl: string;
  type: string | undefined;
  username: string | undefined;
  content: string | undefined;
  title: string | undefined;
  embedUrl: string | undefined;
  description: string | undefined;
  color: string | undefined;
  imageUrl: string | undefined;
}
