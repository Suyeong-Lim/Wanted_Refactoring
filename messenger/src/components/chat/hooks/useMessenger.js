import React, { useState } from "react";
import MockMessages from "../../../utills/data.json";
import useInput from "./useInput";

export default function useMessenger() {
  const defaultMessage = MockMessages.messages;
  const [messages, setMessages] = useState(defaultMessage);
  const [message, setMessage] = useState("");

  const [content, onChangeMessage, setValue] = useInput("");

  const onSubmitMessage = (e) => {
    e.preventDefault();
    if (message.trim().length > 0) {
      setMessages([
        ...messages,
        {
          userId: Date.now(),
          userName: "SYLIM",
          profileImage: "https://i.ibb.co/LNw3QCV/image.png",
          content: message,
          date: new Date().toLocaleString(),
        },
      ]);
    }
    setMessage("");
  };

  const onKeyPress = (e) => {
    const keyCode = e.key;
    if (keyCode === "Enter") {
      onSubmitMessage();
    }
  };

  return {
    content,
    message,
    messages,
    onChangeMessage,
    onSubmitMessage,
    onKeyPress,
  };
}
