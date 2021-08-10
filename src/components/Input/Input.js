import './Input.css';

import React from 'react';

export default class Input extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            error:""
        }
    }
    color = this.props.color;
    label = this.props.label;
    style ={
        backgroundColor: `var(--${this.color})`,
        borderColor: `var(--${this.color}Dark)`
    }
    expandInput = (e) =>{
        e.target.parentElement.classList.add('tTTInputLabelExpanded1518')
        e.target.nextSibling.disabled=false;
        e.target.nextSibling.focus();
    }
    changeValue = (e) =>{
        this.props.onChange(e.target.value)
        if(e.target.value===""){
            this.setState({
                error: "Player's name is required"
            })
            return
        }
        this.setState({
            error: ""
        })
    }
    render() {
        
        return (
            <div className="tTTInputWrapper1518 flexbox">
                <div className="tTTInputLabel1518 flexbox">
                    <label onClick={(e) =>this.expandInput(e)} className="tTTLabel1518">{this.label}</label>
                    <input className="tTTInput1518" disabled={true} style={this.style} onChange={(e) => this.changeValue(e)} />
                </div>
                <p>{this.state.error}</p>
            </div>
        );
    }
}