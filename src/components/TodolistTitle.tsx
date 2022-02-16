import React from 'react';
import {EditableSpan} from "./EditableSpan";

type TodolistTitlePropsType = {
    titleList:string
    callBack:(newTitle:string)=>void
}

export const TodolistTitle:React.FC<TodolistTitlePropsType> = ({titleList, callBack}) => {
    return (

        <h3><EditableSpan title={titleList} callBack={callBack}/></h3>
    );
};

