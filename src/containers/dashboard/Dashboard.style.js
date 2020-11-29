import styled from 'styled-components';

const Wrapper = styled.section`
  width: 90vw;
  margin:0 auto;
  @media (min-width: 768px) {
    width: 80vw;
  }
`;
const Gird = styled.div`
  width: 100%;
  margin-top:72px;
  padding:22px 0;
  margin-bottom:12px;
  display: grid;
  grid-gap: 8px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill,minmax(30%, 1fr));
    grid-gap: 2%;
  }
`;

export const Style = {
    Wrapper,
    Gird
}