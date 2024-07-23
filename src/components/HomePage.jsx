import React from 'react';
import './HomePage.css'; // Ensure this file is created for custom styles
import Counter from './Counter';
import RockPaperScissors from './RockPaperScissors';
import TicTacToe from './TicTacToe'; // Import TicTacToe component
import PlantPage from './PlantPage';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Games Portal</h1>
        <p>Explore our interactive games and learn about plants!</p>
      </header>
      <main className="game-sections">
        <div className="game-card">
          <h2>Counter Game</h2>
          <Counter />
        </div>
        <div className="game-card">
          <h2>Rock Paper Scissors</h2>
          <RockPaperScissors />
        </div>
        <div className="game-card">
          <h2>Tic Tac Toe</h2>
          <TicTacToe /> {/* Add TicTacToe here */}
        </div>
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
