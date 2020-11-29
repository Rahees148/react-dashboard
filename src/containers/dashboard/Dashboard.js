/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext, Fragment } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Style } from "./Dashboard.style";

//Context & service
import { apiProvider } from "../../services/provider";
import AuthApi from "../../context/AuthApi";
import { TaskContext } from "../../context/TaskContext";

//Local-Components
import Header from "../../components/header/Header";
import CompletedTask from "../../components/completedTask/CompletedTask";
import LatestTask from "../../components/latestTask/LatestTask";
import PieChart from "../../components/pieChart/PieChart";
import Tasks from "../../components/tasks/Tasks";
import NoTask from "../../components/noTask/NoTask";
import NewTask from "../../components/newTask/NewTask";

import SkeletonLoading from "../../utility/SkeletonLoding";

function Dashboard(props) {
  const { promiseInProgress } = usePromiseTracker();
  const Auth = useContext(AuthApi);
  const [tasks, setTasks] = useState([]);
  const [showNewTask, setshowNewTask] = useState(false);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    // const taskList = localStorage.getItem('tasks');
    trackPromise(
      apiProvider.getAll(`tasks?userId=${Auth.user.id}`).then((res) => {
        const taskList = res;
        setTasks(taskList);
      })
    );
  };

  const onAddItem = (item) => {
    const newItem = [item, ...tasks];
    setTasks(newItem);

    // updateLocalStorage(newItem);
    apiProvider.post("tasks", item);
  };

  const onUpdateItem = (item) => {
    const newState = tasks.map((currentItem) => {
      if (currentItem.id === item.id) {
        return item;
      } else {
        return currentItem;
      }
    });
    setTasks(newState);

    //updateLocalStorage( newState);
    apiProvider.put(`tasks/${item.id}`, item);
  };

  const onRemoveItem = (item) => {
    const remainingItems = [...tasks.filter((i) => i.id !== item.id)];
    setTasks(remainingItems);

    //updateLocalStorage(remainingItems);
    apiProvider.remove("tasks", item.id);
  };

  // const updateLocalStorage = (tasksList) =>{
  //   localStorage.setItem('tasks', JSON.stringify(tasksList));
  // }

  const onToggleNewTask = () => {
    setshowNewTask(showNewTask ? false : true);
  };

  return (
    <Fragment>
      <Header />
      {!promiseInProgress && (
        <TaskContext.Provider
          value={{
            tasks: tasks,
            addItem: onAddItem,
            removeItem: onRemoveItem,
            updateItem: onUpdateItem,
            toggleNewTask: onToggleNewTask,
          }}
        >
          {tasks.length > 0 ? (
            <Style.Wrapper>
              <Style.Grid>
                <CompletedTask />
                <LatestTask />
                <PieChart />
              </Style.Grid>
              <Tasks />
            </Style.Wrapper>
          ) : (
            <NoTask />
          )}
          {showNewTask && <NewTask />}
        </TaskContext.Provider>
      )}
      <SkeletonLoading />
    </Fragment>
  );
}

export default Dashboard;
