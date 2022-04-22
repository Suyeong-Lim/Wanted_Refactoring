import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Card from './Card';

const CardContainer = ({ cardData }) => {
    return (
        <Container>
            {cardData.map((data) => (
                <Card key={data.id} data={data} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    gap: 16px;

    ${media.large} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media.medium} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default CardContainer;
