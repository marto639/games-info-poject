export const HomeGameRender = ({
    game
}) => {
    return (
        < a >
            <img
                className="game-image"
                src={game.imageUrl}
                alt={game.name}
            />
        </a >
    );
};