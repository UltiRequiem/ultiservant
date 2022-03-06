import { Client, Intents } from "discord.js";
import { TOKEN } from "./config";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Ready!");

  console.log(client.user?.id);
});

client.on("interactionCreate", async (interaction) => {
  console.log(interaction);
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply(`Bot's latancy is ${(interaction.client.ws.ping).toFixed(0)} ms`);
  } else if (commandName === "server") {
    await interaction.reply("Server info.");
  } else if (commandName === "user") {
    await interaction.reply("User info.");
  }
});

client.login(TOKEN);
