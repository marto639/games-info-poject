import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Details = ({
}) => {
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/allGames/${id}`)
            .then(res => res.json())
            .then(x => {
                setGame(x);
            });
    });
    return (
        <div className="container-details">
            <img
                className="game-details"
                src={game.imageUrl}
                alt="image"
            />
            <div className="details-container">
                <p className="gameDetails">{game.gameInfo}</p>
            </div>
        </div>
    );
};