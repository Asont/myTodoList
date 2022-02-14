import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack:(newTitle:string)=>void
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    const [newTitle, setNewTitle] = useState<string>(props.title)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setNewTitle(e.currentTarget.value)
    }

    const ativatedEditMode = () => {
        setEditMode(true)
    }

    const activatedViewMode = () =>{
        setEditMode(false)
        props.callBack(newTitle)
    }

    return (
        editMode ?
            <input value={newTitle} onChange={onChangeInputHandler} onBlur={activatedViewMode} autoFocus={true}/> :
            <span onDoubleClick={ativatedEditMode}>{props.title}</span>
    );
};

