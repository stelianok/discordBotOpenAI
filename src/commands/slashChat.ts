import { CommandInteraction } from "discord.js";
import { answerQuestion } from "../api/OpenAI";

export default async function slashChat(interaction: CommandInteraction, prompt: string) {


  await interaction.deferReply();

  const choices = await answerQuestion(prompt);

  console.log(choices);

  if (choices && choices[0].text) {
    await interaction.editReply(choices[0].text);
  }
  else {
    await interaction.editReply("Opa parece que algo deu errado :(");
  }

}