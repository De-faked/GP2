import React, { useState } from 'react';
import './RockPaperScissors.css';

const choices = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    const gameResult = determineWinner(choice, randomChoice);
    setResult(gameResult);
    if (gameResult === 'You win!') {
      setScore({ ...score, user: score.user + 1 });
    } else if (gameResult === 'You lose!') {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "It's a tie!";
    }
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }
    return 'You lose!';
  };

  const resetGame = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
    setScore({ user: 0, computer: 0 });
  };

  return (
    <div className="rock-paper-scissors">
      <h2>Rock, Paper, Scissors</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className="results">
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
      <div className="score">
        <p>User Score: {score.user}</p>
        <p>Computer Score: {score.computer}</p>
      </div>
      <button className="reset-button" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default RockPaperScissors;

