import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import ProtectedRoute from './utils/ProtectedRoute';

export default class App extends React.Component{
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Login} /> 
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Redirect from="*" to="/login" />
          </Switch>
        </BrowserRouter>
    );
  }
}