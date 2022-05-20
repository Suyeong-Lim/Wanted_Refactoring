import Input from "../../components/common/Input";
import React, { useState, useRef } from "react";

const LoginForm = ({ onChange, name }) => {
  return (
    <Input
      onChange={onChange}
      value={name}
      width="100px"
      height="20px"
      placeholder="이름을 입력하세요"
    />
  );
};

export default LoginForm;
