import React, { useState } from "react";
import MockMessages from "../../../utills/data.json";
import useInput from "./useInput";

export default function useMessenger() {
  const defaultMessage = MockMessages.messages;
  const [messages, setMessages] = useState(defaultMessage);
  const [message, setMessage] = useState("");

  const [content, onChangeMessage, setValue] = useInput("");

  const onSendMessage = (e) => {
    if (content.trim().length === 0) return;
    setMessages([
      ...messages,
      {
        userId: Date.now(),
        userName: "SYLIM",
        profileImage: "https://i.ibb.co/LNw3QCV/image.png",
        content: content,
        date: new Date().toLocaleString(),
      },
    ]);
    setValue("");
  };

  const onKeyPress = (e) => {
    const keyCode = e.key;
    if (keyCode === "Enter") {
      onSendMessage();
      console.log(messages);
    }
  };

  return {
    content,
    message,
    messages,
    onChangeMessage,
    onSendMessage,
    onKeyPress,
  };
}
