import './Login.css';

import React from 'react';

import { withRouter } from 'react-router-dom';

import x from '../../assets/images/delete.png';
import naruto from '../../assets/images/naruto.png';
import o from '../../assets/images/o.png';
import sasuke from '../../assets/images/sasuke.jpg';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import Token from '../../ui/Token/Token';

const tokens = [
    {
        id:0,
        token1Name:"X",
        token1Img: x,
        token2Name:"O",
        token2Img: o,
    },
    {
        id:1,
        token1Name:"Naruto",
        token1Img: naruto,
        token2Name:"Sasuke",
        token2Img: sasuke,
    }
];

class Login extends React.Component{
    state= {
        tokenId: 0,
        player1Token:"1",
        player2Token:"2",
        player1Name: "",
        player2Name: "",
        data: null
    }
    componentDidMount() {
        this.setState({
            data: {
                token1Image: x,
                style1: {borderColor: 'var(--blue)'},
                token2Image: o,
                style2: {borderColor: 'var(--peach)'}
            }
        })
    }
    render() {
        const isDisbaled = this.state.player1Name==="" || this.state.player2Name==="";
        return (
            <div className="tTTLoginWrapper1518 flexbox">
                <div className="tTTLoginLeft1518 flexbox">
                    <div className="tTTLoginBackImage1518"></div>
                    <div className="tTTLoginHeading1518 flexbox">
                        <span>TIC</span>
                        <span>TAC</span>
                        <span>TOE</span>
                    </div>
                </div>
                <div className="tTTLoginRight1518 flexbox">
                    <h2>Login</h2>
                    <Input label="Player 1" color="blue" onChange={this.handleChange1}/>
                    <Input label="Player 2" color="peach" onChange={this.handleChange2}/>
                    <div className="tTTLoginTokenList1518 flexbox">
                        {this.renderTokens()}
                    </div>
                    <Button text="start game" disabled={isDisbaled} onClick={this.startGame}/>
                </div>
            </div>
        );
    }

    renderTokens = () =>{
        return (
            tokens.map(ele =>{
                return (
                    <Token key={`${ele.token1Name}_${ele.token2Name}`}
                           token={ele}
                           color1="blue"
                           color2="peach"
                           onTokenChange={this.handleTokenChange}
                    />
                );
            })
        );
    }

    handleChange1 = (val) =>{
        this.setState({
            player1Name: val
        })
    }
    handleChange2 = (val) =>{
        this.setState({
            player2Name: val
        })
    }
    handleTokenChange = (data) =>{
        this.setState({
            data:data
        })
    }
    startGame =() =>{
        localStorage.setItem('player1', this.state.player1Name)
        localStorage.setItem('player2', this.state.player2Name)
        this.props.history.push({
            pathname: "/dashboard",
            state: {
                data:this.state.data
            }
        })
    }
}

export default withRouter(Login);