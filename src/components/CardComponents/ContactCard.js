import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/actions/userActions';
import CardButtonList from './CardButtonList';
import TagsList from './TagsList';
import CardModal from './CardModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faLink,
    faMapMarkerAlt,
    faThumbTack,
    faTags
} from '@fortawesome/free-solid-svg-icons';
import cardStyles from '../../assets/css/cardStyles.module.css';

const ContactCard = (props) => {

    const {
        firstName,
        lastName,
        imageURL,
        designation,
        contact_phone,
        contact_email,
        address_area,
        address_city,
        address_state,
        address_country,
        address_zipcode,
        website,
        isFavourite,
        tags
    } = props.card;

    const {
        cardCSS,
        profileImage,
        fontFullName,
        fontWebsite,
        fontDesignation,
        fontAddress,
        cardButtonsFlipped
    } = cardStyles;

    const index = props.index;
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    const dispatch = useDispatch();
    const [cardIsFlipped, setCardIsFlipped] = useState(false);
    const [deleteCardMode, setDeleteCardMode] = useState(false);
    const [showCardMode, setShowCardMode] = useState(false);

    const flipCard = (event) => {
        event.stopPropagation();
        setCardIsFlipped(!cardIsFlipped)
    }

    const deleteHandler = (cardIndex) => {
        dispatch(deleteCard(cardIndex))
    }


    const [mouseInCard, setMouseInCard] = useState(false);
    const cardButtonPosition = cardIsFlipped
        ? ' position-absolute'
        : cardButtonsFlipped + ' position-absolute';

    const cardButtonDisplay = mouseInCard
        ? ' d-block ' : ' d-none ';

    const cardFront =
        <>
            {/* <div className={fontCompanyName}>My Org</div> */}
            <div className='row m-0'>
                <div onClick={() => setShowCardMode(true)} className="col-4">
                    {imageURL ?
                        < img
                            className={profileImage + ' text-center rounded-circle my-3'}
                            src={imageURL}
                            alt={firstName + '_' + lastName + '_Profile_Image'}
                            title={firstName + ' ' + lastName + ' Profile Image'} />
                        : <div
                            className={profileImage + ' text-center rounded-circle my-3'}
                            title={firstName + ' ' + lastName + ' Profile Image'} >
                            {initials}
                        </div>
                    }
                </div>
                <div className='col-8 my-3'>
                    <div className={fontFullName}>
                        {firstName + ' ' + lastName}
                    </div>
                    {/* <div className={fontIdentifiedAs}>
                        {identifiedAs}
                    </div> */}
                    <div className={fontWebsite + ' mt-1'}>
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

                    <div className={fontDesignation}>
                        {designation}
                    </div>
                    <div>
                        <FontAwesomeIcon
                            className='me-2'
                            icon={faTags}
                            flip='horizontal' />
                        <TagsList tags={tags} />
                    </div>
                </div>
            </div>

            <div className="clearfix">
                <a
                    className='float-start mt-3 text-decoration-none text-dark'
                    href={'tel:+' + contact_phone}
                    onClick={(event) => event.stopPropagation()}>
                    <FontAwesomeIcon icon={faPhone} className='mx-1' />
                    {contact_phone}
                </a>
                <a
                    className='float-end mt-3 text-decoration-none text-dark ms-2'
                    href={'mailto: ' + contact_email}
                    onClick={(event) => event.stopPropagation()}>
                    <FontAwesomeIcon icon={faEnvelope} className='mx-1' />
                    {contact_email}
                </a>
            </div>
        </>

    const cardBack =
        <div className='p-sm-2 px-2 py-1'>
            <div className={fontAddress}>
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
            <div className={fontWebsite + ' mt-1'}>
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
        <>
            {showCardMode &&
                <CardModal card={props.card} setShowCardMode={setShowCardMode} />}
            <div
                className={cardCSS + ' px-sm-3 px-1 py-sm-2 py-1 my-3 mx-sm-3 mx-auto'}
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
        </>
    )
}

export default ContactCard