import React from 'react';

type TodoListTitleType = {
    titleList:string
}

const TodoListTitle:React.FC<TodoListTitleType> = ({titleList}) => {
    return (
       <h3>{titleList}</h3>
    );
};

export default TodoListTitle;