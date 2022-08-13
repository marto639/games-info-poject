import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const loginUser = (e) => {

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        e.preventDefault();
        fetch('http://localhost:3030/jsonstore/users/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(user => {
                setUser(user);
                navigate('/');
                localStorage.setItem('user', JSON.stringify(user));
            }).catch((err) => {
                navigate('/login');
            });

    };
    return (
        <>
            <h1 className="website-login-name">Lordom</h1>
            <form onSubmit={loginUser}>
                <div>
                    <input className="login-input" type="text" placeholder="Email" name="email" />
                </div>
                <div>
                    <input className="login-input" type="password" placeholder="Password" name="password" />
                </div>
                <input className="login-input" type="submit" name="login" id="loginBtn" value="Log In" />
                <h3 className="redirect-text-login">Don't have account?</h3>
                <input className="login-input"
                    type="button"
                    name="register"
                    id="registerBtn"
                    defaultValue="Register"
                />
            </form>
        </>
    );
};