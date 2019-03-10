/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import store from './store';
import "./css/toast.css";

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
);
