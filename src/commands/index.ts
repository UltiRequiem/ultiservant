import { CommandInteraction } from "discord.js";

import { getPing } from "./ping";

export type command = (interaction: CommandInteraction) => Promise<void>;

export const commands: { [key: string]: command } = {
  ping: getPing,
};
