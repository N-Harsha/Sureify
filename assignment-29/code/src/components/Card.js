import { useEffect, useRef, useState } from "react";
import "./Card.css";
const Card = ({ data, id, isFlipped, compareId, handleFlip }) => {
  const [flip, setFlip] = useState(isFlipped);
  const cardBackRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setFlip(isFlipped);
    }, 1);
  });
  useEffect(() => {
    const cardWidth = cardBackRef.current.offsetWidth;
    cardBackRef.current.style.fontSize = cardWidth * 0.5 + "px";
  });

  const handleClick = () => {
    setFlip((prev) => !prev);
    handleFlip(id);
  };
  return (
    <div
      className={`card ${
        flip === true ? "flip" : flip === "done" ? "flip done" : ""
      }`}
      onClick={handleClick}
    >
      <div className="cardWrapper">
        <div className="cardFront">{data}</div>
        <div className="cardBack" ref={cardBackRef}>
          {data}
        </div>
      </div>
    </div>
  );
};
export default Card;
