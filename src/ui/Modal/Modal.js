import './Modal.css';

import React from 'react';

import { X } from 'react-feather';

import Avatar from '../Avatar/Avatar';

const THE_WINNNER = "The winner is"

const Modal = ({modalData, open, closeModal}) => {
    const renderModalBody = (data) =>{
        return (
            <div className="tTTModalBody1518 flexbox">
                <X onClick={closeModal} />
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
        return(
            <div onClick={closeModal} className={`tTTModal1518 flexbox ${!open? "tTTCloseModal1518" : null}`}>
                { modalData ? 
                    renderModalBody(modalData)
                  
                  : null
                }
            </div>
        );
    

   
}

export default Modal;