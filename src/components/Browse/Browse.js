import { useState, useEffect } from 'react';
import * as gameService from '../Services/gamesService';
import { GameComponent } from './GamesComponent/GameComopnent';

export const Browse = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getEveryGame()
            .then(result => {
                const gameResult = Object.values(result);

                setGames(gameResult);
            });
    }, []);
    return (
        <>
            <div>
                <img
                    className="overwatchImage"
                    src={require("../../images/browse-games/overwatch.jpg")}
                    alt="overwatch image"
                />
                <h1 className="games-introduction">Games</h1>
            </div>
            {games.length > 0
                ? games.map(x => <GameComponent key={x.id} games={x} />)
                :<h1>No games!</h1>
            }
        </>
    );
}; 