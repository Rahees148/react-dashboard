import styled from 'styled-components';
import searchIcon from '../../assets/search-solid.svg';

const Card = styled.div`
  width:100%;
  padding:24px;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #0000000A;
  border-radius: 12px;
`;
const TasksHeader = styled.div`
  width:100%;
  text-align:center;
  @media (min-width: 768px) {
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
`;

const TasksHeaderRight = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:12px;
  @media (min-width: 768px) {
    flex-direction:row;
    margin-left:auto;
  }
`;

const Search = styled.input.attrs(props => ({
  type: "search"
}))`
background: url(${searchIcon}) no-repeat 15px #D9DFEB;
border-radius:8px;
text-align:center;
padding: 11px 20px 11px 50px;
margin-bottom:8px;
outline:none;
@media (min-width: 768px) {
  margin-bottom:0px;
  margin-right:12px;
  text-align:left;
  width:250px
}
`;

export const Style = {
    Card,
    TasksHeader,
    TasksHeaderRight,
    Search
}