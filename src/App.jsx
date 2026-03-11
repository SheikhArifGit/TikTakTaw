import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [current, setCurrent] = useState("X");

  const handleClick = (i) => {
    if (board[i] === "") {
      const newBoard = [...board];
      newBoard[i] = current;
      setBoard(newBoard);
      setCurrent(current === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrent("X");
  };

  const renderCell = (i) => (
    <div className="cell" onClick={() => handleClick(i)}>
      {board[i]}
    </div>
  );

  return (
    <div className="App">
      <h1>TikTakTaw</h1>
      <div className="board">
        {board.map((_, i) => renderCell(i))}
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;