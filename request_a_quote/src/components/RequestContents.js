import React, { useEffect, useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import FilterBox from './UI/FilterBox';
import ToggleBox from './UI/ToggleBox';
import CardContainer from './CardContainer';

const RequestContents = () => {
    const [data, setData] = useState([]);
    const [isToggled, setIsToggled] = useState(false);

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

    const filteredData =
        data && isToggled
            ? data.filter((item) => item.status === '상담중')
            : data;
    if (filteredData === null || data === null) return <div>로딩중</div>;

    return (
        <>
            <Title />
            <FilterBlock>
                <FilterBox />
                <ToggleBox isToggled={isToggled} setIsToggled={setIsToggled} />
            </FilterBlock>
            <CardContainer cardData={filteredData} />
        </>
    );
};

const FilterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default RequestContents;
