import React from 'react';
import './HomePage.css';
import PlantPage from './PlantPage';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Education about Plants</h1>
        <p>Press the button to Generate and learn about plants!</p>
      </header>
      <main className="game-sections">
        <div className="game-card">
          <h2>Random Plant</h2>
          <PlantPage />
        </div>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Games Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
