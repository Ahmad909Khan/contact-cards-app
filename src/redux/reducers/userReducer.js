import { ActionTypes } from "../constants/actionTypes";

export const initialState = {
    user:
    {
        email: "user@me.com",
        password: "123",
        token: "tokenForUser1"
    },
    userCards: [
        {
            firstName: "John",
            lastName: "Doe",
            identifiedAs: "Software Developer",
            designation: "Lead Frontend Developer",
            contact_phone: "0111222333",
            contact_email: "johndoe123@domain.com",
            address_area: "221B Baker Street",
            address_city: "New York City",
            address_state: "New York",
            address_country: "USA",
            address_zipcode: "221122",
            website: "devjohndoe.com",
            isFavourite: true,
            tags: ["Software", "Developer"]
        }, {
            firstName: "Brad",
            lastName: "Hawk",
            identifiedAs: "Software Developer",
            designation: "Backend Developer",
            contact_phone: "0111222333",
            contact_email: "bradhawk456@domain.com",
            address_area: "221B Baker Street",
            address_city: "Paris",
            address_state: "France",
            address_country: "France",
            address_zipcode: "221122",
            website: "devbradhawk.uk",
            isFavourite: false,
            tags: []
        }, {
            firstName: "Sunny",
            lastName: "Dee",
            identifiedAs: "Software Developer",
            designation: "Senior Backend Developer",
            contact_phone: "0111222333",
            contact_email: "sunnydee111@domain.com",
            address_area: "221B Baker Street",
            address_city: "Chennai",
            address_state: "Tamil Nadu",
            address_country: "India",
            address_zipcode: "221122",
            website: "devsunnydee.uk",
            isFavourite: false,
            tags: []
        }, {
            firstName: "Brian",
            lastName: "Taylor",
            identifiedAs: "Software Developer",
            designation: "Lead Frontend Developer",
            contact_phone: "0111222333",
            contact_email: "briantaylor@domain.com",
            address_area: "221B Baker Street",
            address_city: "East London",
            address_state: "England",
            address_country: "United Kingdom",
            address_zipcode: "221122",
            website: "devbriantaylor.uk",
            isFavourite: true,
            tags: []
        },
    ]
}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FAVOURITE_TRIGGER:
            return {
                ...state,
                userCards: state.userCards.map(
                    (card, index) =>
                        index === payload.cardIndex
                            ? { ...card, isFavourite: payload.newFavouriteValue }
                            : card
                )
            }
        case ActionTypes.ADD_NEW_CARD:
            console.log(payload)
            return {
                ...state,
                userCards: [...state.userCards, payload]
            }

        case ActionTypes.DELETE_CARD:
            return {
                ...state,
                userCards: state.userCards.filter((item, index) => index !== payload)
            }
        
        case ActionTypes.EDIT_CARD:
            return{
                ...state,
                userCards: state.userCards.map(
                    (card, index) => index === payload.index 
                    ? payload.updatedCard : card
                )
            }

        default:
            return state;
    }
}