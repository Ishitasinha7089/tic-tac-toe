import './Dashboard.css';

import React from 'react';

import { RotateCcw } from 'react-feather';

import Avatar from '../../ui/Avatar/Avatar';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';
import { getStatus } from '../../utils/GetStatus';
import { getWinner } from '../../utils/GetWinner';
import Board from '../Board/Board';
import Header from '../Header/Header';

export default class Dashboard extends React.Component{
    state = {
        history : [
           { squares: Array(9).fill(null)}
        ],
        stepNo: 0,
        xIsNext: true, 
        data:null,
        player1Name: "",
        player2Name: "",
        player1Wins:0,
        player2Wins:0,
        player1Looses:0,
        player2Looses:0,
        token1:"token1",
        token2:"token2",
        undoMovesChances:2,
        modalData:null,
        openModal:false,
        winner: null,
        status: "Next player is: ",
        statusSpan:"",
        squares: ""
    }
    componentDidMount() {
        const data = this.props.location.state.data;
        this.setState({
            data: data,
            player1Name: localStorage.getItem('player1'),
            player2Name: localStorage.getItem('player2'),
            statusSpan: localStorage.getItem('player1')
        })
        if(data.style2.borderColor.includes('blue')){
            this.setState({
                token1: "token2",
                token2: "token1"
            })
        }

    }

    componentDidUpdate(prevProps, prevState) {
        const state = this.state
        const history = state.history;
        const current = history[state.stepNo];
        const winner = getWinner(current.squares)
        const [status, statusSpan, winnerStyle] = getStatus(winner, state.token1, state.player1Name, state.player2Name, state.data, state.xIsNext);

        if(statusSpan!==prevState.statusSpan ){
            this.setState({
                statusSpan: statusSpan
            })   
        }

        if(status!==prevState.status){
            this.setState({
                status: status,
                winner:winner
            })            
        }
        if(winner){
            if(state.winner!==prevState.winner){
                this.setState({
                    winner:winner,
                    winnerStyle: winnerStyle
                })
                if(winner===state.token1){
                    const winnerData = {
                        image: state.data.token1Image,
                        playerName:state.statusSpan,
                        style:state.data.style1,
                        winnerStyle: winnerStyle
                    }
                    this.setState({
                        player1Wins: state.player1Wins+1,
                        player2Looses: state.player2Looses+1,
                        modalData:winnerData
                    })
                    setTimeout(() => {
                        this.setState({
                            openModal:true,
                            stepNo:0,
                            winnerStyle: null,
                            xIsNext:true
                        })
                    }, 800);

                } else{
                    const winnerData = {
                        image: state.data.token2Image,
                        playerName:state.statusSpan,
                        style:state.data.style2,
                        winnerStyle: winnerStyle
                    }
                    this.setState({
                        player2Wins: state.player2Wins+1,
                        player1Looses: state.player1Looses+1,
                        modalData: winnerData
                    })
                    setTimeout(() => {
                        this.setState({
                            openModal:true,
                            stepNo:0,
                            winnerStyle:null,
                            xIsNext:true
                        })

                    }, 800);
                    
                }
                
                
            }
        }
        if(state.stepNo===9 && !winner){
            const drawData = {
                label:"Match is draw"
            }
            setTimeout(() => {
                this.setState({
                    stepNo:0,
                    openModal:true,
                    modalData: null,
                    xIsNext:true
                })
                this.setState({
                    modalData: drawData,
                })
            }, 800);
        }
    }
    
    render() {
        const state = this.state
        const data = this.state.data
        const history = state.history;
        const current = history[state.stepNo];
        return (
            <div className="tTTDashboard1518 flexbox">
                
                <Header />
                <div className="tTTDashboardBody1518 flexbox">
                    { data ? 
                        this.getPlayer(
                            data.token1Image,
                            data.style1,
                            state.player1Name,
                            state.player1Wins,
                            state.player1Looses)
                        :
                        null
                    }

                    { this.getBoard(
                        current.squares,
                        data, state.status,
                        state.winnerStyle,
                        state.statusSpan,
                        state.undoMovesChances,
                        state.stepNo)}


                    { data ? 
                        this.getPlayer(
                            data.token2Image,
                            data.style2,
                            state.player2Name, 
                            state.player2Wins,
                            state.player2Looses)
                        :
                        null
                    }
                    
                    
                </div>
                { state.modalData?
                   <Modal
                      closeModal={this.closeModal}
                      open={state.openModal}
                      modalData={state.modalData}
                    />
                : null}
                
            </div>
        );
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNo + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const winner = getWinner(squares);
        if(winner || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? this.state.token1 : this.state.token2
        console.log(document.getElementsByClassName('tTTBoard1518')[0]);
        this.setState({
            history: history.concat({
                squares: squares
            }),
            stepNo: history.length,
            xIsNext: !this.state.xIsNext
        })
        console.log(squares[i], "HASXBNJA");
    }

    undoMove = ()=>{
        if(this.state.stepNo===0){
            return
        }
        if(this.state.undoMovesChances!==0){
            this.setState({
                stepNo: this.state.stepNo-1,
                xIsNext: !this.state.xIsNext,
                undoMovesChances: this.state.undoMovesChances-1
            })
            return;
        }
        
    }
    restartGame = () => {
        this.setState({
            stepNo: 0,
            xIsNext: true,
            undoMovesChances: 2
        })
    
    }

    

  

    getPlayer(image, style, playerName, wins, looses) {
        return (
            <div className="tTTDashboardPlayer1518 flexbox">
                <Avatar src={image} style={style} onClick={null}/>
                <h1>{playerName}</h1>
                <p>WINS: {wins}</p>
                <p>LOSSES: {looses}</p>
            </div>
        );
    }


    getBoard(squares, data, status, winnerStyle, statusSpan, undoMoves, stepNo){
        const UNDO_LEFT = "undo"+ (undoMoves>1? "s": "" )+" left"
        return(
            <div className="tTTBoardAndHistory1518 flexbox">

                <Board squares={squares} onClick={(i) =>this.handleClick(i)} data={data} stepNo={stepNo} />

                <div className="tTTStatusAndUndo1518 flexbox">
                    <h3>{status}<span style={winnerStyle}>{statusSpan}</span></h3>
                    <div className="tTTUndoMove1518 flexbox">
                        <RotateCcw className={` tTTTUndo1518 ${undoMoves===0 || stepNo===0 ? "tTTUndoDisabled1518" : null}`} onClick={this.undoMove} />
                        <span>{undoMoves} {UNDO_LEFT}</span>
                    </div>
                </div>

                <Button disabled={stepNo===0} text="Restart game" onClick={this.restartGame}/>
                {/* {moves} */}
                
            </div>
        );
    }

    closeModal = () =>{
        this.setState({
            openModal:false
        })
    }
}