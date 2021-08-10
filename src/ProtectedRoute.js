import {
  Redirect,
  Route,
} from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...rest}){
    const playersRegistered = localStorage.getItem('player1') && localStorage.getItem('player2')
    return (
        <Route
            {...rest}
            render={props =>{
                return playersRegistered ? <Component {...props} /> : 
                <Redirect to="/login" />
            }}
        >
        </Route>
    );
}