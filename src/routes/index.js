import App from '../components/App';
import Login from '../components/Login/Login';
import User from '../components/User/User';
import SignUp from '../components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../css/toast.css';

const Routes = () => <Router>
    <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={App} />
        <Route exact path="/user" component={User} />
        <ToastContainer />
    </div>
</Router>;

export default Routes;
