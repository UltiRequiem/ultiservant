import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

import {
  channels,
  rules as rulesMessage,
  thankYou,
  ULTIREQUIEM_ID,
} from "../constants";

import type { command } from ".";

export const rules: command = async (interaction) => {
  if (interaction.channel.id !== channels.rules) {
    await interaction.reply({
      content: `Please go to <#${channels.rules}> to view the server rules.`,
    });

    return;
  }

  const welcomeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setTitle("Welcome To UltiUniverse!")
    .setDescription(`We are a cool community managed by <@${ULTIREQUIEM_ID}>`);

  const rulesEmbed = new MessageEmbed()
    .setColor("#40B9FD")
    .setTitle("Our Community Rules")
    .setDescription(rulesMessage);

  const infoEmbed = new MessageEmbed()
    .setColor("#C930FF")
    .setTitle("Thanks for joining!")
    .setDescription(thankYou);

  const socialRow = new MessageActionRow().addComponents(
    new MessageButton()
      .setLabel("Twitter")
      .setStyle("LINK")
      .setURL("https://twitter.com/ultirequiem")
      .setEmoji("🐦"),
    new MessageButton()
      .setLabel("GitHub")
      .setStyle("LINK")
      .setURL("https://github.com/ultirequiem")
      .setEmoji("👨‍💻"),
    new MessageButton()
      .setLabel("Linkedin")
      .setStyle("LINK")
      .setURL("https://linkedin.com/in/ultirequiem")
      .setEmoji("💼"),
    new MessageButton()
      .setLabel("Website")
      .setStyle("LINK")
      .setURL("https://ultirequiem.com")
      .setEmoji("🌐")
  );

  await interaction.channel.send({
    embeds: [welcomeEmbed, rulesEmbed, infoEmbed],
    components: [socialRow],
  });
};
