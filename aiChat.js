import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY", // Store securely in .env
});

const openai = new OpenAIApi(configuration);

export async function getAIResponse(userMessage) {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: userMessage }],
  });
  return response.data.choices[0].message.content;
}
