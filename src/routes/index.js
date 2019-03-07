import App from '../components/App';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const Routes = () => <Router>
    <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={App} />
    </div>
</Router>;

export default Routes;
