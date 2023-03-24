import { memo } from "react";
import "./GameFooter.css";
const GameFooter = memo(({ setSize, handleReset, setShowLeaderBoard }) => {
  console.log("footer");
  const reduceSize = () => {
    setSize((prev) => {
      if (prev <= 2) return prev;
      handleReset();
      return prev - 2;
    });
  };
  const increaseSize = () => {
    setSize((prev) => {
      if (prev >= 20) return prev;
      handleReset();
      return prev + 2;
    });
  };
  return (
    <div className="gameFooter">
      <svg
        onClick={reduceSize}
        width="40px"
        height="40px"
        viewBox="-2 -2 24.00 24.00"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0">
          <path
            transform="translate(-2, -2), scale(1.5)"
            fill="#ff5757"
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
          <path
            fill="#000000"
            fillRule="evenodd"
            d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z"
          ></path>{" "}
        </g>
      </svg>
      <span onClick={() => setShowLeaderBoard(true)}>Leaderboard</span>
      <svg
        onClick={increaseSize}
        width="40px"
        height="40px"
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0">
          <path
            transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
            fill="#7ed0ec"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
            fill="#000000"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
});
export default GameFooter;
