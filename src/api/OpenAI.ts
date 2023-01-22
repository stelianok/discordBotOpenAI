import { Configuration, OpenAIApi } from "openai";

import { OPENAI_TOKEN, OPENAI_ORGANIZATION_ID } from "../config/secrets";

const configuration = new Configuration({
  organization: OPENAI_ORGANIZATION_ID,
  apiKey: OPENAI_TOKEN,
});

const openai = new OpenAIApi(configuration);

export async function answerQuestion(prompt: string) {
  const model = "text-davinci-003";

  try {
    const response = await openai.createCompletion({ model, prompt, max_tokens: 2048, echo: true });

    return response.data.choices;
  }
  catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
    else {
      console.log(error.message);
    }
  }
}

