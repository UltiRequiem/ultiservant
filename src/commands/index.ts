import { ping } from "./ping";
import { rules } from "./rules";
import { info } from "./info";

import type { CommandInteraction } from "discord.js";

export type command = (interaction: CommandInteraction) => Promise<void>;
export type commandHandler = { [key: string]: command };

export const commands: commandHandler = { ping, rules, info };
