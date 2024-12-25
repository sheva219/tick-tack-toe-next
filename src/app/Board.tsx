'use client';

import React from 'react';
import Square from './Square';

interface ChildProps {
  squares: Array<String>;
  onPlay: (value: Number) => void;
}

const Board: React.FC<ChildProps> = ({ squares, onPlay }) => {
  const handleClick = (value: Number) => {
    onPlay(value);
  };
  return (
    <>
      <div>
        <Square label={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square label={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square label={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square label={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square label={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square label={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square label={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square label={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square label={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
