import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
}

const Input: React.FC<InputType> = ({title, setTitle}) => {

    const onCLickChangeInput = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <input
            value={title}
            onChange={onCLickChangeInput}
        />
    );
};

export default Input;