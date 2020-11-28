import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Context
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

const Card = styled.div`
  width:100%;
  padding:24px;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #0000000A;
  border-radius: 12px;
`;
const Title = styled.h3`
  color: #537178;
  font-size:20px;
  line-height:24px;
  font-weight:500;
  margin:0px 0 24px;
`;
const CompletedTaskCount = styled.h4`
  color: #5285EC;
  font-size:64px;
  line-height:78px;
  font-weight:500;
`;
const Span = styled.span`
  color: #8F9EA2;
  font-size:20px;
  line-height:24px;
`;


function CompletedTask(){
  const context = useContext(TaskContext);
  const [totalCompletedTask, setCompletedTaskTotal] = useState(0);

  useEffect(()=>{
    const tasks = context.tasks;
    const completedTask = tasks.filter(task => task.completed === true);
    setCompletedTaskTotal(completedTask.length);
  },[context]);

    return (
        <Card>
          <Title>Tasks Completed</Title>
          <CompletedTaskCount>{totalCompletedTask}<Span>/{context.tasks.length}</Span> </CompletedTaskCount>
        </Card>
    )
}

export default CompletedTask;