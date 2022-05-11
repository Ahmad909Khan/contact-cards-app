import React from 'react';
import { useSelector } from "react-redux";
import ContactCard from '../CardComponents/ContactCard';
import  homePageStyles from '../../assets/css/homePageStyles.module.css';

const AllCardsComponent = () => {

    const cardsCollection = useSelector((state) => state.users.userCards);
    const { searchTerm, searchResults } = useSelector((state) => state.users);

    return (
        <div id='allCards' className="">
            <div className={"px-sm-3 py-3 " + homePageStyles.cardsParentDiv}>
                {searchTerm
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