import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from '../Services/authService.js';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logoutUser();
                navigate('/');
            });
    });
    
    return null;
};