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
const Title = styled.h1`
  color: #537178;
  font-size:20px;
  line-height:24px;
  font-weight:500;
  margin:0px 0 24px;
`;
const Input = styled.input`
  background-color: #EEF1F8;
  border-radius:8px;
  width:100%;
  padding:11px 16px;
  margin-bottom:12px;
  outline:none;
`;
const Button = styled.button`
  background-color: #5285EC;
  color:#ffffff;
  border-radius:8px;
  width:100%;
  padding:11px 0;
  text-align:center;
  outline:none;
  cursor: pointer;
`;

export const Style = {
    Wrapper,
    LoginContainer,
    Title,
    Input,
    Button
}