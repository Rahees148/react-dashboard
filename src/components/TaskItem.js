import React, { useState } from "react";

//Context
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

import styled from 'styled-components';
import CheckIcon from '../assets/check.svg';
import DeleteIcon from '../assets/trash-solid.svg';
import EditIcon from '../assets/pen-solid.svg';

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

function TaskItem(props){
    
    const [doEdit, setEidt] = useState(false);
    const context = useContext(TaskContext);
    const task = props.task;
    const [checked, setChecked] = useState(task.completed);
    const [taskName, setTaskName] = useState(task.name);

    const handleCheckboxChange = event => {
            setChecked(!checked);
            if(!checked){
                const updatedTask = {...task,
                    completed: true}
                    context.updateItem(updatedTask);
            }else{
                const updatedTask = {...task,
                completed: false}
                context.updateItem(updatedTask);
            }
            
      }

      const updateTask = () =>{
        const updatedTask = {...task,
          name: taskName}
          context.updateItem(updatedTask);
          setEidt(false)
      }
    return (
        
          <Item>
              <Checkbox 
              checked={checked}
              onClick={handleCheckboxChange}
              >
                  {checked  &&
                        <Check />
                    }
                 
              </Checkbox>
              {doEdit ? 
              <Input type="text" value={taskName} autoFocus={true} onChange={e => setTaskName(e.target.value)} onBlur={updateTask} /> :  <Text checked={checked} >{task.name}</Text>}
              <Action>
                  <Icon onClick={() => setEidt(true)} ><img src={EditIcon} alt="Edit" /></Icon>
                  <Icon onClick={() => context.removeItem(task)} ><img src={DeleteIcon} alt="Delete" /></Icon>
              </Action>
          </Item>
          
    )
}

export default TaskItem;