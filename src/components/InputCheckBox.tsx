import React, { useState} from 'react';

type InputCheckBoxPropsType = {
    isDone:boolean
    callBack:(checked:boolean)=>void
}

export const InputCheckBox = (props:InputCheckBoxPropsType) => {

    const [checked, setChecked]= useState<boolean>(props.isDone)

    const onChangeCheckBox = () =>{
        setChecked(!checked)
        props.callBack(!checked)
    }



    return (
        <input type={"checkbox"} checked={checked} onChange={onChangeCheckBox}/>
    );
};

