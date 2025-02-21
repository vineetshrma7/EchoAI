import { useState, useEffect } from "react";
import { getGeminiResponse } from "./GeminiService";
import { Box, Typography, Avatar, CircularProgress } from "@mui/material";

const ChatMessage = ({ message }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [botMessage, setBotMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    fetchReply();

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const fetchReply = async () => {
    try {
      const response = await getGeminiResponse(message); // Fetch Gemini response
      setTimeout(() => {
        setBotMessage(response);
      }, 300); // Delay response by 3 seconds
    } catch (error) {
      setBotMessage("I'm having trouble responding. Try again!");
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="start" mb={2}>
      <Avatar
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
        alt="avatar 1"
        sx={{ width: 45, height: 45 }}
      />
      <Box
        p={2}
        ml={2}
        borderRadius={2}
        bgcolor="rgba(57, 192, 237, 0.2)"
        maxWidth="60%"
      >
        {showMessage ? (
          <Typography variant="body2">{botMessage}</Typography>
        ) : (
          <Box display="flex" alignItems="center">
            <CircularProgress size={16} sx={{ mr: 1 }} />
            <Typography variant="body2" color="gray">
              Typing...
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatMessage;
