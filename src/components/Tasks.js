import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

//Context
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

import TaskItem from './TaskItem';
import UseDebounce from '../utility/UseDebounce';
import searchIcon from '../assets/search-solid.svg';


const Card = styled.div`
  width:100%;
  padding:24px;
  background-color:#ffffff;
  box-shadow: 0px 3px 6px #0000000A;
  border-radius: 12px;
`;
const TasksHeader = styled.div`
  width:100%;
  text-align:center;
  @media (min-width: 768px) {
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
`;
const Title = styled.h3`
  color: #537178;
  font-size:20px;
  line-height:24px;
  font-weight:500;
  margin:0px 0 10px;
`;

const TasksHeaderRight = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:12px;
  @media (min-width: 768px) {
    flex-direction:row;
    margin-left:auto;
  }
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
  @media (min-width: 768px) {
    padding:11px 22px;
    margin-left:12px;
  }
`;
const Search = styled.input.attrs(props => ({
  type: "search"
}))`
background: url(${searchIcon}) no-repeat 15px #D9DFEB;
border-radius:8px;
text-align:center;
padding: 11px 20px 11px 50px;
margin-bottom:8px;
outline:none;
@media (min-width: 768px) {
  margin-bottom:0px;
  text-align:left;
  width:250px
}
`;

function Tasks(){

  const context = useContext(TaskContext);
  const taskList = context.tasks;

  const [searchTerm, setSearchTerm] = useState('');
  const [displyedList, setDisplyedList] = useState([...taskList]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = UseDebounce(searchTerm, 300);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        setDisplyedList(taskList.filter(item => item.name.toLowerCase().includes(debouncedSearchTerm)));
        setIsSearching(false);
      } else {
        setDisplyedList([...taskList]);
      }
    },
    [debouncedSearchTerm, taskList]
  );

    return (
        <Fragment>
          <TasksHeader>
            <Title>Tasks</Title>
            <TasksHeaderRight>
              <Search placeholder="Search by task name" onChange={e => setSearchTerm(e.target.value.trim())}  />
              <Button onClick={context.toggleNewTask} >+ New Task</Button>
            </TasksHeaderRight>
          </TasksHeader>
          <Card>
            {isSearching && <div>Searching ...</div>}
            {displyedList.length <= 0 && <div>No Task Found with {debouncedSearchTerm} </div>}
            {
              displyedList.map(item => (
                <TaskItem key={item.id} task={item} />
              ))
            }
          </Card>
        </Fragment>
    )
}

export default Tasks;