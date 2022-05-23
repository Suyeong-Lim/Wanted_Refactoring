import React, { useState } from "react";
import MockMessages from "../../utills/data.json";

export default function useMessenger() {
  const defaultMessage = MockMessages.messages;
  const [messages, setMessages] = useState(defaultMessage);
  const [message, setMessage] = useState("");

  const onChangeMessage = (e) => {
    const inputTxt = e.target.value;
    setMessage(inputTxt);
  };

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

  return {
    messages,
    onChangeMessage,
    onSubmitMessage,
  };
}
