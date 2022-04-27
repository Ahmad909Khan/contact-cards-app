import React from 'react'
import LoginHeader from "../components/LoginComponents/LoginHeader";
import LoginMainComponent from "../components/LoginComponents/LoginMainComponent"
import LoginFooter from "../components/LoginComponents/LoginFooter";

const LoginPage = () => {
    return (
        <>
            <LoginHeader />
            <LoginMainComponent />
            <LoginFooter />
        </>
    )
}

export default LoginPage