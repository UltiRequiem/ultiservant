import { MessageEmbed } from "discord.js";

import type { CommandInteraction } from "discord.js";

import { channels } from "../constants";

export async function rules(interaction: CommandInteraction) {
  if (interaction.channel.id !== channels.rules) {
    await interaction.reply({
      content: `Please go to <#${channels.rules}> to view the server rules.`,
    });

    return;
  }

  const embed = new MessageEmbed()
    .setColor("#00ffff")
    .setTitle(`TODO`)

  interaction.reply({ embeds: [embed] });
}
