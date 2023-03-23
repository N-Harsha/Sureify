const RestartButton = ({ handleRestart }) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={handleRestart}
      width="50px"
      height="50px"
      viewBox="-7.35 -7.35 35.70 35.70"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      transform="rotate(90)matrix(1, 0, 0, 1, 0, 0)"
      stroke="#000000"
      strokeWidth="0.00021000000000000004"
    >
      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"
        transform="translate(0,0), scale(1)"
      >
        <rect
          x="-7.35"
          y="-7.35"
          width="35.70"
          height="35.70"
          rx="17.85"
          fill="#68d2ea"
          strokeWidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="2.31"
      >
        {" "}
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="matrix(0 1 1 0 2.5 2.5)"
        >
          {" "}
          <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>{" "}
          <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>{" "}
        </g>{" "}
      </g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="matrix(0 1 1 0 2.5 2.5)"
        >
          {" "}
          <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>{" "}
          <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
export default RestartButton;
