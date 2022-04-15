import React from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import cardLogo from "../assets/images/header_logo.png";
import headerStyles from "../assets/css/headerStyles.module.css";
import SearchComponent from './header_components/SearchComponent';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    const dispatch = useDispatch();
    const logOutHandler = () => {

        const nullUser = {
            email: null,
            password: null
        };
        dispatch(logout(nullUser));
    }

    return (
        <div className="p-1 border bg-secondary text-white row m-0">
            <div className="col-md-3 p-1 row m-0">
                <div className="col-3">
                    <Link to='/home-page' className="text-decoration-none m-0">
                        <img
                            className={headerStyles.mainHeaderLogoImage}
                            src={cardLogo}
                            alt="Contact logo"
                            title="Contact Cards" />
                    </Link>
                </div>
                <div className="col-9 py-2">
                    <Link to='/home-page' className="text-decoration-none m-0">
                        <span
                            className="h4 text-white">
                            InfoTech
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-md-6 col-10 m-0 p-1 px-3 my-1">
                <SearchComponent />
            </div>
            <div className="text-center col-3">
                <button
                    className="btn btn-muted btn-lg text-white"
                    onClick={logOutHandler}>Log Out</button>
            </div>
        </div>
    )
}

export default MainHeader