import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WebsiteComponent = (props) => {
    return (
        <>
            <FontAwesomeIcon className='mx-2' icon={faLink} />
            <a
                className='text-decoration-none text-dark'
                href={'https://www.' + props.website}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}>
                {props.website}
            </a>
        </>
    )
}

export default WebsiteComponent