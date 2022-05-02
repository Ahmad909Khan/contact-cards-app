import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const PhoneComponent = (props) => {
    return (
        <div className="float-start position-absolute bottom-0 start-0 pb-2 ps-3">
            <a
                className='text-decoration-none text-dark'
                href={'tel:+' + props.phone}
                onClick={(event) => event.stopPropagation()}>
                <FontAwesomeIcon icon={faPhone} className='mx-1' />
                {props.phone}
            </a>
        </div>
    )
}

export default PhoneComponent