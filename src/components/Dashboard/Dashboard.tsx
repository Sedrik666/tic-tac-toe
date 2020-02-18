import React, {useState, useEffect, useCallback, useMemo} from 'react';
import './Dashboard.css';
import Square from "../Square/Square";

interface PropTypes{
  currentPlayer: string,
  togglePlayer: () => void,
  setWinner: (winner:string) => void,
  gameover: boolean
}

const Dashboard = ({currentPlayer, togglePlayer, setWinner, gameover} : PropTypes) => {
  const emptyBoard:any[] = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];

  const winningPatterns = useMemo(() => [
    //rows
    [true, true, true, false, false, false, false, false, false],
    [false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, true, true, true],
    //columns
    [true, false, false, true, false, false, true, false, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, false, false, true, false, false, true],
    //crosses
    [true, false, false, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false],
  ], []);

  const [board, setBoard] = useState(emptyBoard);

  const checkWin = useCallback((board: any[], player:string) => {
    return winningPatterns.some((pattern:any[]) => {
      return pattern.every((value, index) => {
        return (value === true && board[index] === player) || (value === false);
      });
    });
  }, [winningPatterns]);

  const checkWinner = useCallback(() => {
    if (checkWin(board, '1')){
      setWinner('1');
    }
    else if(checkWin(board, '2')){
      setWinner('2');
    }
    else if(board.every((elem) => elem !==null)){
      setWinner('Friendship');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[board, checkWin]);

  const handleStep = (idx:number) => {
    togglePlayer();
    const newBoard = [
      ...board.slice(0, idx),
      currentPlayer,
      ...board.slice(idx+1)
    ];
    setBoard(newBoard);
  };

  useEffect(() => {
    checkWinner()
  }, [board, checkWinner]);

  return (
    <div className="dashboard">
      {
        board.map((el: string|null, index: number) => (
          <Square value={el}
                  key={index}
                  index={index}
                  handleStep = {() => handleStep(index)}
                  disabled={el!==null||gameover}
          />
        ))
      }
    </div>
  );
};

export default Dashboard;
