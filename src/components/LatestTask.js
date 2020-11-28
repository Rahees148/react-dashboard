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
const Ul = styled.ul`
  Padding-left:24px;
`;
const Li = styled.li`
  color: #8F9EA2;
  font-size:14px;
  line-height:26px;
  text-decoration: ${props => props.completed === true? 'line-through' : 'none'};
`;

function LatestTask(){
    const context = useContext(TaskContext);
    const taskList = context.tasks;
    return (
        <Card>
          <Title>Latest Created Tasks</Title>
          <Ul>
          {
              taskList.slice(0,3).map(item => (
                <Li key={item.id} completed={item.completed}> {item.name.length > 30 ? `${item.name.substring(0, 30)}...`:item.name} </Li>
              ))
            }
          </Ul>
        </Card>
    )
}

export default LatestTask;