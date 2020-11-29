import React, { Fragment, useState, useEffect } from "react";

import { Style } from "./Task.style";

//Context
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

import TaskItem from "../taskItem/TaskItem";
import UseDebounce from "../../utility/UseDebounce";

function Tasks() {
  const context = useContext(TaskContext);
  const taskList = context.tasks;

  const [searchTerm, setSearchTerm] = useState("");
  const [displyedList, setDisplyedList] = useState([...taskList]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = UseDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      setDisplyedList(
        taskList.filter((item) =>
          item.name.toLowerCase().includes(debouncedSearchTerm)
        )
      );
      setIsSearching(false);
    } else {
      setDisplyedList([...taskList]);
    }
  }, [debouncedSearchTerm, taskList]);

  return (
    <Fragment>
      <Style.TasksHeader>
        <Style.Title>Tasks</Style.Title>
        <Style.TasksHeaderRight>
          <Style.Search
            placeholder="Search by task name"
            onChange={(e) => setSearchTerm(e.target.value.trim())}
          />
          <Style.Button onClick={context.toggleNewTask}>
            + New Task
          </Style.Button>
        </Style.TasksHeaderRight>
      </Style.TasksHeader>
      <Style.Card>
        {isSearching && <div>Searching ...</div>}
        {displyedList.length <= 0 && (
          <div>No Task Found with {debouncedSearchTerm} </div>
        )}
        {displyedList.map((item) => (
          <TaskItem key={item.id} task={item} />
        ))}
      </Style.Card>
    </Fragment>
  );
}

export default Tasks;
