import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import headerStyles from "../../assets/css/headerStyles.module.css";

const ProfileImage = () => {
    return (
        <div className={headerStyles.headerProfile
            + ' my-2 text-center rounded-circle position-relative bg-white'} >
            <FontAwesomeIcon className='my-2 text-secondary' icon={faUser} size='lg' />
        </div>
    )
}

export default ProfileImage