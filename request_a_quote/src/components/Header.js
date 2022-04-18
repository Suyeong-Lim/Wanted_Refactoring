import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Breakpoints from 'styles/breakpoints';

import { Logo } from 'assets/img';
import { CompanyIcon } from 'assets/img';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <LogoIcon src={Logo} />
                <Profile>
                    <img src={CompanyIcon} alt="회사 로고" />
                    <NameText>A 가공 업체</NameText>
                    <div>
                        <LogoutText>로그아웃</LogoutText>
                    </div>
                </Profile>
            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 40px;
    background-color: #1565c0; ;
`;

const LogoIcon = styled.img`
    height: 20px;
    cursor: pointer;
    ${media.medium} {
        height: 12px;
    }
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    color: white;
    img {
        width: 16px;
        margin-right: 8px;
    }
    div {
        padding-left: 32px;
        margin-left: 32px;
        border-left: 1px solid #fff;
    }
`;
const NameText = styled.p`
    font-weight: 500;
`;
const LogoutText = styled.p`
    font-weight: 500;
    cursor: pointer;
`;

export default Header;
