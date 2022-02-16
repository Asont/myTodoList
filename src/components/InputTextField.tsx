import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type InputTextFieldPropsType = {
    addTitleHandler: (newTitle: string) => void
}

export const InputTextField = (props: InputTextFieldPropsType) => {

    const [newTitle, setNewTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)

    }

    const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addItem()
    }
    const addItem = () => {
        const newTitleTrim = newTitle.trim()
      if(newTitleTrim){
          props.addTitleHandler(newTitle)
          setNewTitle("")
      } else setError(true)
    }

    const errorMessage = error? <div>"The text is required"</div>:null

    return (
        <div>
            <input value={newTitle} onChange={onChangeInputHandler} onKeyPress={onKeyPressInputHandler}/>
            <Button title={"+"} callBack={addItem}/>
            {errorMessage}
        </div>
    );
};

