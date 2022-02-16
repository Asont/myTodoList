import React, {ChangeEvent} from 'react';
import {TaskType} from "../App";
import {Button} from "./Button";
import {InputCheckBox} from "./InputCheckBox";

type TaskPropsType = TaskType & {
    removeTask : (taskID:string) =>void
    changeCheckBox : (taskID:string, isDone:boolean) =>void
}

export const Task = (props:TaskPropsType) => {


    const onChangeCheckBox =(checked:boolean)=>{
        debugger
        props.changeCheckBox(props.id, checked)
    }

    return (
        <li>
            <InputCheckBox isDone={props.isDone} callBack={onChangeCheckBox}/>
            <span>{props.title}</span>
            <Button title={"x"} callBack={()=>{props.removeTask(props.id)}}/>
        </li>
    );
};

