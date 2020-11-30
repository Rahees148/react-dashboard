import styled from "styled-components";

const Input = styled.input`
  background-color: #eef1f8;
  border-radius: 8px;
  width: 100%;
  padding: 11px 16px;
  margin-bottom: 12px;
  outline: none;
  border: ${(props) => (props.fieldError === true ? "1px solid red" : "none")};
`;
export const Style = {
    Input
  };
  