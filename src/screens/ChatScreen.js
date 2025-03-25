import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";
import { getAIResponse } from "../utils/aiChat"; // Import AI chat function

const socket = io("http://localhost:4000"); // Replace with your backend URL if needed

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  // Connect to WebSocket when component loads
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) =>
        GiftedChat.append(prev, [
          {
            _id: Math.random(),
            text: data,
            createdAt: new Date(),
            user: { _id: 2, name: "AI" },
          },
        ])
      );
    });

    return () => socket.off("receive_message"); // Cleanup on unmount
  }, []);

  const onSend = async (newMessages = []) => {
    setMessages((prev) => GiftedChat.append(prev, newMessages));

    // Send message to WebSocket server
    socket.emit("send_message", newMessages[0].text);

    // Get AI response
    const userMessage = newMessages[0].text;
    const aiResponse = await getAIResponse(userMessage);

    // Append AI response
    const aiMessage = {
      _id: Math.random(),
      text: aiResponse,
      createdAt: new Date(),
      user: { _id: 2, name: "AI" },
    };

    setMessages((prev) => GiftedChat.append(prev, [aiMessage]));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{ _id: 1, name: "You" }}
    />
  );
}