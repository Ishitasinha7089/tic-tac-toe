import './Modal.css';

import React from 'react';

import Confetti from 'react-confetti';
import { X } from 'react-feather';
import { useWindowSize } from 'react-use';

import Avatar from '../Avatar/Avatar';

const THE_WINNNER = "The winner is"

const Modal = ({modalData, open, closeModal}) => {
    const {width, height} = useWindowSize()

    const sphere = () =>{
        return ctx => {
            ctx.save();
            ctx.scale(0.75, 1);
            ctx.beginPath();
            ctx.arc(15, 16, 5, 0, Math.PI*2, false);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }
    }
    const renderModalBody = (data) =>{
        return (
            <div className="tTTModalBodyConfetti1518">
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
            <Confetti className={`tTTModalConfetti1518 ${data.label? null: "tTTShowConfetti1518"}`}
                drawShape={sphere()} 
                numberOfPieces={300}
                tweenDuration={500}
                initialVelocityY={100}
                height={height}
                width={width}
            />
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