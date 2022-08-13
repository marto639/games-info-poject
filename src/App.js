import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/StartUpPage/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Browse } from './components/Browse/Browse';
import { Details } from './components/Details/Details';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/allGames')
      .then(res => res.json())
      .then(result => {
        setGames(Object.values(result));
      })
  }, []);

  const id = games.map(x => { return x.id });

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/details/:id" element={<Details games={games} />} />
      </Routes>
    </div>
  );
}

export default App;
