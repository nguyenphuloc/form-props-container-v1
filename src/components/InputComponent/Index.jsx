import React from 'react';
import './Style.css';

const InputComponent = (props) => {
    const {handleOnChange, placeholder, ...inputProps} = props;
    return(
        <input className="input-cpn"
            onChange={(event) => handleOnChange(event)} 
            placeholder={placeholder}
            {...inputProps}
        ></input>
    )
}
export default InputComponent