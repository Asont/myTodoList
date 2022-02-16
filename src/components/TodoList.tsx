import React, {useState} from 'react';
import {TodolistTitle} from "./TodolistTitle";
import {FilterType, TaskType} from "../App";
import {Task} from "./Task";
import {Button} from "./Button";
import {InputTextField} from "./InputTextField";

type TodoListPropsType = {
    id:string
    titleList:string
    tasks:Array<TaskType>
    changeFilter :(todolistID:string, value:FilterType) =>void
    removeTask : (todolistID:string, taskID:string) =>void
    changeCheckBox : (todolistID:string, taskID:string, isDone:boolean) => void
    addTasks : (todolistID:string, title:string) => void
    editTodoListTitle : (todoListID:string, newTitle:string) =>void
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

    const addTitleHandler = (newTitle:string) =>{
        props.addTasks(props.id, newTitle)
    }

    const editTitleTodolistHandler = (newTitle:string) =>{
        debugger
        props.editTodoListTitle(props.id, newTitle)
    }

    return (
        <div>
            <TodolistTitle titleList={props.titleList} callBack={editTitleTodolistHandler}/>
            <div>
               <InputTextField addTitleHandler={addTitleHandler}/>
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

