import { memo, useEffect, useState } from "react";
import "./LeaderBoard.css";
import formatTime from "./util";
const NameMapping = {
  name: "Name",
  moves: "Moves",
  timeElapsed: "Time Elapsed",
  playedOn: "Played On",
};
const LeaderBoardCard = memo(
  ({ leaderboard, size, showLeaderBoard, setShowLeaderBoard }) => {
    console.log("leaderboard");
    const [category, setCategory] = useState(size);
    useEffect(
      () => {
        setCategory(size);
      },
      [size],
      setCategory
    );
    useEffect(() => {
      if (!showLeaderBoard) setCategory(size);
    }, [size, showLeaderBoard]);

    const handleOnClick = (val) => {
      return () => {
        setCategory(val);
      };
    };
    const scoreTable = leaderboard[category]
      ?.map((item) => {
        return {
          ...item,
          timeElapsed: formatTime(item.timeElapsed),
        };
      })
      ?.map((item, j) => {
        const mappedItems = Object.values(item).map((item, i) => (
          <td key={i}>{item}</td>
        ));
        return <tr key={j}>{mappedItems}</tr>;
      });

    const scoreTableHeaders = leaderboard[category]
      ? Object.keys(leaderboard[category][0])?.map((item, i) => (
          <th key={i}>{NameMapping[item]}</th>
        ))
      : undefined;

    const availableOptions = Object.keys(leaderboard)?.map((item, i) => (
      <span
        key={i}
        onClick={handleOnClick(item)}
        className={`${category.toString() === item ? "active" : ""}`}
      >{`${item}x${item}`}</span>
    ));
    return (
      <>
        <div
          className={`backdrop ${showLeaderBoard ? "active" : ""}`}
          onClick={() => setShowLeaderBoard(false)}
        ></div>
        <div
          className={`leaderBoardConatiner ${showLeaderBoard ? "active" : ""}`}
        >
          <div className="cardHeader">
            <h1>LeaderBoard</h1>
            <div className="categoryContainer">{availableOptions}</div>
            <svg
              onClick={() => setShowLeaderBoard(false)}
              fill="#000000"
              width="50px"
              height="50px"
              viewBox="-3.2 -3.2 38.40 38.40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <path
                  transform="translate(-3.2, -3.2), scale(2.4)"
                  fill="#ff4242"
                  d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                  strokeWidth="0"
                ></path>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="tableContainer">
            {scoreTable === undefined && scoreTableHeaders === undefined ? (
              <>
                <h2>
                  Be the first to set a Highscore in {size}x{size}.
                </h2>
                <h2>All The Best👍</h2>
              </>
            ) : (
              <table>
                <thead>
                  <tr>{scoreTableHeaders}</tr>
                </thead>
                <tbody>{scoreTable}</tbody>
              </table>
            )}
          </div>
        </div>
      </>
    );
  }
);
export default LeaderBoardCard;
