import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemForm = {
    callBack:(title:string)=>void
}


export const AddItemForm = (props:AddItemForm) => {

    const [title, setTitle] = useState<string>("")

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.callBack(title)
        setTitle("")
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        (e.key == "Enter")&&addTask()

    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTask}>+</button>
        </div>


    );
};

