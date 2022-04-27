import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loginReducer } from "./loginReducer";

const reducers = combineReducers({
    users: userReducer,
    login: loginReducer
});

export default reducers;