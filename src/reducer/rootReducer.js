import { combineReducers } from 'redux';
import authReducer from '../reducer/auth/authReducer'

export default combineReducers({ auth: authReducer });