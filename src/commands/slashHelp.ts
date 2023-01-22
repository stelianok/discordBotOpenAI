import { CommandInteraction } from "discord.js";


const helpMessage = "**Comandos disponíveis:**\n :star:  Digite **/chat**  para fazer uma pergunta";
export default function slashHelp(interaction: CommandInteraction) {
  interaction.reply(helpMessage);
}