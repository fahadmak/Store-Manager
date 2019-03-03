import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/toast.css';
import Login from '../components/Login/Login';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/login" component={Login} />
        </div>
    </Router>
);

export default Routes; 