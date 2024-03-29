import React from 'react'

const LoginWelcomeComponent = () => {
    return (
        <div className="col-md-6 col-lg-8 p-md-5 py-2 text-center">
            <h1>Welcome to Contact Cards app</h1>
            <div className="h3 my-3">
                Login with your office credentials to continue
            </div>
            <pre className='text-end'>email: user@me.com</pre>
            <pre className='text-end'>password: 123</pre>
        </div>
    )
}

export default LoginWelcomeComponent