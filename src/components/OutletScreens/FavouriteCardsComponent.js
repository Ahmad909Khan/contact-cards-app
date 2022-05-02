import React from 'react';
import { useSelector } from "react-redux";
import ContactCard from '../CardComponents/ContactCard';

const FavouriteCardsComponent = () => {

    const cardsCollection = useSelector((state) => state.users.userCards);

    return (
        <div>
            {cardsCollection.find(card => card.isFavourite === true)
                ? <div
                    className="m-3 d-flex flex-row flex-wrap">
                    {cardsCollection.map((card, index) =>
                    (card.isFavourite &&
                        <ContactCard
                            card={card}
                            index={index}
                            key={index}
                        />
                    )
                    )}
                </div>
                : <div className="text-center h3">
                    User has no cards pinned.
                </div>
            }
        </div>
    )
}


export default FavouriteCardsComponent