import './Button.css';

import React from 'react';

export default class Button extends React.Component{
    render() {
        return (
            <div className="tTTButtonWrapper1518">
                <button disabled={this.props.disabled} onClick={this.props.onClick} className="tTTButton1518">{this.props.text}</button>
            </div>
        );
    }
}