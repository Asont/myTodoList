import React from 'react';
import TodoListTitle from "./TodoListTitle";
import Button from "./Button";
import {TaskType} from "../App";
import Task from "./Task";

type TodoListPropsType = {
    id:string
    tasks:Array<TaskType>
    titleList:string
    removeTask : (todoListID: string, taskID: string) =>void
}

const TodoList = (props:TodoListPropsType) => {



    const tasksMapRender = props.tasks.map(m=>{
        const removeTask=(taskID:string)=>props.removeTask(props.id, taskID)
      return(<Task key={m.id} {...m} removeTask={removeTask}/>)
    })

    return (
        <div>
            <TodoListTitle titleList={props.titleList}/>
            <div>
                <input/>
                <Button title={"+"} onClickHandler={()=>props.removeTask}/>
            </div>
            <ul>
                {tasksMapRender}
            </ul>
            <div>
                <Button title={"All"} onClickHandler={()=>props.removeTask}/>
                <Button title={"Active"} onClickHandler={()=>props.removeTask}/>
                <Button title={"Completed"} onClickHandler={()=>props.removeTask}/>
            </div>
        </div>
    );
};

export default TodoList;
