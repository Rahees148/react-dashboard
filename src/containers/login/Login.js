import React, { useState, useContext } from "react";

import { Style } from "./Login.style";

import { apiProvider } from "../../services/provider";
import Cookies from "js-cookie";
import AuthApi from "../../context/AuthApi";

function Login(props) {
  
  const Auth = useContext(AuthApi);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const handleLogin = () => {
    if (userId.trim() && userName.trim()) {
      const user = {
        id: parseInt(userId),
        userName,
      };
      apiProvider.post("profile", user);
      Cookies.set("user", JSON.stringify(user));
      Auth.setAuth(true);
      Auth.setUser(user);
    } else {
      setFieldError(true);
    }
  };

  return (
    <Style.Wrapper>
      <Style.LoginContainer>
        <Style.Title>Login</Style.Title>
        <Style.Input
          fieldError={fieldError}
          type="number"
          placeholder="Id"
          onChange={(e) => setUserId(e.target.value)}
        />
        <Style.Input
          fieldError={fieldError}
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Style.Button onClick={handleLogin}>Login</Style.Button>
      </Style.LoginContainer>
    </Style.Wrapper>
  );
}

export default Login;
