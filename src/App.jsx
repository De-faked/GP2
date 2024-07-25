import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PlantPage from './components/PlantPage';
import MyFavouritPlants from './components/MyFavouritPlants';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/plant">Plant</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/plant" element={<PlantPage />} />
          <Route path="/favorites" element={<MyFavouritPlants />} />
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
