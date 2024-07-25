import React from 'react';
import PlantPage from './PlantPage';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Education About Plants</h1>
      </header>
      <main className="home-content">
        <PlantPage />
      </main>
    </div>
  );
};

export default HomePage;
