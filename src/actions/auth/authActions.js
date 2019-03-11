import axios from "axios";

import * as type from './actionTypes';

const headers = {
    "Content-Type": "application/json"
};

export const fetchLogin = (data) => (dispatch) => axios.post('https://store-challenge-3-api.herokuapp.com/api/v1/auth/login', data, { headers }).
    then((response) => {
        dispatch({
            type: type.FETCH_AUTH_SUCCESS,
            message: response.data
        });
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('admin', response.data.admin)

    }).
    catch((error) => {
        dispatch({
            type: type.FETCH_AUTH_FAILURE,
            error: error.response
        });

    })

const login_headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('token')}`
};

export const fetchSignup = (data) => (dispatch) => axios.post('https://store-challenge-3-api.herokuapp.com/api/v1/auth/signup', data, { headers: login_headers }).
    then((response) => {

        dispatch({
            type: type.FETCH_AUTH_SUCCESS,
            message: response.data
        });

    }).
    catch((error) => {
        dispatch({
            type: type.FETCH_AUTH_FAILURE,
            error: error.response
        });

    })
