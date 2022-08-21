import { Link } from 'react-router-dom';

export const HomeGameRender = ({
    game,
}) => {
    return (
        <>
            < Link to={`/details/${game._id}`}>
                <img
                    className="game-image"
                    src={game.imageUrl}
                    alt={game.name}
                />
            </Link>
        </>
    );
};