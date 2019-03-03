import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';

const Routes = () => <Router>
        <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </div>
    </Router>;

export default Routes;
