import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const LoginContainer = styled.div`
  width:90%;
  max-width:300px;
  padding:24px;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
`;

export const Style = {
    Wrapper,
    LoginContainer
}