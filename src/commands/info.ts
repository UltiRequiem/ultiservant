import { MessageEmbed, version } from "discord.js";
import * as os from "os";
import type { command } from ".";
import { ULTIREQUIEM_ID } from "../constants";

import { uptimeHumanFormat } from "../utils";

import { version as pkgVersion } from "../../package.json";

export const info: command = async (interaction) => {
  const embed = new MessageEmbed()
    .setColor("#00FFFF")
    .setThumbnail(interaction.client.user.displayAvatarURL())
    .setTitle(`UltiServant ${pkgVersion}`)
    .setDescription(`The bot has been awake for ${uptimeHumanFormat()}`)
    .addField("📄 Channels", "" + interaction.client.channels.cache.size, true)
    .addField("🤵 Developer", `<@${ULTIREQUIEM_ID}>`, true)
    .addField(
      "🐏 RAM Usage",
      `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`,
      true
    )
    .addField("🏓 Ping", `${interaction.client.ws.ping.toFixed(0)} ms`, true)
    .addField(":control_knobs: Library", `Discord JS v${version}`, true)
    .addField(":computer: Node.js ", `${process.version}`, true)
    .addField(":globe_with_meridians: Host Name", `${os.hostname}`, true)
    .addField(
      ":white_check_mark: Host OS",
      `${os.platform} ${os.release}`,
      true
    )
    .addField(
      "Github",
      "[Click here](https://github.com/ultirequiem/ultiservant)",
      true
    );
  interaction.reply({ embeds: [embed] });
};
