import React from 'react';
import './Footer.css';

interface PropTypes{
  currentPlayer: string,
  winner: string,
}

const Footer = ({winner, currentPlayer}: PropTypes) => {
  return (
    <div className="footer">
      <p>Game finished</p>
      {
        winner?
        <p>Player {winner} Winner</p>:
        <p>Current player: {currentPlayer}</p>
      }
    </div>
  );
};

export default Footer;
