import { useNavigate, Link } from "react-router-dom";
import { useContext } from 'react';

import { AuthContext } from "../../contexts/AuthContext.js";
import * as authService from '../Services/authService.js';

export const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUserHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        if (email == '' || password == '') {
            return alert('All fields must be filled!');
        }

        authService.login(email, password)
            .then(data => {
                if (data.accessToken) {
                    loginUser(data);
                    navigate('/');
                } else {
                    return alert('Incorrect email or password!');
                }
            });
    };
    return (
        <>
            <h1 className="website-login-name">Lordom</h1>
            <form onSubmit={loginUserHandler}>
                <div>
                    <input className="login-input" type="text" placeholder="Email" name="email" />
                </div>
                <div>
                    <input className="login-input" type="password" placeholder="Password" name="password" />
                </div>
                <input className="login-input" type="submit" name="login" id="loginBtn" value="Log In" />
                <h3 className="redirect-text-login">Don't have account?</h3>
                <Link to="/register"><input className="login-input"
                    type="button"
                    name="register"
                    id="registerBtn"
                    defaultValue="Register"
                />
                </Link>
            </form>
        </>
    );
};