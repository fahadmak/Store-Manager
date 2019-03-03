import * as type from '../../actions/auth/actionTypes';

const initialState = {
    success: null,
    error: null,
    message: null
};

export default function authReducer (state = initialState, action) {

    switch (action.type) {

        case type.FETCH_AUTH_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: true,
                error: ''
            };
        case type.FETCH_AUTH_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false
            };

        default:
            return state;

}

}
