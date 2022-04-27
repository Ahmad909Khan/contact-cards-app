import React from 'react';
import { useDispatch } from 'react-redux';
import { favouriteTrigger } from '../../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import cardStyles from '../../assets/css/cardStyles.module.css';

const FavouriteButton = (props) => {

    const {cardIndex, isFavourite} = props;

    const dispatch = useDispatch();
    
    const favouriteTriggerHandler = (cardIndex, newFavouriteValue) => {
        dispatch(favouriteTrigger(cardIndex, newFavouriteValue))
    }

    return (
        <FontAwesomeIcon
            className={cardStyles.colorPink + ' my-1 ' + cardStyles.cursorPointer}
            size='lg'
            onClick={(event) => {
                event.stopPropagation();
                favouriteTriggerHandler(cardIndex, !isFavourite)
            }}
            icon={isFavourite ? faHeart : farHeart}
            title={isFavourite
                ? 'Click to remove from favourites'
                : 'Click to add to favourites'}
        />
    )
}

export default FavouriteButton