import React from 'react';
import './Button.css';

const Button = (props) => {
    const {title, width, color} = props;
    return(
        <button  style={{width: `${width}%`, backgroundColor: color}}>{title}</button>
    )
}
export default Button