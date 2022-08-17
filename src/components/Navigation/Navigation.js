import { useContext } from 'react';
import { Link } from 'react-router-dom';

import magnifyingGlass from '../../images/magnifying-glass.png';

import { AuthContext } from '../../contexts/AuthContext.js';
import * as navigationService from './navigationService/navigationService';

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav id="container">
            <div className="games-nav">
                <div
                    className="nav-btns nav-options-btn"
                    onClick={(e) =>
                        navigationService.showHiddenGamesInfo(e)}
                >
                    Games
                    <select
                    />
                </div>
                <ul>
                    <li className="li-games-btn">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="li-games-btn">
                        <Link to="/browse">Browse</Link>
                    </li>
                </ul>
            </div>
            <div className="account-nav">
                <div
                    className="nav-btns account"
                    onClick={(e) =>
                        navigationService.showHiddenAccountInfo(e)}
                >
                    Account
                    <select />
                </div>
                {!user.accessToken
                    ? <ul className="ul-account-nav">
                        <li className="li-account-btn">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="li-account-btn">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    :
                    <ul className="ul-account-nav">
                        <li className="li-account-btn">
                            <Link to="/create" >Create</Link>
                        </li>
                        <li className="li-account-btn">
                            <Link to="/logout" >Logout</Link>
                        </li>
                    </ul>
                }
            </div>
            <div className="search">
                <input type="text" className="input-search" id="input-slide" />
                <img
                    className="search-glass"
                    src={magnifyingGlass}
                    alt="search-glass"
                    onClick={(e) => navigationService.showHiddenInput(e)}
                />
            </div>
        </nav>

    );
};