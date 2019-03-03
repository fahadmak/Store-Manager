import axios from "axios";

import * as type from './actionTypes';

const headers = {
    "Content-Type": "application/json",
};

export const fetchLogin = (data) => (dispatch) =>
    axios.post('https://store-challenge-3-api.herokuapp.com/api/v1/auth/login', data, { headers })
        .then((response) => {
            dispatch({
                type: type.FETCH_AUTH_SUCCESS,
                message: response.data
            });
        }).catch(error => {
            dispatch({
                type: type.FETCH_AUTH_FAILURE,
                error: error.response,
            });
        })
