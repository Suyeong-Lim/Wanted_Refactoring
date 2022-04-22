import React, { useRef } from 'react';
import styled from 'styled-components';

const ToggleBox = ({ isToggled, setIsToggled }) => {
    const checkingRef = useRef(false);

    const changeHandler = () => {
        console.log('clicked');
        const isChecked = !checkingRef.current.checked;
        console.log(isChecked);
        setIsToggled(isChecked);
    };
    return (
        <ToggleDiv>
            <ToggledContainer
                htmlFor="toggle"
                style={{ background: `${isToggled ? '#BBDEFB' : '#c2c2c2'}` }}
            >
                <Label
                    htmlFor="toggle"
                    style={{
                        transform: `translateX(${isToggled ? '15px' : '0px'})`,
                    }}
                />
                <Notch
                    ref={checkingRef}
                    onChange={changeHandler}
                    id="toggle"
                    type="checkbox"
                />
            </ToggledContainer>
            <DescText>상담 중인 요청만 보기</DescText>
        </ToggleDiv>
    );
};

const ToggleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1rem;
`;
const ToggledContainer = styled.label`
    display: flex;
    position: relative;
    width: 34px;
    height: 14px;
    background: #c2c2c2;
    border-radius: 25px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    margin-right: 16px;
`;

const Label = styled.label`
    width: 20px;
    height: 20px;
    background: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    transition: transform 0.1s linear;
    position: absolute;
    top: -3px;
`;

const Notch = styled.input`
    position: hide;
`;

const DescText = styled.p`
    font-size: 14px;
`;
export default ToggleBox;
