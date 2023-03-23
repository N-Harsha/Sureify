import { useEffect } from "react";
import ExitButton from "./ExitButton";
import "./GameHeader.css";
import RestartButton from "./RestartButton";
import formatTime from "./util";

const GameHeader = ({
  moves,
  handleRestart,
  timeElapsed,
  setTimeElapsed,
  gameReset,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="gameHeader">
      <span>Moves : {moves}</span>
      <span>{formatTime(timeElapsed)}</span>
      <div>
        <RestartButton handleRestart={handleRestart} />
        <ExitButton handleExit={gameReset} />
      </div>
    </div>
  );
};
export default GameHeader;
