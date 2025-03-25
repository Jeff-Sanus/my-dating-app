import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { getAIResponse } from "../utils/aiChat";

export default function ChatScreen({ route }) {
  const [messages, setMessages] = useState([]);
  const { userProfile } = route.params; // Assuming user profile data is passed

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hi ${userProfile.name}, let's see if we find your perfect match!`,
        createdAt: new Date(),
        user: { _id: 2, name: "AI Matchmaker" },
      },
    ]);
  }, []);

  const onSend = async (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    
    const userMessage = newMessages[0].text;
    const aiResponse = await getAIResponse(userMessage); // AI-powered response

    const aiMessage = {
      _id: Math.random().toString(),
      text: aiResponse,
      createdAt: new Date(),
      user: { _id: 2, name: "AI Matchmaker" },
    };

    setMessages((prevMessages) => GiftedChat.append(prevMessages, [aiMessage]));
  };

  return <GiftedChat messages={messages} onSend={onSend} user={{ _id: 1, name: userProfile.name }} />;
}
