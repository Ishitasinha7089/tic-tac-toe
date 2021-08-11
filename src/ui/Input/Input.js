import './Input.css';

import React, { useState } from 'react';

const Input = ({label, color, onChange}) =>{
    const [error, setError] = useState("")
    const style ={
        backgroundColor: `var(--${color})`,
        borderColor: `var(--${color}Dark)`
    }
    const expandInput = (e) =>{
        e.target.parentElement.classList.add('tTTInputLabelExpanded1518')
        e.target.nextSibling.disabled=false;
        e.target.nextSibling.focus();
    }

    const shrinkInput = (e) =>{
        if(e.target.value===""){
            e.target.parentElement.classList.remove('tTTInputLabelExpanded1518')
            e.target.disabled=true;
        }
    }
    const changeValue = (e) =>{
        onChange(e.target.value)
        if(e.target.value===""){
           setError(`${e.target.name} is required`)
            return
        }
        setError("")
    }
    return (
        <div className="tTTInputWrapper1518 flexbox">
            <div className="tTTInputLabel1518 flexbox">
                <label onClick={(e) =>expandInput(e)} className="tTTLabel1518">{label}</label>
                <input onBlur={(e) =>shrinkInput(e)} name={label} className="tTTInput1518" disabled={true} style={style} onChange={(e) => changeValue(e)} />
            </div>
            <p>{error}</p>
        </div>
    );
}


export default Input;