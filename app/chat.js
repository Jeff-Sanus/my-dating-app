import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function ChatScreen() { // ✅ FIX: Add default export
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{ _id: 1, name: "You" }}
    />
  );
}