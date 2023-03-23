import { useCallback, useEffect, useState } from "react";
import "./App.css";
import ListItem from "./Components/ListItem";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data") ?? "[]")
  );
  const [inputData, setInputData] = useState("");
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const toggleCompleted = useCallback(
    (idx) => {
      const updatedData = [...data];
      updatedData[idx].completed = !updatedData[idx].completed;
      setData(updatedData);
    },
    [data]
  );
  const deleteTask = useCallback(
    (idx) => {
      const updatedData = [...data];
      updatedData.splice(idx, 1);
      setData(updatedData);
    },
    [data]
  );

  const addNewTask = () => {
    if (inputData.trim() === "") {
      setIsError(true);
      setInputData("");
      return;
    } else {
      setIsError(false);
    }
    setData([{ task: inputData, completed: false }, ...data]);
    setInputData("");
  };

  const handleRefresh = () => {
    const refreshedList = data.filter((item) => !item.completed);
    if (refreshedList.length !== data.length) setData(refreshedList);
  };

  return (
    <div className="App">
      <div className="todoContainer">
        <div className="todoHeader">
          <h1>TODO List</h1>
          <svg
            viewBox="0 0 118.04 122.88"
            fill="limegreen"
            onClick={handleRefresh}
          >
            <title>refresh the list by removing all the completed tasks</title>
            <path d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z" />
          </svg>
        </div>
        <div className={`listWrapper ${data.length === 0 && "empty"}`}>
          {data.length !== 0 ? (
            data.map((item, i) => (
              <ListItem
                key={i}
                id={i}
                task={item.task}
                completed={item.completed}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <div>
              <svg
                className="emptyIcon"
                viewBox="0 0 1024 1024"
                version="1.1"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z" />
              </svg>
              <h2>Empty</h2>
            </div>
          )}
        </div>
        <div>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="Add a task todo"
              value={inputData}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setInputData(e.target.value);
                  addNewTask();
                }
              }}
              onChange={(e) => {
                setIsError(false);
                setInputData(e.target.value);
              }}
            ></input>
            <svg
              enableBackground="new 0 0 50 50"
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              onClick={addNewTask}
            >
              <rect fill="none" height="50" width="50" />
              <line
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
              />
              <line
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
              />
            </svg>
          </div>
          <span
            className={`error`}
            focused={(isError && inputData.trim() === "").toString()}
          >
            Please enter something
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
