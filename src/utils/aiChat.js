import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY", // ⚠️ Replace with your OpenAI API key
});

const openai = new OpenAIApi(configuration);

export async function getAIResponse(userMessage) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: userMessage }],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I'm having trouble responding.";
  }
}
