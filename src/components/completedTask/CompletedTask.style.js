import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #0000000a;
  border-radius: 12px;
`;
const CompletedTaskCount = styled.h4`
  color: #5285ec;
  font-size: 64px;
  line-height: 78px;
  font-weight: 500;
`;
const Span = styled.span`
  color: #8f9ea2;
  font-size: 20px;
  line-height: 24px;
`;

export const Style = {
  Card,
  CompletedTaskCount,
  Span,
};
