import React from 'react'

import cardLogo from "../../assets/images/header_logo_login.png";
import headerStyles from "../../assets/css/headerStyles.module.css";

const Header = () => {
    return (
        <div className={headerStyles.headerLogin + " p-3 border bg-secondary"}>
            <div className="text-center text-white p-1">
                <img className={headerStyles.logoImage} src={cardLogo} alt="Contact logo" />
                <span className="h2">Contact Cards</span>
            </div>
        </div>
    )
}

export default Header