'use client';
import React from 'react';

interface ChildProps {
  label: String;
  onSquareClick: () => void;
}

const Square: React.FC<ChildProps> = ({ label, onSquareClick }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    onSquareClick();
  };
  return (
    <button
      className="text-xl p-0  bg-blue-500 font-bold w-8 h-8 border-solid border"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Square;
