import './Avatar.css';

import React from 'react';

export default class Avatar extends React.Component{
    render() {
        return (
            <img onClick={this.props.onClick} src={this.props.src} alt="img" style={this.props.style} />
        );
    }
}