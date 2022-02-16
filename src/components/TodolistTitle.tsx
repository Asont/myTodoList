import React from 'react';

type TodolistTitlePropsType = {
    titleList:string
}

export const TodolistTitle:React.FC<TodolistTitlePropsType> = ({titleList}) => {
    return (
        <h3>{titleList}</h3>
    );
};

