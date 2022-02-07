import React from 'react';

type ButtonType = {
    title:string
    onClickHandler : ()=>void
}

const Button:React.FC<ButtonType> = ({title,onClickHandler}) => {
    return (
    <button onClick={onClickHandler}>{title}</button>
    );
};

export default Button;