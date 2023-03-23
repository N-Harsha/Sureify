import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((cnt) => cnt + 1);
  };
  const decreaseCount = () => {
    setCount((cnt) => cnt - 1);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Counter : {count}</h1>
        <div className="btnContainer">
          <div className="button" onClick={decreaseCount}>
            decrease
          </div>
          <div className="button" onClick={increaseCount}>
            increase
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
