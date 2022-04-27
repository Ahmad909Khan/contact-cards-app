import { ActionTypes } from "../constants/actionTypes";
import { initialState } from "../reducers/userReducer";

const user = initialState.user;

export const login = (userCredentials) => {

    if (userCredentials.email === user.email && userCredentials.password === user.password) {
        return {
            type: ActionTypes.LOGIN,
            payload: user
        }
    }
    else
        return {
            type: ActionTypes.NOT_AUTH
        }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    }
}

export const loadUsers = (usersData) => {
    return {
        type: ActionTypes.LOAD_USERS,
        payload: usersData
    }
}

export const favouriteTrigger = (cardIndex, newFavouriteValue) => {
    return {
        type: ActionTypes.FAVOURITE_TRIGGER,
        payload: { cardIndex, newFavouriteValue }
    }
}

export const searchOperation = (searchTerm, category) => {
    return {
        type: ActionTypes.SEARCH,
        payload: { searchTerm, category }
    }
}

export const addNewCard = (newCard) => {
    return {
        type: ActionTypes.ADD_NEW_CARD,
        payload: newCard
    }
}

export const deleteCard = (cardIndex) => {
    return {
        type: ActionTypes.DELETE_CARD,
        payload: cardIndex
    }
}

export const replaceEditedCard = (index, updatedCard) => {
    return {
        type: ActionTypes.EDIT_CARD,
        payload: { index, updatedCard }
    }
}