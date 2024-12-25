'use client';

import React, { useState } from 'react';
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

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState('X');
  const handlePlay = (value: Number) => {
    let new_squares = [...squares];

    if (new_squares[value] !== null) return;
    new_squares[value] = nextValue;

    setNextValue(nextValue === 'X' ? 'O' : 'X');
    setSquares(new_squares);
  };

  return (
    <div>
      <Board squares={squares} onPlay={handlePlay} />
    </div>
  );
}
