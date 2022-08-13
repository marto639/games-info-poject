import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const Register = () => {
    const [user, setUser] = useState([]);

    const navigate = useNavigate();
    const registerUser = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('rePassword');

        fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, rePassword })
        })
            .then(res => res.json())
            .then(user => {
                setUser(user);
                navigate('/');
                localStorage.setItem('user', JSON.stringify(user));
            }).catch((err) => {
                navigate('/register');
            });
    };
    return (
        <>
            <h1 className="website-register-name">Lordom</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input className="register-input" type="text" placeholder="Username" name="username" />
                </div>
                <div>
                    <input className="register-input" type="text" placeholder="Email" name="email" />
                </div>
                <div>
                    <input className="register-input" type="password" placeholder="Password" name="password" />
                </div>
                <div>
                    <input className="register-input" type="password" placeholder="Repeat Password" name="rePassword" />
                </div>
                <input className="register-input"
                    type="submit"
                    name="register"
                    id="registerBtn"
                    value="Register"
                />
                <h3 className="redirect-text-register">Already have an account?</h3>
                <input className="register-input" type="button" name="login" id="loginBtn" defaultValue="Log In" />
            </form>
        </>

    );
};