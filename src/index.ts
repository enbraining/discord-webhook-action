import { debug, error, info } from "@actions/core";
import ky from "ky";
import { Action, Config, Embed, Type } from "./types";
import { getConfig } from "./utils";

function getEmbed(config: Config): Partial<Embed> {
  const embed: Partial<Embed> = {
    title: config.title,
    description: config.description,
    url: config.embedUrl,
    color: config.color,
    image: config.imageUrl ? { url: config.imageUrl } : undefined,
  };

  return embed;
}

async function main() {
  const config: Config = getConfig();
  const action: Partial<Action> = {};

  if (config.username) {
    action.username = config.username;
  }

  switch (config.type) {
    case Type.CONTENT: {
      action["content"] = config.content;
    }

    case Type.EMBED: {
      const embed = getEmbed(config);
      action["embeds"] = [embed];
    }

    case Type.FILE: {
      error("It's not implemented yet.");
    }

    case Type.POLL: {
      error("It's not implemented yet.");
    }
  }

  debug("Send webhook message.");

  await ky
    .post(config.webhookUrl, {
      json: action,
    })
    .catch((reason: any) => {
      error(reason);
    });
}

main();
