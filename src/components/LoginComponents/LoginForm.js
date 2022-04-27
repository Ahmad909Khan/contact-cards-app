import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/actions/userActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.user);

    const emailRef = useRef();
    const passwordRef = useRef();
    const [validationFlag, setValidationFlag] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const loginHandler = (event) => {
        event.preventDefault();

        let emailInput = emailRef.current.value;
        let passwordInput = passwordRef.current.value;

        if (emailInput.length === 0 || passwordInput.length === 0) {
            setValidationFlag(true);
            setErrorMessage("Email and Password fields cannot be empty!");
        } else if (emailInput !== user.email || passwordInput !== user.password) {
            setValidationFlag(true);
            setErrorMessage("Email or Password do not match.");
        }
        else {
            setValidationFlag(false);
            setErrorMessage(null);

            const userCredentials = {
                email: emailInput,
                password: passwordInput
            };

            dispatch(login(userCredentials));
        }
    }

    return (
        <div className="col-md-6 col-lg-4">
            <form
                className="px-5 py-3 my-3 border"
                onSubmit={loginHandler}
            >
                {validationFlag &&
                    <div className={"alert alert-danger"}>
                        {errorMessage}
                    </div>
                }
                <div className="my-3">
                    <label htmlFor='email'>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mx-2"
                        />
                        E-mail:
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder='Enter your email'
                        ref={emailRef}
                    />

                </div>
                <div className="my-3">
                    <label htmlFor='password'>
                        <FontAwesomeIcon
                            icon={faKey}
                            className="mx-2"
                        />
                        Password:
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        placeholder='Enter the password'
                        ref={passwordRef}
                    />
                </div>
                <button
                    className="btn btn-warning px-5 my-3">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm