import React from 'react';
import FavouriteButton from './FavouriteButton';
import EditButton from './EditButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan as farTrashCan } from '@fortawesome/free-regular-svg-icons';
import cardStyles from '../../assets/css/cardStyles.module.css';
// import ShareButton from './ShareButton';

const CardButtonList = (props) => {

    const { index, card, isFavourite, flipCard, setDeleteCardMode } = props;

    return (
        <ul className="list-unstyled mx-2">
            <li>
                <FontAwesomeIcon
                    className={cardStyles.cursorPointer + ' my-1'}
                    size='lg'
                    icon={faRepeat}
                    onClick={flipCard}
                    title='Flip this card'
                />
            </li>
            <li>
                <FavouriteButton cardIndex={index} isFavourite={isFavourite} />
            </li>
            <li>
                <EditButton cardIndex={index} cardToEdit={card} />
            </li>
            <li>
                <FontAwesomeIcon className={'cursorPointer text-dark my-1'}
                    size='lg'
                    icon={farTrashCan}
                    title='Delete this card'
                    onClick={(event) => {
                        event.stopPropagation();
                        setDeleteCardMode(true);
                    }} />
            </li>
            {/* <li>
                <ShareButton imgURL={card.imgURL} />
            </li> */}
        </ul>
    )
}

export default CardButtonList