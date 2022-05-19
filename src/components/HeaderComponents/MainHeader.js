import React from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import ProfileModal from './ProfileModal';
import cardLogo from "../../assets/images/header_logo.png";
import headerStyles from "../../assets/css/headerStyles.module.css";

const MainHeader = () => {

    return (
        <div className={headerStyles.headerMain + " p-1 border bg-secondary text-white row m-0 header"}>
            <div className="col-md-3 p-1 d-flex">
                <div className="me-4">
                    <Link to='/' className="text-decoration-none m-0">
                        <img
                            className={headerStyles.mainHeaderLogoImage}
                            src={cardLogo}
                            alt="Contact logo"
                            title="Contact Cards" />
                    </Link>
                </div>
                <div className="py-2">
                    <Link to='/' className="text-decoration-none m-0">
                        <span
                            className="h4 text-white">
                            InfoTech
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-md-6 col-sm-8 m-0 p-1 px-3 my-1">
                <SearchComponent />
            </div>
            <div className="text-center col-sm-4 col-md-3">
                <ProfileModal />
            </div>
        </div>
    )
}

export default MainHeader