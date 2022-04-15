import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    user: localStorage.getItem('token') ? 
    localStorage.getItem('user') : {}
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', payload);
            return {
                ...state,
                isLoggedIn: true,
                user: payload
            };

        // case ActionTypes.NOT_AUTH:
        //  alert('The user is not authorized');
        //     return {
        //         ...state,
        //     };

        case ActionTypes.LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                user: payload,
                isLoggedIn: false
            };

        default:
            return state;
    }
}