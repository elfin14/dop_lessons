import React from 'react';

type ButtonPropsType ={
    name: string,
    callback:()=>void


}
export const Button = (props:ButtonPropsType) => {
    const {name, callback}= props
    const HandlerClick =()=>{
        callback()
    }
    return (
        <div>
            <button onClick={HandlerClick}>{name}</button>
        </div>
    );
};

