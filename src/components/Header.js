import React, {  useState, useContext } from 'react';
import Cookies from 'js-cookie';
import styled from 'styled-components';

import AuthApi from '../context/AuthApi';

//Static Asset
import profile from '../assets/profile.png'

const HeaderContainer = styled.header`
  width: 100vw;
  padding:12px 0;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #00000029;
  position:fixed;
  top:0;
  left:0;
`;
const Wrapper = styled.section`
  width: 90vw;
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin:0 auto;
  @media (min-width: 768px) {
    width: 80vw;
  }
`;
const User = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color:#6D8187;
  font-size:16px;
  line-height:19px;
`;
const ProfileImg = styled.img`
  max-width:48px;
  margin-right:16px;
  border-radius:100px;
`;
const Link = styled.a`
    width:auto;
    margin-left:auto;
    color:#6D8187;
    font-size:16px;
    line-height:19px;
    text-decoration:none;
    cursor:pointer;
`;

function Header(){

  const Auth = useContext(AuthApi);

  const handleLogout = () => {
    localStorage.clear();
    Auth.setAuth(false);
    Cookies.remove('user');
  }

    return (
        <HeaderContainer>
            <Wrapper>
                <User>
                    <ProfileImg src={profile} alt={Auth.user.userName} />
                    {Auth.user.userName}
                </User>
                <Link onClick={handleLogout}>Logout</Link>
            </Wrapper>
        </HeaderContainer>
    )
}

export default Header;