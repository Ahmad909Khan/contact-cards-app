import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const EmailComponent = (props) => {
    const email = props.email
    const [mouseInEmail, setMouseInEmail] = useState(false);
    return (
        <div className='float-end position-absolute end-0 bottom-0 pb-2 px-2'
            onMouseEnter={() => setMouseInEmail(true)}
            onMouseLeave={() => setMouseInEmail(false)} >
            {mouseInEmail &&
                <div
                    className="position-absolute"
                    style={{ bottom: '0px', right: '0px', margin: '0 0 25px', padding: '0 0 5px' }}>
                    <div className='me-3 bg-secondary text-light rounded px-3 align-items-center d-flex'>
                        {email}
                        <FontAwesomeIcon
                            className='ms-2 cursorPointer'
                            icon={faCopy}
                            onClick={() => navigator.clipboard.writeText(email)}
                            title='Copy to clipboard' />
                    </div>
                </div>}
            <a
                className='text-decoration-none text-dark'
                href={'mailto: ' + email} >
                <FontAwesomeIcon icon={faEnvelope} className='mx-1' />
                {email.length > 25
                    ? (email.substring(0, email.indexOf('@') + 3) + '...')
                    : email}
            </a>
        </div>
    )
}

export default EmailComponent