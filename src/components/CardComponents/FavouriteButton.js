import React from 'react';
import { useDispatch } from 'react-redux';
import { favouriteTrigger } from '../../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

const FavouriteButton = (props) => {

    const { cardIndex, isFavourite } = props;

    const dispatch = useDispatch();

    const favouriteTriggerHandler = (cardIndex, newFavouriteValue) => {
        dispatch(favouriteTrigger(cardIndex, newFavouriteValue))
    }

    return (
        <FontAwesomeIcon
            className={'my-1 cursorPointer '
                + (isFavourite &&
                    ' border border-3 border-top-0 border-start-0 border-end-0 border-dark')}
            size='lg'
            onClick={(event) => {
                event.stopPropagation();
                favouriteTriggerHandler(cardIndex, !isFavourite)
            }}
            icon={faThumbtack}
            transform={isFavourite ? { rotate: 0 } : { rotate: 45}}
            title={isFavourite
                ? 'Click to un-pin'
                : 'Click to pin this user'}
        />
    )
}

export default FavouriteButton