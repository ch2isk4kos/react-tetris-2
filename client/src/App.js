import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
