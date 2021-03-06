import React from 'react';
import styled from 'styled-components';

const Toggle = () => {
    return <CheckBox>Toggle</CheckBox>;
};

const CheckBox = styled.input`
    all: unset;
    width: 40px;
    height: 14px;
    border-radius: 2em;
    display: flex;
    align-items: center;

    //toggle off
    background: ${({ theme }) => theme.colors.toggleOff2};
    ::after {
        content: '';
        z-index: 10;
        left: 0;
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.toggleOff1};
        position: relative;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
            0px 2px 2px rgba(0, 0, 0, 0.24);
    }
`;

export default Toggle;
