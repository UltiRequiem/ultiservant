# The official UltiUniverse Bot

**join the community**

https://ultirequiem.com/discord

This is the first Discord bot I'm doing, I ever done one using the now dead [discord.py](https://github.com/UltiRequiem/Zetta-Discord-Bot) while learning to code, so I'm just learning on the fly, feel free to make PR or Issues!

## Docs

Things I learned while making this bot 📖

### Commands Handler

People are doing very strange things to handle the commands, here is a simpler
way 👇

```ts
import type { CommandInteraction } from "discord.js";

import { info, ping, rules } from "./myCommands";

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

> The example in the [docs](https://discordjs.guide/creating-your-bot/command-handling.html#reading-command-files)
> wouldn't work on TypeScript, and would be tricky to make it work using native ESM!

## Licence

GNU General Public License v3.0.

[License Resume](https://choosealicense.com/licenses/gpl-3.0)
