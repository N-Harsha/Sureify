import "./App.css";
import data from "./data.json";
import ProfileContainer from "./components/ProfileContainer";
function App() {
  return <ProfileContainer data={data.data} />;
}

export default App;
