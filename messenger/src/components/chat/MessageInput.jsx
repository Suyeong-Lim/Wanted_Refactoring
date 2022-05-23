import React, { useState } from "react";

const MessageInput = ({
  ChangeMessage,
  content,
  onKeyPress,
  onSendMessage,
}) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          onKeyPress={onKeyPress}
          onChange={ChangeMessage}
          value={content}
        />
        <button onClick={onSendMessage}>전송</button>
      </form>
    </div>
  );
};

export default MessageInput;
