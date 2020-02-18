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
      {value==='1'?'0':value==='2'?'X':''}
    </button>
  );
};

export default Square;
