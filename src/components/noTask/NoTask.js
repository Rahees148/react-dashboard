import { Style } from "./NoTask.style";

//Context
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
//Atoms
import Button from "../atoms/button/Button";
import Title from '../atoms/title/Title';

function NoTask() {
  const context = useContext(TaskContext);
  return (
    <Style.Wrapper>
      <Style.NoTaskContainer>
        <Title>You have no task.</Title>
        <Button onClick={context.toggleNewTask}>+ New Task</Button>
      </Style.NoTaskContainer>
    </Style.Wrapper>
  );
}

export default NoTask;
