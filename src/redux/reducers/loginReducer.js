import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    user: localStorage.getItem('user') ?
        JSON.parse(localStorage.getItem('user')) : {}
};

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN:
            if (!localStorage.getItem('token')) {
                localStorage.setItem('token', JSON.stringify(payload.token));
            }
            if (!localStorage.getItem('user')) {
                localStorage.setItem('user', JSON.stringify(payload));
            }
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
                user: {},
                isLoggedIn: false
            };

        default:
            return state;
    }
}