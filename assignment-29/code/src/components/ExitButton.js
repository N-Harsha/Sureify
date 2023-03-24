import { memo } from "react";

const ExitButton = memo(({ handleExit }) => {
  console.log("exit");
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleExit}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0">
        <rect
          x="-2.4"
          y="-2.4"
          width="28.80"
          height="28.80"
          rx="7.2"
          fill="#ff3838"
          strokeWidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Interface / Exit">
          {" "}
          <path
            id="Vector"
            d="M12 15L15 12M15 12L12 9M15 12H4M4 7.24802V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2839 4.21799 18.9076C4 18.4798 4 17.9201 4 16.8V16.75"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
});
export default ExitButton;
