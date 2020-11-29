import React, { useState, useContext } from 'react';
import styled from 'styled-components';

//Context
import {TaskContext} from '../context/TaskContext';
import AuthApi from '../context/AuthApi';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position:absolute;
  z-index:1;
  top:0;
`;
const BlackOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  background-color:rgba(0,0,0, .3);
  top:0;
  left:0;
  z-index:-1;
`;
const NewTaskContainer = styled.div`
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
  border: ${props => props.fieldError === true ? '1px solid red' : 'none'};
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

function NewTask(){
    const context = useContext(TaskContext);
    const Auth = useContext(AuthApi);
    const [newTaskName, setNewTaskName] = useState('');
    const [fieldError, setFieldError] = useState(false);


    const toggleNewTask =  () => {
        context.toggleNewTask();
    }
    const handleChange = (e) => {
        setNewTaskName(e.target.value);
    }
    const addNewTask = () => {
        if(newTaskName.trim()){
            const newTask = {
                "id":Math.floor(Math.random() * 1000),
                "name": newTaskName,
                "completed": false,
                "userId":Auth.user.id
            }
            context.addItem(newTask);
            context.toggleNewTask();
        }else{
            setFieldError(true);
        } 
    }
    const handleKeyDown = (e) =>{
      if (e.key === 'Enter') {
        addNewTask();
      }
    }

    return (
        <Wrapper>
            <BlackOverlay onClick={toggleNewTask} />
            <NewTaskContainer>
                <Title>+ New Task</Title>
                <Input fieldError={fieldError} placeholder="Task Name" autoFocus={true}  onChange={ handleChange } onKeyDown={handleKeyDown} />
                <Button onClick={ addNewTask }>+ New Task</Button>
            </NewTaskContainer>
        </Wrapper>
    )
}

export default NewTask;