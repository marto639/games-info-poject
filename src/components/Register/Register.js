import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../Services/authService.js';

export const Register = () => {
    const { loginUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('rePassword');

        if (username == '' || email == '' || password == '' || rePassword == '') {
            return alert('All fields must be filled');
        }

        if (password !== rePassword) {
            return alert('password must be the same with repeat password');
        }

        authService.register(username, email, password)
            .then(data => {
                loginUser(data);
                navigate('/');
            })
    };
    return (
        <>
            <h1 className="website-register-name">Lordom</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input
                        className="register-input"
                        type="text"
                        placeholder="Username"
                        name="username"
                    />
                </div>
                <div>
                    <input
                        className="register-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div>
                    <input
                        className="register-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <div>
                    <input
                        className="register-input"
                        type="password"
                        placeholder="Repeat Password"
                        name="rePassword"
                    />
                </div>
                <input className="register-input"
                    type="submit"
                    name="register"
                    id="registerBtn"
                    value="Register"
                />
                <h3 className="redirect-text-register">Already have an account?</h3>
                <Link to="/login"><input
                    className="register-input"
                    type="button"
                    name="login"
                    id="loginBtn"
                    defaultValue="Log In"
                />
                </Link>
            </form>
        </>

    );
};