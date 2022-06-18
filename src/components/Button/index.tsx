import React from 'react';
import style from './Button.module.scss'



function Button (props:{type?: "button" | "submit" | "reset" | undefined, onClick?: () => void,children:any}){
    const {type = "button", onClick} = props;
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {props.children}
        </button>
    )
}

export default Button;