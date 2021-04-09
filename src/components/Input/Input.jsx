import React from 'react';
import './Input.css';

const Input = (props) => {
    const {handleOnChange, placeholder} = props;
    return(
        <input onChange={handleOnChange} placeholder={placeholder}></input>
    )
}
export default Input