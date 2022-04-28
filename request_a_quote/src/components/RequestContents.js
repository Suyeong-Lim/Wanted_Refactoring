import React, { useEffect, useState, useRef } from 'react';
import Title from './Title';
import styled from 'styled-components';
import FilterBox from './UI/FilterBox';
import ToggleBox from './UI/ToggleBox';
import CardContainer from './CardContainer';
import { getRequests } from 'api/client';
const RequestContents = () => {
    const [data, setData] = useState([]);

    const [isToggled, setIsToggled] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filteredData = data.filter((request) =>
        selectedFilters.every((item) => request.filters.includes(item))
    ); //토끼랑 돼지가 있으면 토끼 돼지 둘다 있어야 된다.

    const requestList = isToggled
        ? filteredData.filter((item) => item.status === '상담중')
        : filteredData;

    const getData = async () => {
        const result = await getRequests();

        setData(
            result.map((request) => ({
                ...request,
                filters: [
                    ...request.method,
                    ...request.material,
                    request.status,
                ],
            }))
        );
    };

    useEffect(() => {
        getData();
    }, []);

    if (filteredData === null || data === null) return <div>로딩중</div>;

    const onChange = (e) => {
        const name = e.target.name;
        const selectedFilterList = selectedFilters.includes(name)
            ? selectedFilters.filter((selected) => selected !== name)
            : [...selectedFilters, name];
        setSelectedFilters(selectedFilterList);
    };

    return (
        <>
            <Title />
            <FilterBlock>
                <FilterBox onChange={onChange} />
                <ToggleBox isToggled={isToggled} setIsToggled={setIsToggled} />
            </FilterBlock>
            <CardContainer cardData={requestList} />
        </>
    );
};

const FilterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default RequestContents;
