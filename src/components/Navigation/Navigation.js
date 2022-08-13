import { Link } from 'react-router-dom';

import magnifyingGlass from '../../images/magnifying-glass.png';

import * as navigationService from './navigationService/navigationService';

export const Navigation = () => {
    const user = localStorage.getItem('user');

    const logout = () => {
        localStorage.removeItem('user');
    };

    return (
        <nav id="container">
            <div className="games-nav">
                <div
                    className="nav-btns nav-options-btn"
                    onMouseOver={(e) =>
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
            {user ? 'asd' : 'asd'}
            <div className="account-nav">
                <div
                    className="nav-btns account"
                    onMouseOver={(e) =>
                        navigationService.showHiddenAccountInfo(e)}
                >
                    Account
                    <select />
                </div>
                {!user ?
                    <ul className="ul-account-nav">
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
                            <Link to="/" onClick={logout}>Logout</Link>
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