import { Link, useParams } from 'react-router-dom';

export const GameComponent = ({
    games
}) => {
    const { gameId } = useParams();

    const game = Object.values(games).find(x => x.id == gameId);

    return (
        <div className="game-view">
            <Link to={`/details/${game - 1}`} ><img
                className="game-img"
                src={games.imageUrl}
                alt="game-image"
            />
            </Link>
            <div className="game-container">
                <p className="text">{games.gameInfo}</p>
            </div>
        </div >
    );
};