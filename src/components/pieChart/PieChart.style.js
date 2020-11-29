import styled, { keyframes } from 'styled-components';

const Card = styled.div`
  width:100%;
  padding:24px;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #0000000A;
  border-radius: 12px;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const spin = keyframes`
    to { transform: rotate(.5turn); }
`;
const bg = keyframes`
    50% { background: #5285EC; }
`;
const Pie = styled.div`
  position: relative;
  width: 103px;
  height: 103px;
  border-radius: 50%;
  background: ${props => props.size === 100 ? '#5285EC' : '#E8ECEC'} ;
  background-image:
  linear-gradient(to right, transparent 50%, ${props => props.size === 0 ?  '#E8ECEC' : '#5285EC'} 0);
  color: transparent;
  text-align: center;
  animation-delay:-${props => props.size}s;
  &:before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    width: 50%; height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: inherit;
    transform-origin: left;
    animation: ${spin} 50s linear infinite,
               ${bg} 100s step-end infinite;
    animation-play-state: paused;
    animation-delay: inherit;
  }
`;

const Text = styled.p`
  position:absolute;
  top:-23px;
  right:-43px;
  color:#5285EC;
  font-size:10px;
  line-height:13px;
  width:50px;
  text-align:left;
  &:before{
    content: '';
    width: 22px;
    height: 1px;
    position: absolute;
    background-color: #5285EC;
    left: -25px;
    transform: rotate(-45deg);
    top: 20px;

  }
`;

export const Style = {
    Card,
    Pie,
    Text
}