import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const EditButton = (props) => {

    const { uuid, cardToEdit } = props;
    const navigate = useNavigate();
    let editing = false;

    const editCardHandler = (uuid, cardToEdit) => {
        editing = true
        navigate('/update-card', {
            state: {
                uuid: uuid,
                card: cardToEdit,
                editing: editing,
            }
        })
    }

    return (
        <FontAwesomeIcon
            className={'cursorPointer my-1'}
            size='lg'
            onClick={(event) => {
                event.stopPropagation();
                editCardHandler(uuid, cardToEdit);
            }}
            icon={faPencil}
            title='Edit this card' />
    )
}

export default EditButton