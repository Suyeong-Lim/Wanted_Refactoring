import React, { useState } from "react";

const MessageInput = ({ ChangeMessage, content, onKeyPress }) => {
  return (
    <div>
      <form>
        <textarea
          onKeyPress={onKeyPress}
          onChange={ChangeMessage}
          value={content}
        />
        <button>전송</button>
      </form>
    </div>
  );
};

export default MessageInput;
