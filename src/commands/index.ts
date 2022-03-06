import type { CommandInteraction } from "discord.js";

export type command = (interaction: CommandInteraction) => Promise<void>;

export * from "./ping";
export * from "./rules";
export * from "./info";
