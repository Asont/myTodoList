import React, {useState} from 'react';
import TodoListTitle from "./TodoListTitle";
import Button from "./Button";
import {FilterType, TaskType} from "../App";
import Task from "./Task";
import Input from "./Input";

type TodoListPropsType = {
    id: string
    tasks: Array<TaskType>
    titleList: string
    removeTask: (todoListID: string, taskID: string) => void
    changeStatusTask: (todoListID: string, taskID: string, isDone: boolean) => void
    filterTasks: (todoListID: string, value: FilterType) => void
    addTask: (todoListID: string, title: string) => void
    removeTodoList :(todoListID: string)=>void
}

const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>("")

    const tasksMapRender = props.tasks.map(m => {
        const removeTask = (taskID: string) => props.removeTask(props.id, taskID)
        const changeStatusTask = (taskID: string, isDone: boolean) => props.changeStatusTask(props.id, taskID, isDone)
        return (<Task key={m.id} {...m} removeTask={removeTask} changeStatusTask={changeStatusTask}/>)
    })

    const onClickAddTask = () =>{
        props.addTask(props.id, title)
        setTitle("")
    }



    return (
        <div>
            <TodoListTitle titleList={props.titleList} removeTodoList={props.removeTodoList} id={props.id}/>

            <div>
                <Input title={title} setTitle={setTitle}/>
                <Button title={"+"} onClickHandler={onClickAddTask}/>
            </div>
            <ul>
                {tasksMapRender}
            </ul>
            <div>
                <Button title={"All"} onClickHandler={() => props.filterTasks(props.id, "All")}/>
                <Button title={"Active"} onClickHandler={() => props.filterTasks(props.id, "Active")}/>
                <Button title={"Completed"} onClickHandler={() => props.filterTasks(props.id, "Completed")}/>
            </div>
        </div>
    );
};

export default TodoList;
