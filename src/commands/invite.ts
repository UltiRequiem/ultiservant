import { MessageEmbed } from "discord.js";

import { THANK_YOU } from "../constants";

import type { command } from ".";

export const rules: command = async (interaction) => {
  const infoEmbed = new MessageEmbed()
    .setColor("#C930FF")
    .setTitle("Thanks for joining!")
    .setDescription(THANK_YOU);

  await interaction.channel.send({
    embeds: [infoEmbed],
  });
};
