import './Token.css';

import React from 'react';

import Avatar from '../Avatar/Avatar';

let currToken=0;

export default class Token extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            isTokenChanged: false,
            isTokenGroupChanged: false,
            currToken: 0,
            token: null,
            isFirstToken:null,
            color1: null,
            color2:null,
            style1:null,
            style2:null
        }
    }

    componentDidMount() {
        const props = this.props
        this.setState({
            token: props.token,
            isFirstToken: props.token.id === 0 ? true : false,
            color1: props.color1,
            color2: props.color2,
            style1: {
                borderColor: `var(--${props.color1})`
            },
            style2: {
                borderColor: `var(--${props.color2})`
            }
                })
    }
    render() {
        const state = this.state;
        const classname = `tTTLoginTokenWapper1518 flexbox ${state.isFirstToken? 'tTTLoginSelectedToken' : null}`
        return (
            state.token ? 
            <div onClick={(e)=>this.changeTokenGroup(e)} className={classname}>
                <div className="tTTLoginToken1518 flexbox">
                    <h4>{state.token.token1Name}</h4>
                    <Avatar onClick={this.changeToken} src={state.token.token1Img} style={state.isTokenChanged? state.style2 : state.style1} />
                    <span>{state.isTokenChanged ? 'Player 2': 'Player 1'}</span>
                </div>
                <span>VS</span>
                <div className="tTTLoginToken1518 flexbox">
                    <h4>{state.token.token2Name}</h4>
                    <Avatar onClick={this.changeToken} src={state.token.token2Img} style={state.isTokenChanged? state.style1 : state.style2} />
                    <span>{state.isTokenChanged ? 'Player 1': 'Player 2'}</span>
                </div>
            </div>
            :
            <div>Loading</div>
        );
    }


    
    changeTokenGroup = (e) =>{
        const state  =this.state
        e.stopPropagation();
        const tokens = document.getElementsByClassName('tTTLoginTokenWapper1518')
        for (let index = tokens.length-1; index >=0 ; index--) {
            const element = tokens[index];
            element.classList.remove('tTTLoginSelectedToken');
        }
        tokens[state.token.id].classList.add('tTTLoginSelectedToken')
        currToken=state.token.id

        if(state.isTokenGroupChanged){

            this.props.onTokenChange({
                token1Image:state.token.token1Img,
                style1: state.style1,
                token2Image:state.token.token2Img,
                style2:  state.style2,
            })
            return
        }
        this.props.onTokenChange({
            token1Image: state.isTokenChanged? state.token.token2Img : state.token.token1Img,
            style1:state.style1,
            token2Image: state.isTokenChanged? state.token.token1Img : state.token.token2Img,
            style2:state.style2,
        })
        
    }
    
    changeToken = (e) =>{
        const state = this.state;
        e.stopPropagation();
        
        this.setState({
            isTokenChanged: !state.isTokenChanged
        })

        if(state.isTokenGroupChanged || currToken===state.token.id){
            this.props.onTokenChange({
                token1Image: !state.isTokenChanged? state.token.token2Img : state.token.token1Img,
                style1: state.style1,
                token2Image: !state.isTokenChanged? state.token.token1Img : state.token.token2Img,
                style2: state.style2,
            })
            
            return;
        }
        
    }
}