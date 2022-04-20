import React, { useEffect, useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import FilterBox from './UI/FilterBox';
import ToggleBox from './UI/ToggleBox';
import CardContainer from './CardContainer';

const RequestContents = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const json = await (
                await fetch('http://localhost:4000/requests')
            ).json();
            setData(json);
            console.log(json);
        };
        getData();
    }, []);
    console.log(data);
    return (
        <>
            <Title />
            <FilterBlock>
                <FilterBox />
                <ToggleBox />
            </FilterBlock>
            <CardContainer />
        </>
    );
};

const FilterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default RequestContents;
