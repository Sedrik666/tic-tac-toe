import React, {useState} from 'react';
import Dashboard from "../Dashboard/Dashboard";
import './App.css';
import Footer from "../Footer/Footer";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [state, setState] = useState({
    gameover: false,
    winner: ''
  });

  const togglePlayer = () => {
    const nextPlayer = currentPlayer === 'O' ? 'X' : 'O';
    setCurrentPlayer(nextPlayer);
  };

  const handleState = (winner: string) => {
    setState({
      gameover: true,
      winner
    })
  };

  return (
    <div className="App">
      <Dashboard currentPlayer={currentPlayer}
                 togglePlayer={() => togglePlayer()}
                 setWinner={(winner:string) => handleState(winner)}
                 gameover={state.gameover}
      />
      <Footer winner={state.winner}
              currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default App;
