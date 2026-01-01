import axios from 'axios';
import { GEMINI_API_KEY } from '@env';
export const askGemini = async (prompt) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log(
      'Gemini Error:',
      error.response?.data || error.message
    );
    return 'Error getting response';
  }
};
