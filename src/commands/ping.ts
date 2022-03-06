import { MessageEmbed } from "discord.js";

import type { command } from ".";

export const ping: command = async (interaction) => {
  const embed = new MessageEmbed()
    .setColor("#00ffff")
    .setTitle(`Pong 🏓`)
    .addField("Latency:", `${interaction.client.ws.ping.toFixed(0)} ms`, true)
    .addField("API Latency:", `${Date.now() - interaction.createdTimestamp}ms`)
    .setFooter({ text: `Requested by *${interaction.user.username}*` })
    .setTimestamp();

  interaction.reply({ embeds: [embed] });
};
