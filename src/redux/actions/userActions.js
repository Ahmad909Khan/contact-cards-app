import { ActionTypes } from "../constants/actionTypes";
import { initialState } from "../reducers/userReducer";

const user = initialState.user;
const cardsCollection = initialState.userCards;

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

export const logout = (nullUser) => {
    return {
        type: ActionTypes.LOGOUT,
        payload: nullUser
    }
}

export const favouriteTrigger = (cardIndex, newFavouriteValue) => {
    return {
        type: ActionTypes.FAVOURITE_TRIGGER,
        payload: { cardIndex, newFavouriteValue }
    }
}

export const searchOperation = (searchTerm, category) => {
    if (category === 'name') {
        const searchResults = cardsCollection.filter(card => {
            return card['firstName'].toLowerCase().includes(searchTerm.toLowerCase())
                || card['lastName'].toLowerCase().includes(searchTerm.toLowerCase())
        })
        return {
            type: ActionTypes.SEARCH,
            payload: searchResults
        }
    }
    if (category !== '') {
        const searchResults = cardsCollection.filter(card => {
            return card[category].toLowerCase().includes(searchTerm.toLowerCase())
        })
        return {
            type: ActionTypes.SEARCH,
            payload: searchResults
        }
    }
    const searchResults = cardsCollection.filter(card => {
        return Object.values(card)
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    })
    return {
        type: ActionTypes.SEARCH,
        payload: searchResults
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
        payload: { index, updatedCard}
    }
}