import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as gameService from '../Services/gamesService.js';
import { AuthContext } from "../../contexts/AuthContext";

export const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    
    const editGame = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const brand = formData.get('brand');
        const image = formData.get('imageUrl');
        const gameInfo = formData.get('gameInfo');

        if (brand == '' || image == '' || gameInfo == '') {
            return alert('All fields must be fiiled');
        }
        gameService.editGame(id, user.accessToken, brand, image, gameInfo)
        .then(game => {
            navigate('/browse');
            })
    }

    return (
        <form onSubmit={editGame}>
            <input
                type="text"
                name="brand"
                className="inputs brand"
            />
            <input
                type="text"
                name="imageUrl"
                className="inputs imageUrl"
            />
            <input
                type="text"
                name="gameInfo"
                className="inputs gameInfo"
            />
            <input
                type="submit"
                name="edit-game"
                value="EDIT"
                className="editInput"
            />
        </form>
    );
};