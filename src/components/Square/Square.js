import './Square.css';

import React from 'react';

import Avatar from '../Avatar/Avatar';

export default class Square extends React.Component{
    state = {
        data: null
    }
    componentDidMount() {
        this.setState({
            data:this.props.data
        })
    }
    renderAvatar = () =>{
        return (
            this.props.data?
            (
            this.props.value===null ?
            null:
            (
                this.props.value==="token1" ?
                <Avatar src={this.props.data.token1Image} style={this.props.data.style1} onClick={null}/>
                :
                <Avatar src={this.props.data.token2Image} style={this.props.data.style2} onClick={null}/>
            )
            
            )
            :
            null
        )
    }
    render() {
        return (
            <button className="tTTSquare1518" onClick={this.props.onClick}>
                {this.renderAvatar()}
            </button>
        );
    }
}