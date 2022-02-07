import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {v1} from "uuid";
import task from "./components/Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = "All" | "Completed" | "Active"

export type TasksObjectsType = {
    [todolistID: string]: Array<TaskType>
}

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

function App() {

    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoList, setTodoList] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "All"},
        {id: todoListID_2, title: "What to buy", filter: "All"},
    ])

    const [tasks, setTasks] = useState<TasksObjectsType>({
        [todoListID_1]:
            [{id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: false},
                {id: v1(), title: "React", isDone: false},
            ],
        [todoListID_2]:
            [{id: v1(), title: "Milk", isDone: true},
                {id: v1(), title: "Bread", isDone: true},
                {id: v1(), title: "Beer", isDone: false},
            ],

    })

    const removeTask = (todoListID: string, taskID: string) => {
        /*       const copyTasks = tasks[todoListID]
               let filterTasks = copyTasks.filter(f=>f.id!==taskID)
               tasks[todoListID]=filterTasks
               setTasks({...tasks})*/

        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(f => f.id !== taskID)})
    }

    const filterTasks = (todoListID: string, value: FilterType) => {
        setTodoList(todoList.map(m => m.id === todoListID ? {...m, filter: value} : m))
    }

    const addTask = (todoListID: string, title: string) => {
        let newTask = {id: v1(), title, isDone: false}
        /*   const copyArr = tasks[todoListID]
           const newArr = [newTask, ...tasks[todoListID]]
           tasks[todoListID] = newArr
           setTasks({...tasks})*/

        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
    }

    const changeStatusTask = (todoListID: string, taskID: string, isDone: boolean) => {
        /*const copyTasks = tasks[todoListID]
        const mapTasks = copyTasks.map(m=>m.id===taskID?{...m, isDone}:m)
        tasks[todoListID]=mapTasks
        setTasks({...tasks})*/

        setTasks({...tasks, [todoListID]: tasks[todoListID].map(m => m.id === taskID ? {...m, isDone} : m)})
    }

    const getTaskForRender = (todoList: TodoListType) => {
        switch (todoList.filter) {
            case("Active"):
                return tasks[todoList.id].filter(f => !f.isDone)
            case("Completed"):
                return tasks[todoList.id].filter(f => f.isDone)
            default:
                return tasks[todoList.id]
        }
    }


    const componentsTodoListRender = todoList.map(tl => {
        const taskRender = getTaskForRender(tl)
        return (
            <TodoList
                key={tl.id}
                id={tl.id}
                titleList={tl.title}
                tasks={taskRender}
                removeTask={removeTask}
            />
        )
    })

    return (
        <div className="App">
            {componentsTodoListRender}
        </div>
    );
}

export default App;
