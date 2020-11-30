import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 90px;
  @media (min-width: 768px) {
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const NoTaskContainer = styled.div`
  width: 100%;
  padding: 24px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;

  @media (min-width: 768px) {
    border-radius: 12px;
    max-width: 300px;
  }
`;

export const Style = {
  Wrapper,
  NoTaskContainer,
};
