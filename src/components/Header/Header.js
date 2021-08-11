import './Header.css';

import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from '../../ui/Button/Button';

const Header = () =>{
    const history = useHistory()
    const logout = () =>{
        history.goBack()
        localStorage.removeItem('player1')
        localStorage.removeItem('player2')
        
    }
    return (
        <div className="tTTDashboardHeader1518 flexbox">
            <h1>
                <span>TIC</span>
                <span>TAC</span>
                <span>TOE</span>
            </h1>
            <Button text="logout" disabled={false} onClick={logout} />
        </div>
    );
}

export default Header