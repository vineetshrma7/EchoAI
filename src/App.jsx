import { useState, useEffect } from "react";
import "./App.css";
import HeaderSection from "./HeaderSection";
import Box from "@mui/material/Box";
import { List } from "@mui/material";
import { Typography, Avatar } from "@mui/material";
import ReplyChat from "./ReplyChat";

function App() {
  const [vari, setVari] = useState("What can I help with?");

  const [msg, setmsg] = useState([]);

  const [str, setstr] = useState("");

  const [isFixed, setIsFixed] = useState(false);

  const handleOperation = () => {
    setVari(false);
    setIsFixed(true);
    // Using functional update to add only the new message
    setmsg((prevMsg) => [...prevMsg, { id: prevMsg.length, value: str }]);
    setTimeout(() => setstr(""), 0);
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleOperation();
    }
  };

  return (
    <>
      <div className="layout">
        {/* Header */}
        <HeaderSection className="header" />


        
        {/* Body */}
        <div className="body">
          {/* Main Content */}
          <main className="main-content">
            <h2 className="main-title">{vari}</h2>

            {msg.length > 0 && (
              <div className="chat-messages-container">
              <List>
                {msg.map((item) => (
                  <li key={item.id}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="end"
                      mb={2}
                    >
                      <Box
                        p={2}
                        mr={2}
                        bgcolor="grey.200"
                        borderRadius={2}
                        maxWidth="60%"
                      >
                        <Typography variant="body2">{item.value}</Typography>
                      </Box>
                      <Avatar
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        alt="avatar 1"
                        sx={{ width: 45, height: 45 }}
                      />
                    </Box>
                    <ReplyChat message={item.value} />
                  </li>
                ))}
              </List>
              </div>
            )}
              
            {/* Input Section */}
            <div
              className={isFixed ? "input-container-fixed" : "input-container"}
            >
              <div className="input-wrapper">
                <button className="icon-button">+</button>
                <textarea
                  className="chat-input"
                  placeholder="Type a message..."
                  value={str}
                  onKeyDown={handleKeyPress}
                  onChange={(e) => setstr(e.target.value)}
                ></textarea>

                <div className="input-actions">
                  <button className="icon-button" onClick={handleOperation}>
                    🔍Search
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="action-button">
                  <span>🎨</span>
                  Create image
                </button>
                <button className="action-button">
                  <span>👁️</span>
                  Analyze images
                </button>
                <button className="action-button">
                  <span>✍️</span>
                  Help me write
                </button>
                <button className="action-button">
                  <span>📄</span>
                  Summarize text
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* SubFooter */}
        <div className="sub-footer">
          ChatGPT can make mistakes. Check important info.
        </div>
      </div>
    </>
  );
}

export default App;
