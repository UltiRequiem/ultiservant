import { MessageEmbed } from "discord.js";

import type { CommandInteraction } from "discord.js";

export async function rules(interaction: CommandInteraction) {
  const embed = new MessageEmbed()
    .setColor("#00ffff")
    .setTitle(`Pong 🏓`)
    .addField("Latency:", `${interaction.client.ws.ping.toFixed(0)} ms`, true)
    .addField("API Latency:", `${Date.now() - interaction.createdTimestamp}ms`)
    .setFooter({ text: `Requested by *${interaction.user.username}*` })
    .setTimestamp();

  interaction.reply({ embeds: [embed] });
}
