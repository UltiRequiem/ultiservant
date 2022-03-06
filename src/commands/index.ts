import { ping } from "./ping";

import type { CommandInteraction } from "discord.js";

export type command = (interaction: CommandInteraction) => Promise<void>;
export type commandHandler = { [key: string]: command };

export const commands: commandHandler = { ping };
