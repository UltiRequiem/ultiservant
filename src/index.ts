import { Client, Intents } from "discord.js";
import { TOKEN } from "./config";

import { commands } from "./commands";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Ready!");

  console.log(client.user?.id);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  await commands[commandName](interaction);
});

client.login(TOKEN);
