import React from 'react';
import { useSelector } from "react-redux";
import ContactCard from '../CardComponents/ContactCard';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const FavouriteCardsComponent = () => {

    const cardsCollection = useSelector((state) => state.users.userCards);

    return (
        <div>
            {cardsCollection.find(card => card.isFavourite === true)
                ? <div
                    className={"px-sm-3 py-3 " + homePageStyles.cardsParentDiv}>
                    {cardsCollection.map((card) =>
                    (card.isFavourite &&
                        <ContactCard card={card} key={card.uuid} />
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