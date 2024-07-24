import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import PlantPage from './components/PlantPage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plant" element={<PlantPage />} />
      </Routes>
    </div>
  );
};

export default App;
