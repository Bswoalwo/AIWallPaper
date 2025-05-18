import OpenAI from "openai";
export function getOpenAIClient(): OpenAI {
  const openai = new OpenAI({
    apiKey: "sk-m2DU3aA3obJPlnkTftdY2Qmi98dpT2HSEaPjYee89CinD9F2",
    baseURL: "https://api.agicto.cn/v1",
  });

  return openai;
}
