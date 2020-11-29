import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Style } from "./Header.style";
import AuthApi from "../../context/AuthApi";

//Static Asset
import profile from "../../assets/profile.png";

function Header() {
  const Auth = useContext(AuthApi);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(Cookies.get("user"));
    setUserName(user.userName);
  }, []);

  const handleLogout = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
  };

  return (
    <Style.HeaderContainer>
      <Style.Wrapper>
        <Style.User>
          <Style.ProfileImg src={profile} alt={userName} />
          {userName}
        </Style.User>
        <Style.Link onClick={handleLogout}>Logout</Style.Link>
      </Style.Wrapper>
    </Style.HeaderContainer>
  );
}

export default Header;
