import React, { useEffect, useState } from 'react';
import {Style} from './CompletedTask.style';

//Context
import {useContext} from 'react';
import {TaskContext} from '../../context/TaskContext';


function CompletedTask(){
  const context = useContext(TaskContext);
  const [totalCompletedTask, setCompletedTaskTotal] = useState(0);

  useEffect(()=>{
    const tasks = context.tasks;
    const completedTask = tasks.filter(task => task.completed === true);
    setCompletedTaskTotal(completedTask.length);
  },[context]);

    return (
        <Style.Card>
          <Style.Title>Tasks Completed</Style.Title>
          <Style.CompletedTaskCount>{totalCompletedTask}
            <Style.Span>/{context.tasks.length}</Style.Span> 
          </Style.CompletedTaskCount>
        </Style.Card>
    )
}

export default CompletedTask;