import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user";
import useMessenger from "./hooks/useMessenger";
import MessageInput from "./MessageInput";
import MessengerContainer from "./MessengerContainer";

const ChatRoom = () => {
  //TODO user 스토어에 잘 들어갔는지 확인하기.
  const user = useSelector(userSelector);
  const isMyMess = (userId) => userId === user.userId;

  const { messages, content, onChangeMessage, onKeyPress, onSendMessage } =
    useMessenger();

  return (
    <div>
      <MessengerContainer messages={messages} />
      <MessageInput
        onSendMessage={onSendMessage}
        ChangeMessage={onChangeMessage}
        content={content}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default ChatRoom;
