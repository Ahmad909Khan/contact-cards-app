import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loginReducer } from "./loginReducer";
import { searchReducer } from './searchReducer';

const reducers = combineReducers({
    users: userReducer,
    login: loginReducer,
    search: searchReducer
});

export default reducers;