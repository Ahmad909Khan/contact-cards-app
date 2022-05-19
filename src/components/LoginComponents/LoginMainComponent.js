import React from 'react';
import LoginForm from './LoginForm';
import LoginWelcomeComponent from './LoginWelcomeComponent';

const LoginMainComponent = () => {

    return (
        <>
            <div className="loginMain row m-0 bg-light p-lg-5 p-md-3 p-2">
                <LoginWelcomeComponent />
                <LoginForm />
            </div>
        </>
    )
}

export default LoginMainComponent