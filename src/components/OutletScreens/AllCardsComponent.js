import React from 'react';
import { useSelector } from "react-redux";
import ContactCard from '../CardComponents/ContactCard';

const AllCardsComponent = () => {

    const cardsCollection = useSelector((state) => state.users.userCards);
    const { searchTerm, searchResults } = useSelector((state) => state.users);

    return (
        <div>
            <div className="m-3 d-flex flex-row flex-wrap">
                {
                    searchTerm
                        ? (searchResults.length > 0
                            ? searchResults.map((card, index) =>
                                <ContactCard card={card} index={index} key={index} />
                            )
                            : <div className="text-center h3">No cards found</div>)
                        : (cardsCollection.length > 0 ?
                            cardsCollection.map((card, index) =>
                                <ContactCard card={card} index={index} key={index} />
                            )
                            : <div className="text-center h3">User has no cards</div>)
                }
            </div>
        </div>
    )
}

export default AllCardsComponent