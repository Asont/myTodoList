import React from 'react';
import {TodolistTitle} from "./TodolistTitle";
import {FilterType, TaskType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";

type TodoListPropsType = {
    id:string
    titleList:string
    tasks:Array<TaskType>
    changeFilter :(todolistID:string, value:FilterType) =>void
    removeTask : (todolistID:string, taskID:string) =>void
    changeCheckBox : (todolistID:string, taskID:string, isDone:boolean) => void
}

export const TodoList = (props:TodoListPropsType) => {

    const removeTodolistHandler = (taskID:string)=>{
        props.removeTask(props.id, taskID)
    }

    const changeCheckBoxHander = (taskID:string, isDone:boolean) =>{
        debugger
        props.changeCheckBox(props.id, taskID, isDone)
    }

   const tasksForRender = props.tasks.map(m=>{
       return(
           <Task key={m.id} {...m} removeTask={removeTodolistHandler} changeCheckBox={changeCheckBoxHander}/>
       )})

    const onClickChangeFilterAll= ()=>props.changeFilter(props.id,"All")
    const onClickChangeFilterActive= ()=>props.changeFilter(props.id,"Active")
    const onClickChangeFilterCompleted= ()=>props.changeFilter(props.id,"Completed")

    return (
        <div>
            <TodolistTitle titleList={props.titleList}/>
            <div>
                <input/>
                <Button title={"+"} callBack={()=>{}}/>
            </div>
            <ul>
                {tasksForRender}
            </ul>
            <div>
                <Button title={"All"} callBack={onClickChangeFilterAll}/>
                <Button title={"Active"} callBack={onClickChangeFilterActive}/>
                <Button title={"Completed"} callBack={onClickChangeFilterCompleted}/>

            </div>
        </div>
    );
};

