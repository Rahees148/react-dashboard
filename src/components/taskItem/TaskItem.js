import React, { useState } from "react";

import { Style } from "./TaskItem.style";

//Context
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

import DeleteIcon from "../../assets/trash-solid.svg";
import EditIcon from "../../assets/pen-solid.svg";

function TaskItem(props) {
  const [doEdit, setEidt] = useState(false);
  const context = useContext(TaskContext);
  const task = props.task;
  const [checked, setChecked] = useState(task.completed);
  const [taskName, setTaskName] = useState(task.name);

  const handleCheckboxChange = (event) => {
    setChecked(!checked);
    if (!checked) {
      const updatedTask = { ...task, completed: true };
      context.updateItem(updatedTask);
    } else {
      const updatedTask = { ...task, completed: false };
      context.updateItem(updatedTask);
    }
  };

  const updateTask = () => {
    const updatedTask = { ...task, name: taskName };
    context.updateItem(updatedTask);
    setEidt(false);
  };
  return (
    <Style.Item>
      <Style.Checkbox checked={checked} onClick={handleCheckboxChange}>
        {checked && <Style.Check />}
      </Style.Checkbox>
      {doEdit ? (
        <Style.Input
          type="text"
          value={taskName}
          autoFocus={true}
          onChange={(e) => setTaskName(e.target.value)}
          onBlur={updateTask}
        />
      ) : (
        <Style.Text checked={checked}>{task.name}</Style.Text>
      )}
      <Style.Action>
        <Style.Icon onClick={() => setEidt(true)}>
          <img src={EditIcon} alt="Edit" />
        </Style.Icon>
        <Style.Icon onClick={() => context.removeItem(task)}>
          <img src={DeleteIcon} alt="Delete" />
        </Style.Icon>
      </Style.Action>
    </Style.Item>
  );
}

export default TaskItem;
