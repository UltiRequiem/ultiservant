# The official UltiUniverse Bot

**join the community**

https://ultirequiem.com/discord

## Docs

### Commands Handler

People are doing very strange things to handle the commands, Here is a much simpler approach than the ones in [the documentation](https://discordjs.guide/creating-your-bot/command-handling.html#reading-command-files).

```ts
import type { CommandInteraction } from "discord.js";

import { ping, rules, info } from "./myCommands";

export type command = (interaction: CommandInteraction) => Promise<void>;
export type commandHandler = { [key: string]: command };

export const commands: commandHandler = { ping, rules, info };
```

Usage 👇

```ts
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  await commands[commandName](interaction);
});
```

Completely type-safe!

> The example in the docs wouldn't work on TypeScript, and would be tricky to make it work using native ESM!

## Licence

GNU General Public License v3.0.

[License Resume](https://choosealicense.com/licenses/gpl-3.0)
