import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    searchResults: []
}

export const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH:
            return {
                ...state,
                searchResults: payload
            }
        default:
            return state;
    }
}