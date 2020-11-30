import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 3;
  top: 0;
`;
const BlackOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: -1;
`;
const NewTaskContainer = styled.div`
  width: 90%;
  max-width: 300px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
`;

export const Style = {
  Wrapper,
  BlackOverlay,
  NewTaskContainer
};
