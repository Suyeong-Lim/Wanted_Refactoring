import React from 'react';
import styled from 'styled-components';

const Title = () => {
    return (
        <TitleContainer>
            <TitleText>들어온 요청</TitleText>
            <Description>파트너님에게 딱 맞는 요청서를 찾아보세요.</Description>
        </TitleContainer>
    );
};

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

const TitleText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #252d33;
`;

const Description = styled.span`
    font-size: 16px;
`;

export default Title;
