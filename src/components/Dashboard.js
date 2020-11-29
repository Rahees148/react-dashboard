/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import {apiProvider} from '../services/provider';
import AuthApi from '../context/AuthApi';

//Local-Components
import Header from './Header';
import CompletedTask from './CompletedTask';
import LatestTask from './LatestTask';
import PieChart from './PieChart';
import Tasks from './Tasks';
import NoTask from './NoTask';
import NewTask from './NewTask';

//Context
import {TaskContext} from '../context/TaskContext';


const Wrapper = styled.section`
  width: 90vw;
  margin:0 auto;
  @media (min-width: 768px) {
    width: 80vw;
  }
`;
const Gird = styled.div`
  width: 100%;
  margin-top:72px;
  padding:22px 0;
  margin-bottom:12px;
  display: grid;
  grid-gap: 8px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill,minmax(30%, 1fr));
    grid-gap: 2%;
  }
`;


function Dashboard(props){
  const Auth = useContext(AuthApi);
  const [tasks, setTasks] = useState([]);
  const [showNewTask, setshowNewTask] = useState(false);

    useEffect(()=>{
      getAllTasks();
    },[]);

    const getAllTasks = () => {
      // const taskList = localStorage.getItem('tasks');

      apiProvider.getAll(`tasks?userId=${Auth.user.id}`).then((res) => {
        const taskList = res;
        setTasks(taskList);
      });
    }

    const onAddItem = (item) =>{
        const newItem = [item, ...tasks]
        setTasks(newItem);
        
        // updateLocalStorage(newItem);
        apiProvider.post('tasks', item);

    }

    const onUpdateItem = (item) =>{
      const newState = tasks.map((currentItem) => {
          if (currentItem.id === item.id) {
            return item
        } else {
          return currentItem
        }
      });
      setTasks(newState);

      //updateLocalStorage( newState);
      apiProvider.put(`tasks/${item.id}`, item);
  }

    const onRemoveItem = (item) =>{   
        const remainingItems = [
          ...tasks.filter( (i) => i.id !== item.id)
        ]
        setTasks(remainingItems);
        
        //updateLocalStorage(remainingItems);
        apiProvider.remove('tasks', item.id);

    }

    // const updateLocalStorage = (tasksList) =>{
    //   localStorage.setItem('tasks', JSON.stringify(tasksList));
    // }

    const onToggleNewTask = () => {
        setshowNewTask( showNewTask ? false : true );
    }

    return (
        <TaskContext.Provider
        value={{
            tasks: tasks,
            addItem: onAddItem,
            removeItem: onRemoveItem,
            updateItem: onUpdateItem,
            toggleNewTask: onToggleNewTask
          }}
        >
                <Header/>
                {
                    tasks.length > 0 ? ( <Wrapper>
                    <Gird>
                        <CompletedTask />
                        <LatestTask />
                        <PieChart />
                    </Gird>
                    <Tasks />
                    </Wrapper>) : <NoTask /> }

                { showNewTask &&
                <NewTask />
                }
        </TaskContext.Provider>
       
    )
}

export default Dashboard;