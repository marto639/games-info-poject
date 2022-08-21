import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as gameService from '../Services/gamesService.js';
import { AuthContext } from "../../contexts/AuthContext";

export const Edit = () => {
    const navigate = useNavigate();
    const [game, setGame] = useState([]);

    const { id } = useParams();
    const { user } = useContext(AuthContext);


    gameService.getOne(id)
        .then(result => {
            setGame(result);
        })

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
                defaultValue={game.brand}
            />
            <input
                type="text"
                name="imageUrl"
                className="inputs imageUrl"
                defaultValue={game.imageUrl}
            />
            <input
                type="text"
                name="gameInfo"
                className="inputs gameInfo"
                defaultValue={game.gameInfo}
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