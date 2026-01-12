import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMoodAnalysis = async (userInput: string): Promise<string> => {
  if (!process.env.API_KEY) return "The void reflects nothing today.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: `
        You are a conceptual fashion curator for a brand called "skin".
        The user input is a mood or a poetic fragment: "${userInput}".
        
        Analyze this mood. Return a short, cryptic, poetic horroscope-like fashion advice (max 2 sentences) in Russian.
        Then, suggest which of these 3 vibes fits best: "Soft", "Brutal", "Acid".
        
        Format: [Poetic Advice] | [Vibe]
      `,
    });
    return response.text || "Ошибка связи с ноосферой.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Шум в канале. Попробуйте позже.";
  }
};

export const getCrossSellSuggestion = async (productTitle: string): Promise<string> => {
  if (!process.env.API_KEY) return "Complement this with silence.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: `
            You are a stylist for an underground brand "skin".
            The user is looking at: "${productTitle}".
            Suggest a total look or an accessory idea to complete this alter-ego.
            Keep it artistic, brief, and in Russian. 
            Do not recommend specific other brands, just types of items or styling tips (e.g., "Wear with heavy boots").
        `,
    });
    return response.text || "Стилист молчит.";
  } catch (error) {
    return "Система перегружена.";
  }
}
