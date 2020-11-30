import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  padding: 12px 0;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;
const Wrapper = styled.section`
  width: 90vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 80vw;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6d8187;
  font-size: 16px;
  line-height: 19px;
`;
const ProfileImg = styled.img`
  max-width: 48px;
  margin-right: 16px;
  border-radius: 100px;
`;
const Link = styled.a`
  width: auto;
  margin-left: auto;
  color: #6d8187;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  cursor: pointer;
`;

export const Style = {
  HeaderContainer,
  Wrapper,
  User,
  ProfileImg,
  Link,
};
