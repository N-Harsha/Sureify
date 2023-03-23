import { useState } from "react";
import "./LandingPage.css";
const LandingPage = ({ updateName }) => {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const handleOnClick = () => {
    if (name.trim().length === 0) setHasError(true);
    else {
      updateName(name);
    }
    setName("");
  };
  return (
    <div className="landingPage">
      <div>
        <h1>Welcome,</h1>
        <h1>To Memory game</h1>
      </div>
      <div className="inputWrapper">
        <input
          value={name}
          name="username"
          type="text"
          placeholder="Enter your name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleOnClick();
            }
          }}
          onChange={(e) => {
            setHasError(false);
            setName(e.target.value);
          }}
        ></input>
        <div className={`error ${hasError ? "active" : ""}`}>
          Name cannot be blank
        </div>
        <button onClick={handleOnClick}>START</button>
      </div>
    </div>
  );
};
export default LandingPage;
