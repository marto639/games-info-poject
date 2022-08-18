import { useEffect, useState, useContext } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';

import * as gameService from '../Services/gamesService.js';
import { AuthContext } from "../../contexts/AuthContext";

export const Details = ({ }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [game, setGame] = useState([]);
    const { user } = useContext(AuthContext);

    const deleteBtn = () => {
        gameService.deleteGame(user.accessToken, id)
            .then(() => {
                navigate('/');
            })
    };

    useEffect(() => {
        gameService.getOne(id)
            .then(x => {
                setGame(x);
            })
    }, []);

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
                {game._ownerId == user._id
                    ? <div>
                        < Link to={`/edit/${id}`} className="details-buttons edit-btn">Edit</Link>
                        <Link onClick={deleteBtn} className="details-buttons delete-btn" to="/browse">Delete</Link>
                    </div>
                    : ''
                }
            </div>
        </div >
    );
};