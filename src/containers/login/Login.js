import React, { useState, useContext } from "react";

import { Style } from "./Login.style";

import { apiProvider } from "../../services/provider";
import Cookies from "js-cookie";
import AuthApi from "../../context/AuthApi";
//Atoms
import Button from "../../components/atoms/button/Button";
import Input from "../../components/atoms/input/Input";
import Title from "../../components/atoms/title/Title";

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
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Style.Wrapper>
      <Style.LoginContainer>
        <Title>Login</Title>
        <Input
          fieldError={fieldError}
          type="number"
          placeholder="Id"
          onChange={(e) => setUserId(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Input
          fieldError={fieldError}
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Style.LoginContainer>
    </Style.Wrapper>
  );
}

export default Login;
