import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as gameService from '../Services/gamesService.js';

export const Details = ({
}) => {
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        gameService.getOne(id)
            .then(x => {
                setGame(x);
            })
    });
    return (
        <div className="container-details">
            <img
                className="game-details"
                src={game.imageUrl}
                alt="image"
            />
            <div className="details-container">
                <p className="gameDetails">{game.brand}</p>
                <p className="gameDetails">{game.gameInfo}</p>
            </div>
        </div>
    );
};