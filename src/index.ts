import { Client, Intents } from "discord.js";
import { TOKEN } from "./config";
import { fs } from "fs";
const client = new Client({  
  intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'GUILD_BANS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_PRESENCES',
    ] 
});

//command handeler
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
const commands = []
client.commands = new Collection()
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
	client.commands.set(command.data.name, command)
}


client.once("ready", () => {
  console.log("Ready!");

  console.log(client.user?.id);
});
client.on("interactionCreate", async (interaction) => {
  console.log(interaction);
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "server") {
    await interaction.reply("Server info.");
  } else if (commandName === "user") {
    await interaction.reply("User info.");
  }
});

client.login(TOKEN);
