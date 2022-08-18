import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GameComponent } from "../Browse/GamesComponent/GameComopnent";

import * as gameService from '../Services/gamesService.js';
import { AuthContext } from "../../contexts/AuthContext";

export const Create = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const { user } = useContext(AuthContext);

    const createGame = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const brand = formData.get('brand');
        const image = formData.get('imageUrl');
        const gameInfo = formData.get('gameInfo');

        if (brand == '' || image == '' || gameInfo == '') {
            return alert('All fields must be fiiled');
        }

        gameService.createGame(user.accessToken, brand, image, gameInfo)
            .then(game => {
                setGames(game);
                navigate('/browse');
            })
    };
    return (
        <>
            <h1 className="website-name">Lordom</h1>
            <form onSubmit={createGame}>
                <div>
                    <input
                        className="createInputs"
                        type="text"
                        placeholder="gameName"
                        name="brand"
                    />
                </div>
                <div>
                    <input
                        className="createInputs"
                        type="text"
                        placeholder="Image"
                        name="imageUrl"
                    />
                </div>
                <div>
                    <input
                        className="createInputs"
                        type="text"
                        placeholder="infoAboutGame"
                        name="gameInfo"
                    />
                </div>
                <div>
                    <input
                        className="createInputs"
                        type="submit"
                        name="gameCreate"
                        id="createGame"
                        value="Create"
                    />
                </div>
                <input
                    className="createInputs"
                    type="button"
                    name="login"
                    id="goBackBtn"
                    value="Go back"
                />
                {games.map(x => <GameComponent key={x._id} games={x} />)}
            </form>
        </>
    );
};