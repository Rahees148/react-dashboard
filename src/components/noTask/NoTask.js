
import { Style } from './NoTask.style';

//Context
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';


function NoTask(){
    const context = useContext(TaskContext);
    return (
       
        <Style.Wrapper>
            <Style.NoTaskContainer>
                <Style.Title>You have no task.</Style.Title>
                <Style.Button onClick={context.toggleNewTask}>+ New Task</Style.Button>
            </Style.NoTaskContainer>
        </Style.Wrapper>
        
    )
}

export default NoTask;