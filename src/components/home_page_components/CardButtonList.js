import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPencil, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faTrashCan as farTrashCan } from '@fortawesome/free-regular-svg-icons';
import cardStyles from '../../assets/css/cardStyles.module.css';
import { favouriteTrigger } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const CardButtonList = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let editing = false;

    const { index, card, isFavourite, flipCard, setDeleteCardMode } = props;

    const favouriteTriggerHandler = (cardIndex, newFavouriteValue) => {
        dispatch(favouriteTrigger(cardIndex, newFavouriteValue))
    }
    const editCardHandler = (cardIndex, cardToEdit) => {
        editing = true
        navigate('/home-page/update-card', {
            state: {
                index: cardIndex,
                card: cardToEdit,
                editing: editing,
            }
        })
    }

    return (
        <ul className="list-unstyled mx-2">
            <li>
                <FontAwesomeIcon
                    className='my-1'
                    size='lg'
                    icon={faRepeat}
                    onClick={flipCard}
                />
            </li>
            <li>
                <FontAwesomeIcon
                    className={cardStyles.colorPink + ' my-1'}
                    size='lg'
                    onClick={(event) => {
                        event.stopPropagation();
                        favouriteTriggerHandler(index, !isFavourite)
                    }}
                    icon={isFavourite ? faHeart : farHeart}
                    title={isFavourite
                        ? 'Click to remove from favourites'
                        : 'Click to add to favourites'}
                />
            </li>
            <li>
                <FontAwesomeIcon
                    className='text-warning my-1'
                    size='lg'
                    onClick={(event) => {
                        event.stopPropagation();
                        editCardHandler(index, card);
                    }}
                    icon={faPencil}
                    title='Flip the card' />
            </li>
            <li>
                <FontAwesomeIcon className='text-dark my-1'
                    size='lg'
                    icon={farTrashCan}
                    title='Delete this card?'
                    onClick={(event) => {
                        event.stopPropagation();
                        setDeleteCardMode(true);
                    }} />
            </li>
        </ul>
    )
}

export default CardButtonList