import LoginForm from "../components/login/LoginForm";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onChangeInput = (e) => {
    setName(e.target.value);
  };

  const onEnter = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("이름을 입력하세요");
      return;
    }
    const userInfo = {
      userId: Math.random(),
      userName: name,
      profileImg:
        "https://i.ibb.co/vmy2PYq/83fc4c6dca8298dc8e03ba63d35a9cae.jpg",
    };
    dispatch(setUser(userInfo));
    if (name !== "") {
      navigate("/chat");
    }
  };

  return (
    <div>
      <h1>Login here</h1>
      <form onSubmit={onEnter}>
        <LoginForm onChange={onChangeInput} name={name} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
