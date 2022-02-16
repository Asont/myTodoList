import React from 'react';

type ButtonPropsType = {
    title:String
    callBack:()=>void
}


export const Button = (props:ButtonPropsType) => {
    return (
        <button onClick={props.callBack}>{props.title}</button>
    );
};
