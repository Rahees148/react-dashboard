
import styled from 'styled-components';

//Context
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';


const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top:90px;
  @media (min-width: 768px) {
    padding-top:0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const NoTaskContainer = styled.div`
  width:100%;
  padding:24px;
  text-align:center;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #00000029;
  
  @media (min-width: 768px) {
    border-radius: 12px;
    max-width:300px;
  }
`;
const Title = styled.h1`
  color: #537178;
  font-size:20px;
  line-height:28px;
  font-weight:500;
  color: #537178;
  margin:0px 0 24px;
`;

const Button = styled.button`
  background-color: #5285EC;
  color:#ffffff;
  border-radius:8px;
  padding:11px 22px;
  text-align:center;
  outline:none;
  cursor: pointer;
`;

function NoTask(){
    const context = useContext(TaskContext);
    return (
       
        <Wrapper>
            <NoTaskContainer>
                <Title>You have no task.</Title>
                <Button onClick={context.toggleNewTask}>+ New Task</Button>
            </NoTaskContainer>
        </Wrapper>
        
    )
}

export default NoTask;