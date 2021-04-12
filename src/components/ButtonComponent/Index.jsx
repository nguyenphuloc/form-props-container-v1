import React from 'react';
import './Style.css';

const ButtonComponent = (props) => {
    const {title, width, color, type, ...buttonProps} = props;
    return(
        <button className="button-cpn"
            {...buttonProps} 
            type={type} 
            style={{width, backgroundColor: color}}
        >{title}
        </button>
    )
}
export default ButtonComponent