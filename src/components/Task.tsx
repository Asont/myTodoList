import React, {ChangeEvent} from 'react';
import {TaskType} from "../App";
import Button from "./Button";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeStatusTask: (taskID: string, isDone: boolean) => void
}

const Task: React.FC<TaskPropsType> = ({id, title, isDone, removeTask, changeStatusTask}) => {

    const onClickChangeCheckBos = (e: ChangeEvent<HTMLInputElement>) => changeStatusTask(id, e.currentTarget.checked)
    const onClickRemoveTask = () => removeTask(id)
    return (
        <li>
            <input type="checkbox"
                   checked={isDone}
                   onChange={onClickChangeCheckBos}
            />
            <span>{title}</span>
            <Button title={"x"} onClickHandler={onClickRemoveTask}/>
        </li>
    );
};

export default Task;