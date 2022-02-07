import React from 'react';
import Button from "./Button";

type TodoListTitleType = {
    id:string
    titleList:string
    removeTodoList :(todoListID: string)=>void
}

const TodoListTitle:React.FC<TodoListTitleType> = ({titleList, removeTodoList,id}) => {
    return (
        <>
            <span><b>{titleList}</b></span>
        <Button title={"x"} onClickHandler={()=>removeTodoList(id)}/>
        </>
    );
};

export default TodoListTitle;