import React from 'react';
import {TaskType} from "../App";
import Button from "./Button";

type TaskPropsType = TaskType & {
    removeTask : ( taskID: string) =>void
}

const Task:React.FC<TaskPropsType> = ({id,title, isDone,removeTask}) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <Button title={"x"} onClickHandler={()=>removeTask(id)}/>
        </li>
    );
};

export default Task;