import './Button.css';

import React from 'react';

const Button = ({disabled, onClick, text}) => {
    return (
        <div className="tTTButtonWrapper1518">
            <button disabled={disabled} onClick={onClick} className="tTTButton1518">{text}</button>
        </div>
    );
}

export default Button;