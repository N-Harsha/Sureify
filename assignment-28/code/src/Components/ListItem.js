import { memo } from "react";
import "./ListItem.css";

const ListItem = memo(
  ({ task, completed, id, toggleCompleted, deleteTask }) => {
    return (
      <div className="flexContainer">
        <div className="listItemContainer">
          <div
            className={`checkbox ${completed && "active"}`}
            onClick={() => toggleCompleted(id)}
          >
            {completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style={{ backgroundColor: "#c5c5c5" }}
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            )}
          </div>
          <div className={`label ${completed && "active"}`}>{task}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
          fill="red"
          onClick={() => deleteTask(id)}
        >
          <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z" />
        </svg>
      </div>
    );
  }
);
export default ListItem;
