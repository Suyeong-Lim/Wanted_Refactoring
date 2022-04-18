import React from 'react';
import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import media from 'styles/media';

const MainPages = () => {
    return (
        <MainContainer>
            <MainLayout>gg</MainLayout>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const MainLayout = styled.div`
    width: ${breakpoints.large}px;
    margin: 0 auto;
    flex: 1 0 auto;
    background-color: #fff;

    ${media.large} {
        background-color: #cccc9a;
        width: ${breakpoints.medium}px;
    }
    ${media.medium} {
        background-color: aliceblue;
        width: ${breakpoints.small}px;
    }
`;

export default MainPages;
