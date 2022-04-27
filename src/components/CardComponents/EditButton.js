import React from 'react'
import { useNavigate } from 'react-router-dom';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cardStyles from '../../assets/css/cardStyles.module.css';

const EditButton = (props) => {

    const {cardIndex, cardToEdit} = props;
    const navigate = useNavigate();
    let editing = false;

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
    <FontAwesomeIcon
                    className={cardStyles.cursorPointer + ' text-warning my-1'}
                    size='lg'
                    onClick={(event) => {
                        event.stopPropagation();
                        editCardHandler(cardIndex, cardToEdit);
                    }}
                    icon={faPencil}
                    title='Edit this card' />
  )
}

export default EditButton