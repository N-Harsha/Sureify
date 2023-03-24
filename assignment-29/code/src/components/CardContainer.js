import { useCallback, useEffect } from "react";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ({
  size,
  setMoves,
  gameData,
  setGameData,
  currentSelection,
  setCurrentSelection,
}) => {
  const shuffleData = useCallback((data) => {
    return data
      .map((item) => {
        return { ...item, rand: Math.random() };
      })
      .sort((a, b) => a.rand - b.rand)
      .map((item) => {
        return { data: item.data, compareId: item.compareId, isFlipped: false };
      });
  }, []);

  useEffect(() => {
    if (gameData !== []) {
      const currentTotalCount = gameData.length;
      const actualTotalCount = size * size;
      if (actualTotalCount === currentTotalCount) return;
    }
    const MAX_NUMBER = (size * size) / 2;
    const data = [];
    for (let i = 1; i <= MAX_NUMBER; i++) {
      data.push({ compareId: i, data: i });
      data.push({ compareId: i, data: i });
    }
    setGameData(shuffleData(data));
  }, [size, setGameData, shuffleData, gameData]);

  const handleFlip = useCallback(
    (idx) => {
      setGameData((prev) => {
        const data = [...prev];
        if (data[idx] !== undefined) data[idx].isFlipped = true;
        return data;
      });

      if (currentSelection === null) {
        setCurrentSelection(idx);
      } else {
        setMoves((prev) => prev + 1);
        if (gameData[idx].compareId === gameData[currentSelection].compareId) {
          setTimeout(() => {
            setGameData((prev) => {
              const data = [...prev];
              data[idx].isFlipped = "done";
              data[currentSelection].isFlipped = "done";
              return data;
            });
          }, 400);
        } else {
          setTimeout(() => {
            setGameData((prev) => {
              const data = [...prev];
              data[idx].isFlipped = false;
              data[currentSelection].isFlipped = false;
              return data;
            });
          }, 700);
        }
        setCurrentSelection(null);
      }
    },
    [setGameData, setMoves, setCurrentSelection, currentSelection, gameData]
  );

  return (
    <div
      className="cardContainer"
      style={{ gridTemplateColumns: "auto ".repeat(size) }}
    >
      {gameData.map((item, i) => (
        <Card key={i} {...item} id={i} handleFlip={handleFlip} />
      ))}
    </div>
  );
};
export default CardContainer;
