import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLink, faMapMarkerAlt, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import CardButtonList from './home_page_components/CardButtonList';
import { deleteCard } from '../redux/actions/userActions';
import cardStyles from '../assets/css/cardStyles.module.css';

const ContactCard = (props) => {

    const { firstName,
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
        isFavourite
    } = props.card;
    const index = props.index;
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    const [cardIsFlipped, setCardIsFlipped] = useState(false);
    const [deleteCardMode, setDeleteCardMode] = useState(false);
    const dispatch = useDispatch()

    const flipCard = (event) => {
        event.stopPropagation();
        setCardIsFlipped(!cardIsFlipped)
    }


    const deleteHandler = (cardIndex) => {
        dispatch(deleteCard(cardIndex))
    }


    const [mouseInCard, setMouseInCard] = useState(false);
    const cardButtonPosition = cardIsFlipped
        ? cardStyles.cardButtons + ' position-absolute'
        : cardStyles.cardButtonsFlipped + ' position-absolute';

    const cardButtonDisplay = mouseInCard
        ? ' d-block ' : ' d-none '

    const cardFront =
        <>
            {/* <div className={cardStyles.fontCompanyName}>My Org</div> */}
            <div className='row'>
                <div className="col-4">
                    <div
                        className={cardStyles.profileImage + ' text-center rounded-circle my-3'}
                        title={firstName + ' ' + lastName + ' Profile Image'} >
                        {initials}
                    </div>
                </div>
                <div className='col-8 my-3'>
                    <div className={cardStyles.fontFullName}>
                        {firstName + ' ' + lastName}
                    </div>
                    {/* <div className={cardStyles.fontIdentifiedAs}>
                {identifiedAs}
            </div> */}
                    <div className={cardStyles.fontWebsite + ' mt-1'}>
                        <FontAwesomeIcon className='mx-2' icon={faLink} />
                        <a
                            className='text-decoration-none text-dark'
                            href={'https://' + website}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}>
                            {website}
                        </a>
                    </div>

                    <div className={cardStyles.fontDesignation}>
                        {designation}
                    </div>
                </div>
            </div>

            <div className="clearfix">
                <a
                    className='float-start mt-3 text-decoration-none text-dark'
                    href={'tel:+' + contact_phone}
                    onClick={(event) => event.stopPropagation()}>
                    <FontAwesomeIcon icon={faPhone} className='mx-2' />
                    {contact_phone}
                </a>
                <a
                    className='float-end mt-3 text-decoration-none text-dark'
                    href={'mailto: ' + contact_email}
                    onClick={(event) => event.stopPropagation()}>
                    <FontAwesomeIcon icon={faEnvelope} className='mx-2' />
                    {contact_email}
                </a>
            </div>
        </>

    const cardBack =
        <div className='p-2'>
            <div className={cardStyles.fontAddress}>
                <div>
                    <FontAwesomeIcon className='my-2' icon={faMapMarkerAlt} size='lg' />
                </div>
                <div>{address_area}</div>
                <div>{address_city}</div>
                <div>{address_state}</div>
                <div>{address_country}</div>
                <div>
                    <FontAwesomeIcon className='mx-2' icon={faThumbTack} />
                    {address_zipcode}</div>
            </div>
            <div className={cardStyles.fontWebsite + ' mt-1'}>
                <FontAwesomeIcon className='mx-2' icon={faLink} />
                <a
                    className='text-decoration-none text-dark'
                    href={'https://www.' + website}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}>
                    {website}
                </a>
            </div>
        </div>

    return (
        <div>
            <div
                className={cardStyles.card + ' px-3 py-2 m-3'}
                key={index}
                onMouseEnter={() => setMouseInCard(true)}
                onMouseLeave={() => setMouseInCard(false)}>
                {!deleteCardMode ? <>
                    <div className={cardButtonPosition + cardButtonDisplay}>
                        <CardButtonList
                            index={index}
                            card={props.card}
                            isFavourite={isFavourite}
                            flipCard={flipCard}
                            setDeleteCardMode={setDeleteCardMode}
                        />
                    </div>

                    {!cardIsFlipped ? cardFront : cardBack}
                </>
                    : <div className="text-center h4 m-0 p-0 my-5">
                        Do you want to delete this card?
                        <div className='my-1'>
                            <button
                                className="btn btn-light mx-2"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    deleteHandler(index)
                                    setDeleteCardMode(false)
                                }}>Yes</button>
                            <button
                                className="btn btn-light mx-2"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    setDeleteCardMode(false)
                                }}>No</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ContactCard