import React from 'react';
import { useDispatch } from 'react-redux';
import { searchOperation } from '../../redux/actions/userActions';
import ClickedOut from '../../util/ClickedOutOfProfile';
import {
    faEnvelope,
    faGlobe,
    faLink,
    faLocation,
    faMapMarked,
    faMapMarkerAlt,
    faPhone,
    faTags,
    faThumbTack,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cardModalCSS from "../../assets/css/cardModal.module.css";

const CardModal = (props) => {

    const dispatch = useDispatch();
    const { card, showCardMode, setShowCardMode } = props;
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
        tags
    } = card;
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    const generateRandomColor = () => {
        let r = Math.round((Math.random() * 255)); //red 0 to 255
        let g = Math.round((Math.random() * 255)); //green 0 to 255
        let b = Math.round((Math.random() * 255)); //blue 0 to 255
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    const {
        cardModalContainer,
        profileInitials,
        modalProfileImage,
    } = cardModalCSS;

    return (
        <div className={cardModalContainer}
            style={showCardMode
                ? { height: 100 + 'vh' }
                : { height: '0px' }
            }>
            <div>
                <ClickedOut setComponentIsOpen={setShowCardMode}>
                    <div
                        className='m-0 my-sm-4 my-lg-5 my-2 p-sm-3 border border-dark'
                        style={{ backgroundColor: generateRandomColor() }} >
                        <div className='text-end'>
                            <FontAwesomeIcon
                                className={'cursorPointer p-2 m-xs-2 my-sm-0'}
                                icon={faTimes}
                                onClick={() => setShowCardMode(false)} />
                        </div>
                        <div className='text-center'>
                            {imageURL ?
                                <img
                                    className={modalProfileImage}
                                    src={imageURL}
                                    alt={firstName + ' ' + lastName + ' profile pic'} />
                                : <div
                                    className={profileInitials + ' text-center rounded-circle my-3 mx-auto'}
                                    title={firstName + ' ' + lastName + ' Profile Image'} >
                                    {initials}
                                </div>
                            }
                            <div className='h3 fw-bold mt-2'>
                                {firstName + ' ' + lastName}
                            </div>
                            <div className='h5 fst-italic'>
                                {designation}
                            </div>
                            <div>
                                <FontAwesomeIcon className='mx-2' icon={faLink} />
                                <a
                                    className='text-decoration-none text-light'
                                    href={'https://' + website}
                                    target="_blank"
                                    rel="noreferrer">
                                    {website}
                                </a>
                            </div>
                        </div>
                        <div className='row col-11 mx-auto mt-4'>
                            <div className='col-sm-7'>
                                <ul className='list-unstyled'>
                                    <span className='fw-bold'>Contact Info:</span>
                                    <li>
                                        <a
                                            className='text-decoration-none text-light ms-sm-3'
                                            href={'tel:+' + contact_phone}
                                            onClick={(event) => event.stopPropagation()}>
                                            <FontAwesomeIcon icon={faPhone} className=' mx-2' />
                                            {contact_phone}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-decoration-none text-light ms-sm-3'
                                            href={'mailto: ' + contact_email}
                                            onClick={(event) => event.stopPropagation()}>
                                            <FontAwesomeIcon icon={faEnvelope} className='mx-2' />
                                            {contact_email}
                                        </a>
                                    </li>
                                </ul>
                                <ul className='list-unstyled'>
                                    <span className='fw-bold'>Known For:</span>
                                    {tags.length > 0
                                        ? tags.map((tag, index) =>
                                            <li
                                                className={'cursorPointer ms-4'}
                                                key={index}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    dispatch(searchOperation(tag, 'tags'));
                                                    setShowCardMode(false);
                                                }}>
                                                <FontAwesomeIcon className='me-2' icon={faTags} />
                                                {tag}
                                            </li>
                                        )
                                        : <li>No identifier values for this user</li>
                                    }
                                </ul>
                            </div>
                            <ul className='list-unstyled col-sm-5'>
                                <span className='fw-bold'>Address Info:</span>
                                <li className='ms-sm-3'>
                                    <FontAwesomeIcon className='mx-2' icon={faLocation} />
                                    {address_area}
                                </li>
                                <li className='ms-sm-3'>
                                    <FontAwesomeIcon className='mx-2' icon={faMapMarked} />
                                    {address_city}
                                </li>
                                <li className='ms-sm-3'>
                                    <FontAwesomeIcon className='mx-2' icon={faMapMarkerAlt} />
                                    {address_state}
                                </li>
                                <li className='ms-sm-3'>
                                    <FontAwesomeIcon className='mx-2' icon={faGlobe} />
                                    {address_country}
                                </li>
                                <li className='ms-sm-3'>
                                    <FontAwesomeIcon className='mx-2' icon={faThumbTack} />
                                    {address_zipcode}
                                </li>
                            </ul>
                        </div>
                    </div>
                </ClickedOut>
            </div>
        </div>
    )
}

export default CardModal