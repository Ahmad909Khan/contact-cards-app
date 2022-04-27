import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/actions/userActions';
import EditButton from '../CardComponents/EditButton';
import TagsList from '../CardComponents/TagsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan as farTrashCan } from '@fortawesome/free-regular-svg-icons';
import cardStyles from '../../assets/css/cardStyles.module.css';

const UserRow = (props) => {
    const {cursorPointer} = cardStyles;
    const { card, index } = props;
    const {
        firstName,
        lastName,
        designation,
        contact_phone,
        contact_email,
        address_area,
        address_city,
        address_state,
        address_country,
        address_zipcode,
        website,
        tags
    } = card;

    const [deleteUserMode, setDeleteUserMode] = useState(false);
    const dispatch = useDispatch();

    const deleteHandler = (cardIndex) => {
        dispatch(deleteCard(cardIndex));
    }

    const deleteAction = (
        <div className="">
            Delete?
            <div className='text-center'>
                <FontAwesomeIcon
                    className="btn btn-sm btn-outline-secondary btn-secondary p-2 mx-1 text-white"
                    onClick={() => {
                        deleteHandler(index)
                        setDeleteUserMode(false)
                    }}
                    icon={faCheck}
                    size='sm' />
                <FontAwesomeIcon
                    className="btn btn-sm btn-outline-secondary btn-secondary p-2 mx-1 text-white"
                    onClick={() => {
                        setDeleteUserMode(false)
                    }}
                    icon={faTimes}
                    size='sm' />
            </div>
        </div>)

    const deleteIcon =
        <FontAwesomeIcon className={cursorPointer + ' text-dark my-1'}
            size='lg'
            icon={farTrashCan}
            title='Delete this card?'
            onClick={() => {
                setDeleteUserMode(true);
            }} />

    return (
        <tr key={index} onBlur={() => setDeleteUserMode(false)}>
            <th scope='row' className='text-center'>{index + 1}</th>
            <td>
                {firstName + ' ' + lastName}
            </td>
            <td>{designation}</td>
            <td className='text-center'>
                <a
                    className='text-decoration-none'
                    href={'tel:+' + contact_phone}>
                    {contact_phone}
                </a>
            </td>
            <td>
                <a
                    className='text-decoration-none'
                    href={'mailto: ' + contact_email}>
                    {contact_email}
                </a>
            </td>
            <td>
                <div>
                    {
                        address_area + ', '
                        + address_city + ', '
                        + address_state + ', '
                        + address_country
                    }
                </div>
                Zip Code: {address_zipcode}
            </td>
            <td>
                <a href={'https://' + website} rel="noreferrer" target='_blank'>
                    {website}
                </a>
            </td>
            <td>
                <TagsList tags={tags} />
            </td>
            <td className='text-center py-3'>
                <EditButton cardIndex={index} cardToEdit={card} />
            </td>
            <td className='text-center py-3'>
                {deleteUserMode
                    ? deleteAction
                    : deleteIcon
                }
            </td>
        </tr>
    )
}

export default UserRow