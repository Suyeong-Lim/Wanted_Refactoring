import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Input = ({ width, height, borderRadius = "4px", ...rest }) => {
  return (
    <StyledInput
      {...rest}
      borderRadius={borderRadius}
      width={width}
      height={height}
    />
  );
};
const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 4px 4px;
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default Input;
