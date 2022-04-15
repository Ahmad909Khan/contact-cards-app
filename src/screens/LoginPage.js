import React from 'react'
import LoginHeader from "../components/login_components/LoginHeader";
import LoginMainComponent from "../components/login_components/LoginMainComponent"
import LoginFooter from "../components/login_components/LoginFooter";

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