import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import ClickedOut from '../../util/ClickedOutOfProfile';
import ProfileImage from './ProfileImage';
import headerStyles from "../../assets/css/headerStyles.module.css";

const ProfileModal = () => {

    const dispatch = useDispatch();
    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const { name, email } = useSelector((state) => state.login.user);

    const logOutHandler = () => {
        dispatch(logout());
    }

    const {profileModal} = headerStyles;
    const modalDisplay = profileIsOpen ? ' d-block ' : ' d-none '

    return (
        <ClickedOut setComponentIsOpen={setProfileIsOpen}>
            <div className={"d-flex m-0 justify-content-end position-relative"}
                onClick={(event) => {
                    event.stopPropagation();
                    setProfileIsOpen(value => !value)
                }}>
                <div className='text-end mx-3'>
                    <h4 className='my-2 p-1 cursorPointer'>{name}</h4>
                </div>
                <div className=''>
                    <ProfileImage />
                </div>
                <div className={profileModal + modalDisplay
                    + "m-2 text-center p-2 px-3 text-dark border border-secondary bg-white "}
                    onClick={(event) => event.stopPropagation()} >
                    <div className='d-flex border-bottom border-3 pb-2'>
                        <ProfileImage />
                        <div className='m-3'>
                            {email}
                        </div>
                    </div>
                    <div>
                        <button
                            className="btn btn-muted btn-lg text-dark"
                            onClick={logOutHandler}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </ClickedOut>
    )
}

export default ProfileModal