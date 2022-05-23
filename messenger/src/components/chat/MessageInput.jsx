import React, { useState } from "react";

const MessageInput = () => {
  const [content, setContent] = useState("");
  const [btnState, setBtnState] = useState(false);

  const onChange = (e) => {
    const text = e.target.value;
    setContent(text);
    console.log(text);
  };
  const onKeyPress = (e) => {
    e.key === "Enter" ? onSubmit() : console.log("null");
  };
  const onSubmit = (e) => {
    if (content.length > 0) {
      setContent("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea onKeyPress={onKeyPress} onChange={onChange} value={content} />
        <button>전송</button>
      </form>
    </div>
  );
};

export default MessageInput;
