import axios from "axios";

const API_KEY = "AIzaSyChYF_ORd1yWvmW5BE_cFvSdqxPF5GEZfII"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

export const getGeminiResponse = async (message) => {
  try {
    const response = await axios.post(API_URL, {
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! Something went wrong. Please try again.";
  }
};
