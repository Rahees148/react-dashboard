import React, { useEffect, useState } from 'react';

import { Style } from './PieChart.style';

//Context
import {useContext} from 'react';
import {TaskContext} from '../../context/TaskContext';

function PieChart(){
    const context = useContext(TaskContext);
    const [totalCompletedTask, setCompletedTaskTotal] = useState(0);
    const tasks = context.tasks;
    useEffect(()=>{
        const completedTask = tasks.filter(task => task.completed === true);
        const completedTasksPercentage = (completedTask.length/tasks.length) * 100
        setCompletedTaskTotal(completedTasksPercentage);
    },[tasks]);

    return (
        <Style.Card>
          <Style.Pie size={totalCompletedTask} >
            {totalCompletedTask !== 0 && <Style.Text>Completed Tasks</Style.Text> }
          </Style.Pie>
        </Style.Card>
    )
}

export default PieChart;