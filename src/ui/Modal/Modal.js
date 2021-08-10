import './Modal.css';

import React from 'react';

import { X } from 'react-feather';

import Avatar from '../Avatar/Avatar';

const THE_WINNNER = "The winner is"

export default class Modal extends React.Component{
    state = {
        modalData: null
    }
    componentDidMount() {
        this.setState({
            modalData: this.props.modalData
        })
    }
    componentDidUpdate() {
        console.log(this.props.modalData);
    }
    render() {
        const props = this.props
        const data = this.props.modalData
        return(
            <div onClick={this.closeModal} className={`tTTModal1518 flexbox ${!props.open? "tTTCloseModal1518" : null}`}>
                { data ? 
                    this.renderModalBody(data)
                  
                  : null
                }
            </div>
        );
    }

    renderModalBody = (data) =>{
        return (
            <div className="tTTModalBody1518 flexbox">
                <X onClick={this.closeModal} />
                {
                    data.label?
                    <h2>{data.label}</h2>
                    :
                    <div className="tTTWinnerModal1518 flexbox">
                        
                        <h1>{THE_WINNNER}</h1>
                        <Avatar src={data.image} style={data.style} />
                        <h3 style={data.winnerStyle}>{data.playerName}</h3>  
                    </div> 
                
                }
            </div>
        );
    }

    closeModal = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        this.props.closeModal()
    }
}