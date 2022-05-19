import {
    ArrowDropDown24Icon,
    Refresh24Icon,
    SelectedArrowDropDown24Icon,
} from 'assets/img';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { REQUEST_MATERIALS, REQUEST_METHODS } from 'utils/filterConstants';

const FilterBox = ({ onChange }) => {
    const [filterMenuOpen, setFilterMenuOpen] = useState(null);

    const isCheckedMenu = (item) => filterMenuOpen === item; //잘 이해가 안가넹
    const onOpenFilterMenu = (filter) => setFilterMenuOpen(filter);

    const checkedLength = (arr) => {
        let count = 0;
        arr.forEach((item) => {
            if (item) count++;
        });
        return count > 0 ? `(${count})` : null;
    };

    return (
        <FilterBoxContainer>
            <FilterBoxStyle
                onClick={(e) => {
                    onOpenFilterMenu(
                        isCheckedMenu('methods') ? null : 'methods'
                    );
                }}
                isActive={checkedLength(REQUEST_METHODS) ? true : false}
            >
                <LabelText>가공방식{checkedLength(REQUEST_METHODS)}</LabelText>
                {checkedLength(REQUEST_METHODS) ? (
                    <SelectedArrowDropDownIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
            </FilterBoxStyle>
            {isCheckedMenu('methods') && (
                <FilterMenuBox>
                    {REQUEST_METHODS.map((method) => (
                        <MenuItem key={method}>
                            <CheckBoxStyle
                                type="checkbox"
                                name={method}
                                onChange={onChange}
                            />
                            <CheckBoxLabel>{method}</CheckBoxLabel>
                        </MenuItem>
                    ))}
                </FilterMenuBox>
            )}

            <FilterBoxStyle
                isActive={checkedLength(REQUEST_MATERIALS) ? true : false}
                onClick={(e) => {
                    onOpenFilterMenu(
                        isCheckedMenu('materials') ? null : 'materials'
                    );
                }}
            >
                <LabelText>
                    재료
                    {checkedLength(REQUEST_MATERIALS)}
                </LabelText>
                {checkedLength(REQUEST_MATERIALS) ? (
                    <SelectedArrowDropDownIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
            </FilterBoxStyle>
            {isCheckedMenu('materials') && (
                <FilterMenuBox>
                    {REQUEST_MATERIALS.map((material) => (
                        <MenuItem key={material}>
                            <CheckBoxStyle
                                type="checkbox"
                                name={material}
                                onChange={onChange}
                            />
                            <CheckBoxLabel>{material}</CheckBoxLabel>
                        </MenuItem>
                    ))}
                </FilterMenuBox>
            )}
        </FilterBoxContainer>
    );
};

const FilterBoxContainer = styled.div`
    margin: 32px 0;
    display: flex;
`;

const FilterBoxStyle = styled.div`
    position: relative;
    display: flex;
    height: 32px;
    width: 98px;
    border: 1px solid ${({ theme }) => theme.colors.subGray};
    border-radius: 4px;
    padding: 4px, 12px;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.smallText}px;

    ${(props) =>
        props.isActive
            ? css`
                  background: ${({ theme }) => theme.colors.header};
                  color: ${({ theme }) => theme.colors.white};
              `
            : css`
                  background: ${({ theme }) => theme.colors.white};
                  color: ${({ theme }) => theme.colors.grayText};
              `}

    &:first-child {
        margin-right: 4px;
    }
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;

const LabelText = styled.span`
    height: 14px;
`;

const DropDownIconStyled = css`
    position: absolute;
    top: 50%;
    right: 19px;
    transform: translateY(-50%);
    ${media.medium} {
        right: 12px;
    }
`;

const SelectedArrowDropDownIcon = styled(SelectedArrowDropDown24Icon)`
    ${DropDownIconStyled}
`;

const ArrowDropDownIcon = styled(ArrowDropDown24Icon)`
    ${DropDownIconStyled}
`;

const FilterMenuBox = styled.div`
    width: 130px;
    position: absolute;
    top: 160px;
    z-index: 9999;
    border-radius: 4px;
    padding: 17px 12px;
    border: 1px solid ${({ theme }) => theme.colors.subGray};
    background: ${({ theme }) => theme.colors.white};
    cursor: default;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
`;

const CheckBoxStyle = styled.input`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    cursor: pointer;
`;

const CheckBoxLabel = styled.label`
    font-size: ${({ theme }) => theme.fontSize.text}px;
    margin-top: 1px;
`;
export default FilterBox;
