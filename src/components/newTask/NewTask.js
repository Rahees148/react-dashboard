import React, { useState, useContext } from "react";
import { Style } from "./NewTask.style";
//Context
import { TaskContext } from "../../context/TaskContext";
import AuthApi from "../../context/AuthApi";

//Atoms
import Button from "../atoms/button/Button";
import Input from "../atoms/input/Input";
import Title from "../atoms/title/Title";

function NewTask() {
  const context = useContext(TaskContext);
  const Auth = useContext(AuthApi);
  const [newTaskName, setNewTaskName] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const toggleNewTask = () => {
    context.toggleNewTask();
  };
  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };
  const addNewTask = () => {
    if (newTaskName.trim()) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name: newTaskName,
        completed: false,
        userId: Auth.user.id,
      };
      context.addItem(newTask);
      context.toggleNewTask();
    } else {
      setFieldError(true);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <Style.Wrapper>
      <Style.BlackOverlay onClick={toggleNewTask} />
      <Style.NewTaskContainer>
        <Title>+ New Task</Title>
        <Input
          fieldError={fieldError}
          placeholder="Task Name"
          autoFocus={true}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={addNewTask}>+ New Task</Button>
      </Style.NewTaskContainer>
    </Style.Wrapper>
  );
}

export default NewTask;
