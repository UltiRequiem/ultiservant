import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import { CLIENT_ID, GUILD_ID, TOKEN } from "../config";

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Replies with the rules!"),
  new SlashCommandBuilder()
    .setName("info")
    .setDescription("Replies with bot and server info!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(TOKEN);

rest
  .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."));
