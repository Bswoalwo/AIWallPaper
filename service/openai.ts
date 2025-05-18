import OpenAI from "openai";
export function getOpenAIClient(): OpenAI {
  const openai = new OpenAI({
    apiKey: process.env.apiKey,
    baseURL: process.env.baseURL,
  });

  return openai;
}
