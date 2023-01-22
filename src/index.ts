import { Client, Interaction, GatewayIntentBits } from "discord.js";
import slashHelp from "./commands/slashHelp";

import { DISCORD_TOKEN } from "./config/secrets";


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("Bot is ready to accept commands");
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ajuda") {
    slashHelp(interaction);
  }
  else if (commandName === "chat") {
    //
  }
});

client.login(DISCORD_TOKEN);


