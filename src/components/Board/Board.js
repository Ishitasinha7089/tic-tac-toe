import './Board.css';

import React from 'react';

import Square from '../Square/Square';

export default class Board extends React.Component{
    renderSquare(i){
        // console.log(i, this.props.squares);
        return <Square data={this.props.data} value = {this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    }
   
    render() {
        return (
            <div className="tTTBoard1518 flexbox">
                <div className="row flexbox">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row flexbox">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row flexbox">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}