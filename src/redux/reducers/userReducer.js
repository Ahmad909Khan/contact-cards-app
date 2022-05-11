import { ActionTypes } from "../constants/actionTypes";

export const initialState = {
    user:
    {
        name: 'John Doe',
        email: "user@me.com",
        password: "123",
        token: "tokenForUser1"
    },
    userCards: [
        {
            uuid: '1',
            firstName: "John",
            lastName: "Doe",
            imageURL: '',
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
            tags: ['Software', 'Developer', 'React']
        }, {
            uuid: '2',
            firstName: "Brad",
            lastName: "Hawk",
            imageURL: 'https://picsum.photos/100',
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
            tags: ['Java', 'C++', 'Python']
        }, {
            uuid: '3',
            firstName: "Sunny",
            lastName: "Dee",
            imageURL: 'https://picsum.photos/100',
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
            tags: ['Python', 'Java', 'React']
        }, {
            uuid: '4',
            firstName: "Brian",
            lastName: "Taylor",
            imageURL: '',
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
            tags: ['Angular', 'React']
        },
    ],
    searchTerm: '',
    searchResults: []
}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOAD_USERS:
            return {
                ...state,
                userCards: payload === undefined ? [] : payload
            }
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
            return {
                ...state,
                userCards: state.userCards.map(
                    (card, index) => index === payload.index
                        ? payload.updatedCard : card
                )
            }

        case ActionTypes.SEARCH:
            const { searchTerm, category } = payload
            if (category === 'tags') {
                const searchResults = state.userCards.filter(card => {
                    return card['tags'].join(' ').toLowerCase().includes(searchTerm.toLowerCase())
                })
                return {
                    ...state,
                    searchTerm: searchTerm,
                    searchResults: searchResults
                }
            }
            if (category === 'name') {
                const searchResults = state.userCards.filter(card => {
                    return card['firstName'].toLowerCase().includes(searchTerm.toLowerCase())
                        || card['lastName'].toLowerCase().includes(searchTerm.toLowerCase())
                })
                return {
                    ...state,
                    searchTerm: searchTerm,
                    searchResults: searchResults
                }
            }
            if (category !== '') {
                const searchResults = state.userCards.filter(card => {
                    return card[category].toLowerCase().includes(searchTerm.toLowerCase())
                })
                return {
                    ...state,
                    searchTerm: searchTerm,
                    searchResults: searchResults
                }
            }
            const searchResults = state.userCards.filter(card => {
                return Object.values(card)
                    .join(' ')
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            })
            return {
                ...state,
                searchTerm: searchTerm,
                searchResults: searchResults
            }

        default:
            return state;
    }
}