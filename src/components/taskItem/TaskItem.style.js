import styled from 'styled-components';
import CheckIcon from '../../assets/check.svg';

const Item = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  padding:20px 0;
  border-bottom:1px solid #E8E8E8;
  &:first-child{
      padding-top:0;
  }
  &:last-child{
    padding-bottom:0;
    border:none;
}
`;
const Action = styled.div`
  margin-left:auto;
  width:55px;
`
const Checkbox = styled.div`
  position:relative;  
  width:20px;
  height:20px;
  border:2px solid #95A4AB;
  border-radius:4px;
  margin-right:12px;
`
const Check = styled.span`
  position:absolute;
  width:20px;
  height:20px;
  top:-5px;
  right:-7px;
  background:url(${CheckIcon}) no-repeat;
  background-size:100% 100%;
`;  

const Text = styled.p`
    color: ${props => props.checked === true ? '#537178' : '#5285EC'};
    text-decoration: ${props => props.checked === true? 'line-through' : 'none'};
    font-size:20px;
    margin-top:-2px;
    line-height:24px;
    font-weight:500;
    text-align:left;
    max-width:calc(100% - 100px);
`;
const Input = styled.input`
  border:1px solid #F4F4F6;
  padding:5px 10px;
  border-radius:4px;
  width:calc(100% - 100px);
`;
const Icon = styled.i`
  margin: 0 5px;
  cursor:pointer;
`

export const Style = {
    Item,
    Action,
    Checkbox,
    Check,
    Text,
    Input,
    Icon
}