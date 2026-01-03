import axios from "axios";

const BASE_URL = "http://192.168.100.4:3000";

export const askAI = async (prompt) => {
  try {
    const res = await axios.post(`${BASE_URL}/ask`, { prompt });
    console.log("AI response:", res.data); 
    return res.data.text;
  } catch (error) {
    console.log("AI ERROR:", error.response?.data || error.message);
    return "Error getting response";
  }
};
