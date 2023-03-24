import CardContainer from "./CardContainer";
import GameHeader from "./GameHeader";
import "./GameContainer.css";
import { useCallback, useEffect, useState } from "react";
import useLocalStorageState from "../Hooks/useLocalStorageState";
import GameFooter from "./GameFooter";
import GameCompleteionPage from "./GameCompletionPage";
import { createPortal } from "react-dom";
import LeaderBoardCard from "./LeaderBoardCard";

const GameContainer = ({ name, setName }) => {
  const [moves, setMoves] = useLocalStorageState("moves", 0);
  const [gameData, setGameData] = useLocalStorageState("gameData", []);
  const [currentSelection, setCurrentSelection] = useLocalStorageState(
    "currentSelection",
    null
  );
  const [timeElapsed, setTimeElapsed] = useLocalStorageState("timeElapsed", 0);
  const [isGameComplete, setIsGameComplete] = useLocalStorageState(
    "isGameCompleted",
    false
  );
  const [size, setSize] = useLocalStorageState("size", 4);
  const [leaderboard, setLeaderboard] = useLocalStorageState("leaderboard", {});

  const [showLeaderBoard, setShowLeaderBoard] = useState(false);

  const gameReset = useCallback(() => {
    localStorage.clear();
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    setName(null);
    setIsGameComplete(false);
    setTimeElapsed(0);
    setMoves(0);
    setSize(4);
    setGameData([]);
  }, [
    setName,
    setIsGameComplete,
    setTimeElapsed,
    setSize,
    setGameData,
    leaderboard,
    setMoves,
  ]);

  const handleReset = useCallback(() => {
    setCurrentSelection(null);
    setGameData((prev) =>
      prev.map((item) => {
        return { ...item, isFlipped: false };
      })
    );
    setTimeout(() => {
      setGameData((prev) => {
        const data = [...prev];
        for (let i = 0; i < data.length; i++) {
          data[i].isFlipped = false;
        }
        let currentIndex = data.length,
          randomIndex;

        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [data[currentIndex], data[randomIndex]] = [
            data[randomIndex],
            data[currentIndex],
          ];
        }
        return data;
      });
    }, 100);

    setMoves(0);
    setTimeElapsed(0);
  }, [setCurrentSelection, setGameData, setMoves, setTimeElapsed]);

  const gameOverCheck = useCallback((data) => {
    if (data.length === 0) return false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].isFlipped !== "done") return false;
    }
    return true;
  }, []);

  useEffect(() => {
    console.log("game over check");
    if (gameOverCheck(gameData) && !isGameComplete) {
      setLeaderboard((prev) => {
        const data = { ...prev };
        if (data[size] === undefined) {
          data[size] = [];
        }

        data[size].unshift({
          name,
          moves,
          timeElapsed,
          playedOn: new Date().toLocaleString(),
        });
        data[size] = data[size].sort((a, b) => {
          if (a.moves !== b.moves) return a.moves - b.moves;
          return a.timeElapsed - b.timeElapsed;
        });
        return data;
      });
      setIsGameComplete(true);
    }
  }, [
    gameOverCheck,
    isGameComplete,
    moves,
    name,
    setIsGameComplete,
    setLeaderboard,
    size,
    gameData,
  ]);
  return (
    <>
      {createPortal(
        <LeaderBoardCard
          leaderboard={leaderboard}
          size={size}
          showLeaderBoard={showLeaderBoard}
          setShowLeaderBoard={setShowLeaderBoard}
        />,
        document.getElementById("leaderboard")
      )}
      {isGameComplete ? (
        <GameCompleteionPage
          name={name}
          timeElapsed={timeElapsed}
          moves={moves}
          size={size}
          leaderboard={leaderboard}
          gameReset={gameReset}
          setShowLeaderBoard={setShowLeaderBoard}
        />
      ) : (
        <div className="gameContainer">
          <GameHeader
            moves={moves}
            handleRestart={handleReset}
            timeElapsed={timeElapsed}
            setTimeElapsed={setTimeElapsed}
            gameReset={gameReset}
          />
          <CardContainer
            size={size}
            setMoves={setMoves}
            gameData={gameData}
            setGameData={setGameData}
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
          />
          <GameFooter
            setSize={setSize}
            handleReset={handleReset}
            setShowLeaderBoard={setShowLeaderBoard}
          />
        </div>
      )}
    </>
  );
};
export default GameContainer;
