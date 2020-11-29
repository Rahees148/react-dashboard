import React, { useContext } from 'react';
import Cookies from 'js-cookie';

import {Style} from './Header.style';
import AuthApi from '../../context/AuthApi';

//Static Asset
import profile from '../../assets/profile.png'



function Header(){

  const Auth = useContext(AuthApi);

  const handleLogout = () => {
    Auth.setAuth(false);
    Cookies.remove('user');
  }

    return (
        <Style.HeaderContainer>
            <Style.Wrapper>
                <Style.User>
                    <Style.ProfileImg src={profile} alt={Auth.user.userName} />
                    {Auth.user.userName}
                </Style.User>
                <Style.Link onClick={handleLogout}>Logout</Style.Link>
            </Style.Wrapper>
        </Style.HeaderContainer>
    )
}

export default Header;