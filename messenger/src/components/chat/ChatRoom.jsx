import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user";

const ChatRoom = () => {

  //TODO user 스토어에 잘 들어갔는지 확인하기.
  const user = useSelector(userSelector);
  const isMyMess = (userId) => userId === user.userId;

  return <div>

  </div>;
};

export default ChatRoom;
