import React from 'react';
import { useSelector } from "react-redux";
import ContactCard from '../ContactCard';

const AllCardsComponent = () => {

    const cardsCollection = useSelector((state) => state.users.userCards);

    return (
        <div>
            <div className="m-3 d-flex flex-row flex-wrap">
                {cardsCollection !== 0 ?
                    cardsCollection.map((card, index) =>
                        <ContactCard card={card} index={index} key={index} />
                    )
                    : <div className="text-center h3">User has no cards</div>
                }
            </div>
        </div>
    )
}

export default AllCardsComponent