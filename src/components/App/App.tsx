import React, {useState} from 'react';
import Dashboard from "../Dashboard/Dashboard";
import './App.css';
import Footer from "../Footer/Footer";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('1');
  const [state, setState] = useState({
    gameover: false,
    winner: ''
  });

  const togglePlayer = () => {
    const nextPlayer = currentPlayer === '1' ? '2' : '1';
    setCurrentPlayer(nextPlayer);
  };

  const setWinner = (winner: string) => {
    setState({
      gameover: true,
      winner: winner
    })
  };

  return (
    <div className="App">
      <Dashboard currentPlayer={currentPlayer}
                 togglePlayer={() => togglePlayer()}
                 setWinner={(winner:string) => setWinner(winner)}
                 gameover={state.gameover}
      />
      <Footer winner={state.winner}
              currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default App;
