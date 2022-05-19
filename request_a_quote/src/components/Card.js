import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import theme from 'styles/theme';
import Button from './UI/Button';

const Card = ({ data }) => {
    const { title, client, due, count, amount, method, material, status } =
        data;
    return (
        <Container>
            <Title>{title}</Title>
            <span>{client}</span>
            <span>{due}까지 납기</span>
            <Line />
            <span>도면 개수 {count}개 </span>
            <span>총 수량 {amount}개 </span>
            <span>가공방식 : {method.join(',')}</span>
            <span>재료 : {material.join(',')}</span>
            <ButtonGroup>
                <Button variant="primary" width="108px">
                    요청 내역 보기
                </Button>
                <Button variant="secondary" width="76px">
                    채팅하기
                </Button>
                {status === '상담중' && <Badge>{status}</Badge>}
            </ButtonGroup>
        </Container>
    );
};

const Container = styled.div`
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    border: 1px solid ${({ theme }) => theme.colors.subGray};
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary} inset;
    }
`;

const Title = styled.h4`
    font-weight: bold;
`;
const Line = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.subGray};
    margin-bottom: 32px;
`;
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    button {
        padding: 0;
    }
`;

const Badge = styled.div`
    position: absolute;
    top: 24px;
    right: 16px;
    border: 1px solid ${({ theme }) => theme.colors.warning};
    box-sizing: border-box;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.warning};
    font-size: 12px;
    padding: 2px 8px;
`;

export default Card;
