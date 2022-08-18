import { Link } from 'react-router-dom';

export const GameComponent = ({
    games
}) => {
    return (
        <div className="game-view">
            <Link to={`/details/${games._id}`}><img
                className="game-img"
                src={games.imageUrl}
                alt="game-image"
            />
            <div className="game-container">
                <p className="text">{games.brand}</p>
            </div>
            </Link>
        </div >
    );
};