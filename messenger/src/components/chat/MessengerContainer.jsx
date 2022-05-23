import React, { useState } from "react";

import useMessenger from "./hooks/useMessenger";

const MessengerContainer = ({ messages }) => {
  // const { message, messages, onChangeMessage, onSubmitMessage } =
  //   useMessenger();

  const userId = 1010; //TODO 로그인 로직 redux 에서 userId 값을 가져와서 설정해주어야 한다.
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <span>
            {msg.userName}
            {msg.userId === 1010 && <span>*</span>}
          </span>
          <span>{msg.content}</span>
        </div>
      ))}
    </div>
  );
};

export default MessengerContainer;
