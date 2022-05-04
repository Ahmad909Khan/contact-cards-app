import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ShareButton = (props) => {
    return (
        <Link to={props.imgURL}>
            <FontAwesomeIcon
                icon={faShare}
                className="cursorPointer my-1"
                size='lg'
                title='Share' />
        </Link>
    )
}

export default ShareButton