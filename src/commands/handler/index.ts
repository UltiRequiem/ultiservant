import { info, ping, rules, invite } from "..";

import type { command } from "..";

export type commandHandler = { [key: string]: command };

export const commands: commandHandler = { ping, rules, info, invite };
