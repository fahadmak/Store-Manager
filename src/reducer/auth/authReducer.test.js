import authReducer from './authReducer';

const initialState = {
    success: null,
    error: null,
    message: null
};

describe('authReducer', () => {
    it('should create a success rsponse message when  passed FETCH_AUTH_SUCCESS', () => {
        const successMessage = 'Go to email to verify account';
        const action = {
            type: "FETCH_AUTH_SUCCESS",
            message: "Go to email to verify account",
        };
        const newState = authReducer(initialState, action)
        expect(newState.message).toEqual(successMessage)
    })
    it('should return error when  passed FETCH_AUTH_FAILURE', () => {
        const errorMessage = { error: 'user name already exists' };
        const action = {
            type: "FETCH_AUTH_FAILURE",
            error: "user name already exists",
        };
        const newState = authReducer(initialState, action)
        expect(newState.error).toEqual(errorMessage.error)
        expect(newState.success).toBe(false)
    })
    it('should remain intial state if no action is passed', () => {
        expect(authReducer(undefined, {})).toEqual(initialState)
    })

})
