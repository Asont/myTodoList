import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {v1} from "uuid";

import {InputTextField} from "./components/InputTextField";

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}

export type FilterType = "All" | "Active" | "Completed"

type TodoListType = {
    id:string
    title:string
    filter:FilterType
}

type TasksStateType = {
    [todolistid:string]:Array<TaskType>
}

function App() {

    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "All"},
        {id: todoListID_2, title: "What to buy", filter: "All"},
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "React", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Beer", isDone: false},
            {id: v1(), title: "Water", isDone: false},
        ],

    })

    const getTaskForRender = (todoLists: TodoListType) => {
        switch (todoLists.filter) {
            case("Active"):
                return tasks[todoLists.id].filter(f => !f.isDone)
            case("Completed"):
                return tasks[todoLists.id].filter(f => f.isDone)
            default:
                return tasks[todoLists.id]
        }
    }

    const addTasks = (todolistID: string, title: string) => {
        const taskNewID = v1()
        let newTask: TaskType = {id: taskNewID, title, isDone: false}
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    const changeFilter = (todolistID: string, value: FilterType) => {
        setTodoLists(todoLists.map(m => m.id === todolistID ? {...m, filter: value} : m))
    }

    const removeTask = (todolistID: string, taskID: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(f => f.id !== taskID)})
    }

    const changeCheckBox = (todolistID: string, taskID: string, isDone: boolean) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(m => m.id === taskID ? {...m, isDone} : m)})
    }

    const addTodoList = (title: string) => {
        const newTodoListID = v1()
        const newTodoList: TodoListType = {id: newTodoListID, title, filter: "All"}
        setTodoLists([newTodoList, ...todoLists])
        setTasks({...tasks, [newTodoListID]: []})
    }

    const editTodoListTitle = (todoListID: string, title: string) => {
        setTodoLists(todoLists.map(m=>m.id===todoListID?{...m, title}:m))

     /*   // найдём нужный todolist
        const todolist = todoLists.find(tl => tl.id === todoListID);
        if (todolist) {
            // если нашёлся - изменим ему заголовок
            todolist.title = newTitle;
            setTodoLists([...todoLists])
        }*/
    }

        const renderTodolis = todoLists.map(m => {
            let tasksRendered = getTaskForRender(m)
            return (
                <TodoList
                    id={m.id}
                    titleList={m.title}
                    tasks={tasksRendered}
                    changeFilter={changeFilter}
                    removeTask={removeTask}
                    changeCheckBox={changeCheckBox}
                    addTasks={addTasks}
                    editTodoListTitle={editTodoListTitle}
                />
            )
        })


        return (
            <div className="App">
                <InputTextField addTitleHandler={addTodoList}/>
                {renderTodolis}
            </div>
        )
    }

export default App;
