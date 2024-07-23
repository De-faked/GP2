import React, { useState } from 'react';
import './NumberGuessing.css';

const NumberGuessing = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);
    if (numGuess > targetNumber) {
      setMessage('Too high!');
    } else if (numGuess < targetNumber) {
      setMessage('Too low!');
    } else {
      setMessage(`Correct! You guessed the number in ${attempts + 1} attempts!`);
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="number-guessing">
      <h2>Number Guessing Game</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <button className="reset-button" onClick={resetGame}>Reset</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NumberGuessing;
