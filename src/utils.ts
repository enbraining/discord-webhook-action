import { getInput } from "@actions/core";
import { Config, Type } from "./types";

export function getType(value: string): Type {
  if (Object.values(Type).includes(value as Type)) {
    return value as Type;
  }

  return Type.CONTENT;
}

export function getConfig(): Config {
  return {
    webhookUrl: getInput("webhook-url"),
    type: getType(getInput("type")) || undefined,
    username: getInput("username") || undefined,
    content: getInput("content") || undefined,
    title: getInput("title") || undefined,
    embedUrl: getInput("embed-url") || undefined,
    color: parseInt(getInput("color"), 16) || undefined,
    imageUrl: getInput("image-url") || undefined,
    description: getInput("description") || undefined,
  };
}
