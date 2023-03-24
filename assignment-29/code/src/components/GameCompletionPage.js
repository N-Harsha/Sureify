import "./GameCompletionPage.css";
import formatTime from "./util";
const GameCompleteionPage = ({
  moves,
  timeElapsed,
  name,
  size,
  leaderboard,
  gameReset,
  setShowLeaderBoard,
}) => {
  console.log("gameComplete");
  const currentHighScore = leaderboard[size][0];
  const highScoreMessage =
    moves === currentHighScore.moves &&
    timeElapsed === currentHighScore.timeElapsed ? (
      <h2>WOW!!! You created a new Highscore...</h2>
    ) : (
      <h2>
        The Highscore for {size}x{size} is {leaderboard[size][0].moves} moves in{" "}
        {formatTime(leaderboard[size][0].timeElapsed)} time.
      </h2>
    );
  return (
    <div className="gameCompleteCard">
      <h1>Congratulations...🥳</h1>
      <h2>
        {name}, you have completed the game in {moves} moves and it took{" "}
        {formatTime(timeElapsed)} time.
      </h2>
      {highScoreMessage}
      <div>
        <span onClick={() => setShowLeaderBoard(true)}>See Leaderboard</span>
        <span onClick={gameReset}>Game Restart</span>
      </div>
    </div>
  );
};
export default GameCompleteionPage;
