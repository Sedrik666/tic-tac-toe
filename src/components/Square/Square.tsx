import React from 'react';
import './Square.css';

interface PropsTypes{
  index: number,
  value: string|null,
  disabled: boolean,
  handleStep: (index: number) => void
}

const Square = ({index, value, handleStep, disabled}: PropsTypes) => {
  return (
    <button className="square"
         disabled={disabled}
         onClick={() => handleStep(index)}
    >
      {value}
    </button>
  );
};

export default Square;
