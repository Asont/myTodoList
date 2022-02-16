import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title:string
    callBack :(newTitle:string)=> void
}

export const EditableSpan = (props:EditableSpanPropsType) => {

    const [newtitle,setTitle] = useState<string>(props.title)
    const [edit, setEdit]= useState<boolean>(false)

    const activeEditMode = () => {
        setEdit(true)
        setTitle(props.title)

    }

    const activeViewMode = () => {
        setEdit(false)
        debugger
        props.callBack(newtitle)
    }

    const onChangeInputHandler =(e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
    }

    return (
            edit ?
                <input value={newtitle} onBlur={activeViewMode} autoFocus={true} onChange={onChangeInputHandler}/>:
                <span onDoubleClick={activeEditMode}>{props.title}</span>
    );
};

