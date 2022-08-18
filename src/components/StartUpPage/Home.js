import { useState, useEffect } from 'react';

import { HomeGameRender } from './HomeGamesRender/HomeGamesRender';

import * as gamesService from '../Services/gamesService';

export const Home = () => {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        gamesService.getAll()
            .then(result => {
                const res = Object.values(result);
                setGames(res);
            })
    }, []);

    return (
        <>
            <header>
                <div className="header">
                    <div className="images">
                        <img
                            className="first-game-picture images"
                            src={require("../../images/launchers/ark-survival-evolved.jpg")}
                            alt="ark-survival-evolved"
                        />
                    </div>
                    <div>
                        <img
                            className="second-game-picture images"
                            src={require("../../images/launchers/league-of-legends.jpg")}
                            alt="league-of-legends"
                        />
                    </div>
                    <div>
                        <img
                            className="third-game-picture images"
                            src={require("../../images/launchers/gta-v.jpg")}
                            alt="GTA-V"
                        />
                    </div>
                    {/* <div>
                        <img
                            src={require("../../images/arrows-to-navigate/right-arrow.png")}
                            alt="right-arrow-navigation"
                            className="right-arrow"
                        />
                    </div>
                    <div>
                        <img
                            src={require("../../images/arrows-to-navigate/left-arrow.png")}
                            alt="left-arrow-navigation"
                            className="left-arrow"
                        />
                    </div> */}
                </div>
                <div>
                    <h1 className="more-games-text">Famous Games</h1>
                </div>
            </header>

            <div className="more-games">
                <div className="container">
                    {games.map(x => <HomeGameRender key={x._id} game={x} />)}
                </div>
            </div>
        </>
    );
};