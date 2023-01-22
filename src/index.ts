import { Client, Interaction, GatewayIntentBits } from "discord.js";
import slashChat from "./commands/slashChat";
import slashHelp from "./commands/slashHelp";

import { DISCORD_TOKEN } from "./config/secrets";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("Bot is ready to accept commands");
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === "ajuda") {
    slashHelp(interaction);
  }
  else if (commandName === "chat") {
    const message = options.getString("mensagem");

    if (message) {
      slashChat(interaction, message);
    }
    else {
      interaction.reply("CADE CADE A PERGUNTA");
    }
  }
});

client.login(DISCORD_TOKEN);


