
import {Style} from './LatestTask.style'

//Context
import {useContext} from 'react';
import {TaskContext} from '../../context/TaskContext';


function LatestTask(){
    const context = useContext(TaskContext);
    const taskList = context.tasks;
    return (
        <Style.Card>
          <Style.Title>Latest Created Tasks</Style.Title>
          <Style.Ul>
          {
              taskList.slice(0,3).map(item => (
                <Style.Li key={item.id} completed={item.completed}> 
                  {item.name.length > 30 ? `${item.name.substring(0, 30)}...`:item.name} 
                </Style.Li>
              ))
            }
          </Style.Ul>
        </Style.Card>
    )
}

export default LatestTask;