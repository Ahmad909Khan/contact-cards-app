import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const PhoneComponent = (props) => {
    return (
        <a
            className='float-start mt-3 text-decoration-none text-dark'
            href={'tel:+' + props.phone}
            onClick={(event) => event.stopPropagation()}>
            <FontAwesomeIcon icon={faPhone} className='mx-1' />
            {props.phone}
        </a>
    )
}

export default PhoneComponent