import './Board.css';

import React from 'react';

import Square from '../Square/Square';

const Board = ({data, squares, onClick, stepNo}) => {
    const renderSquare = (i) => {
        // console.log(i, this.props.squares);
        return <Square data={data} value = {squares[i]} onClick={() => onClick(i)} stepNo={stepNo} />
    }
   
        return (
            <div className="tTTBoard1518 flexbox">
                <div className="row flexbox">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="row flexbox">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="row flexbox">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        );

}

export default Board;