import { MessageEmbed } from "discord.js";
import type { CommandInteraction } from "discord.js";

export async function getPing(interaction: CommandInteraction) {
  const embed = new MessageEmbed()
    .setColor("#00ffff")
    .setTimestamp()
    .setTitle(`Pong 🏓`)
    .addField("Latency:", `${interaction.client.ws.ping.toFixed(0)} ms`, true)
    .addField("API Latency:", `${Date.now() - interaction.createdTimestamp}ms`)
    .setFooter({ text: `counted for ${interaction.user.username}` });
  interaction.reply({ embeds: [embed] });
}
