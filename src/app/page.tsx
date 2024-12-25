'use client';

import React, { useState, useEffect } from 'react';
import Board from './Board';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>Tic Tac Toe Game</h1>
        <Game />
      </main>
    </div>
  );
}

function isEndGame(squares: Array<String>) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return 'Winner is: ' + squares[a];
    }
  }

  return null;
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState('X');
  const [gameStatus, setGameStatus] = useState<String | null>(null);

  const handlePlay = (value: Number) => {
    let new_squares = [...squares];

    if (squares[value] !== null || gameStatus !== null) return;
    new_squares[value] = nextValue;
    let status = isEndGame(new_squares);
    setGameStatus(status);
    setNextValue(nextValue === 'X' ? 'O' : 'X');
    setSquares(new_squares);
  };

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  return (
    <div>
      <div>{gameStatus && <h2>{gameStatus}</h2>}</div>
      <Board squares={squares} onPlay={handlePlay} />
    </div>
  );
}
