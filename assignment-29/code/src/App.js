import "./App.css";
import GameContainer from "./components/GameContainer";
import LandingPage from "./components/LandingPage";
import useLocalStorageState from "./Hooks/useLocalStorageState";

function App() {
  const [name, setName] = useLocalStorageState("name", null);
  return (
    <div className="App">
      {name === null ? (
        <LandingPage updateName={setName} />
      ) : (
        <GameContainer name={name} setName={setName} />
      )}
    </div>
  );
}

export default App;
