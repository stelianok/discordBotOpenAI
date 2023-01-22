/* eslint @typescript-eslint/no-var-requires: "off" */

const { SlashCommandBuilder, REST, Routes } = require("discord.js");
const { CLIENT_ID, DISCORD_TOKEN} = require("../dist/config/secrets.js");

const commands = [
  new SlashCommandBuilder()
    .setName("ajuda")
    .setDescription("Mostra lista de comandos disponíveis"),
  new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Converse com o bot")
    .addStringOption(option => option.setName("mensagem").setDescription("escreva sua mensagem"))
].map(command => command.toJSON());

const rest = new REST({version: "10"}).setToken(DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      {body: commands},
    );
  }
  catch(error){
    console.error(error);
  }
})();