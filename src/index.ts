import { Client, Interaction, GatewayIntentBits } from "discord.js";

import { DISCORD_TOKEN } from "./config/secrets";


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("Bot is ready to accept commands");
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "help") {
    interaction.reply("XD");
  }
});

client.login(DISCORD_TOKEN);


