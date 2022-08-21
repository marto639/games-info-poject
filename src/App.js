import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/StartUpPage/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Browse } from './components/Browse/Browse';
import { Details } from './components/Details/Details';
import { Create } from './components/Create/Create';
import { Edit } from './components/Edit/Edit.js';
import { PageNotFound } from './components/PageNotFound/PageNotFound.js';

import * as gameService from './components/Services/gamesService.js';

import { AuthContext } from './contexts/AuthContext.js';

import './styles/style.css';

function App() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState({});

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser({});
  }

  useEffect(() => {
    gameService.getAll()
      .then(game => {
        setGames(game);
      });
  }, []);

  const id = games.map(x => { return x.id });

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/details/:id" element={<Details games={games} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit games={games} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
